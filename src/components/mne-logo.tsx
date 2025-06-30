import React from 'react';
import { cn } from '@/lib/utils';

export const MneLogo = ({ className, textClassName }: { className?: string, textClassName?: string }) => {
  return (
    <a href="#home" className={cn("flex items-center gap-2", className)}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-primary'>
        <path d="M3 12L3 20L8 20L8 15L16 15L16 20L21 20L21 12L12 4L3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 15H13V12H11V15Z" fill="currentColor"/>
        <path d="M5 12H7V9H5V12Z" fill="currentColor"/>
        <path d="M17 12H19V9H17V12Z" fill="currentColor"/>
      </svg>
      <span className={cn("font-headline font-bold text-xl text-primary", textClassName)}>
        MNE Components
      </span>
    </a>
  );
};
