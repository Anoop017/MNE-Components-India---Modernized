import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="MNE Components factory background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="industrial machinery"
        priority
      />
      <div className="absolute inset-0 bg-primary/70 z-10" />
      <div className="relative z-20 container mx-auto max-w-4xl px-4 md:px-8">
        <FadeIn>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Precision Engineered Components
          </h1>
        </FadeIn>
        <FadeIn className='delay-300'>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 font-body">
            Delivering high-quality press, fine blanked, and machined components for automotive and engineering industries worldwide.
          </p>
        </FadeIn>
        <FadeIn className='delay-500'>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 group">
            <a href="#about">
              Explore More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
