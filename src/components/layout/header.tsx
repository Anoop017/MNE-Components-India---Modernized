"use client";

import React, { useState, useEffect } from 'react';
import { MneLogo } from '@/components/mne-logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '@/hooks/use-active-section';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'gallery', label: 'Showcase' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const activeSection = useActiveSection(navLinks.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ id, label }: { id: string, label: string }) => {
    return (
      <a 
        href={`#${id}`} 
        className={cn(
          "font-headline font-medium text-lg transition-all duration-300 relative",
          activeSection === id ? "text-accent" : "text-primary/70 hover:text-primary",
          "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-accent after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300",
          activeSection === id ? "after:scale-x-100 after:origin-bottom-left" : "hover:after:scale-x-100 hover:after:origin-bottom-left"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        {label}
      </a>
    );
  };
  
  const navContent = (
    <nav className="flex items-center gap-8 text-sm">
      {navLinks.map(link => <NavLink key={link.id} id={link.id} label={link.label} />)}
    </nav>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 shadow-2xl shadow-black/20 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
    )}>
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex h-24 items-center justify-between">
          <MneLogo />
          <div className="hidden lg:flex items-center gap-6">
            {navContent}
          </div>
          <div className='hidden lg:block'>
            <Button asChild className="bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-8 w-8 text-accent" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-background/90 backdrop-blur-xl border-l border-white/10 p-6">
                <div className="flex justify-between items-center mb-12">
                  <MneLogo />
                  <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-8 w-8 text-accent" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-8 text-2xl text-center">
                   {navLinks.map(link => <NavLink key={link.id} id={link.id} label={link.label} />)}
                   <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground font-bold" onClick={() => setMobileMenuOpen(false)}>
                      <a href="#contact">Get a Quote</a>
                    </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
