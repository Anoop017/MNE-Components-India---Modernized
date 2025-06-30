import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function CareersSection() {
  return (
    <section id="careers" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center px-4 md:px-8">
        <FadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Join Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            We’re always looking for passionate engineers, skilled operators, and innovative minds to help us shape the future of manufacturing.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 group">
            <a href="mailto:hr@mnecomponents.com">
              Send Resume
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
