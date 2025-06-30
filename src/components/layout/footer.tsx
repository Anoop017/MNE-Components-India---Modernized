import React from 'react';
import { MneLogo } from '@/components/mne-logo';
import { Mail, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#gallery', label: 'Showcase' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-secondary border-t">
      <div className="container mx-auto max-w-screen-xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <MneLogo />
            <p className="mt-4 text-sm max-w-xs text-muted-foreground">
              Pioneering precision engineering for tomorrow's technology.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:info@mnecomponents.com" className="text-muted-foreground hover:text-accent transition-colors"><Mail size={24} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold text-primary text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-primary text-lg">Get in Touch</h3>
            <address className="mt-4 space-y-3 text-muted-foreground not-italic">
              <p>Plot No. 25, Sector-3, HSIIDC, Bawal, Rewari (Haryana)</p>
              <p>Phone: <a href="tel:+919812039121" className="hover:text-accent">+91-9812039121</a></p>
              <p>Email: <a href="mailto:info@mnecomponents.com" className="hover:text-accent">info@mnecomponents.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MNE Components India Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
