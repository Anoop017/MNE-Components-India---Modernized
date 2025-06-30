"use client";

import React, { useState, useEffect } from 'react';
import { MneLogo } from '@/components/mne-logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '@/hooks/use-active-section';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Products' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
];

const productList = ['Press Components', 'Fine Blanked Components', 'Machined Components', 'Insert Molded Components'];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setProductMenuOpen] = useState(false);
  
  const activeSection = useActiveSection(navLinks.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ id, label, isDropdown = false }: { id: string, label: string, isDropdown?: boolean }) => {
    const linkClasses = cn(
      "font-headline font-medium transition-colors hover:text-primary",
      activeSection === id ? "text-primary" : "text-foreground/80"
    );
    
    if (isDropdown) {
      return (
        <div onMouseEnter={() => setProductMenuOpen(true)} onMouseLeave={() => setProductMenuOpen(false)}>
          <Popover open={isProductMenuOpen} onOpenChange={setProductMenuOpen}>
            <PopoverTrigger asChild>
              <a href={`#${id}`} className={linkClasses}>{label}</a>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2 bg-background/95 backdrop-blur-sm" align="start">
              <div className="grid">
                {productList.map((product) => (
                  <a key={product} href="#products" className="p-2 rounded-md hover:bg-secondary text-sm font-body">
                    {product}
                  </a>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      );
    }

    return (
      <a href={`#${id}`} className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
        {label}
      </a>
    );
  };
  
  const navContent = (
    <nav className="flex items-center gap-6 text-sm">
      {navLinks.map(link => <NavLink key={link.id} id={link.id} label={link.label} isDropdown={link.id === 'products'} />)}
    </nav>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <MneLogo />
          <div className="hidden md:flex items-center gap-6">
            {navContent}
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
                <div className="flex justify-between items-center mb-8">
                  <MneLogo />
                  <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-6 text-lg">
                  {navLinks.map(link => (
                    <a key={link.id} href={`#${link.id}`} className={cn("font-headline font-medium transition-colors hover:text-primary", activeSection === link.id ? "text-primary" : "text-foreground/80")} onClick={() => setMobileMenuOpen(false)}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
