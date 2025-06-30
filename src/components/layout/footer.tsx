import React from 'react';
import { MneLogo } from '@/components/mne-logo';
import { Mail, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#careers', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <MneLogo />
            <p className="mt-4 text-sm text-muted-foreground">
              Precision engineering for a better tomorrow.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline font-semibold text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-headline font-semibold text-primary">Contact Us</h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
              <p>Plot No. 25, Sector-3, HSIIDC, Phase-1, Growth Centre Bawal Distt.- Rewari (Haryana)</p>
              <p>Phone: <a href="tel:+919812039121" className="hover:text-primary">+91-9812039121</a></p>
              <p>Email: <a href="mailto:info@mnecomponents.com" className="hover:text-primary">info@mnecomponents.com</a></p>
            </address>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
              <a href="mailto:info@mnecomponents.com" className="text-muted-foreground hover:text-primary"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MNE Components India Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
