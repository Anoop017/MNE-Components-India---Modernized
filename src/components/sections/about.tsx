import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/fade-in';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">About MNE Components</h2>
              <p className="text-lg text-muted-foreground">
                MNE Components India Pvt. Ltd. is a leading manufacturer of high precision sheet metal press components, fine blanked components, and machined components.
              </p>
              <p className="text-muted-foreground">
                Established with a vision to deliver excellence, we cater to a diverse range of industries including automotive, engineering, and electronics. Our commitment to quality, innovation, and customer satisfaction has been the cornerstone of our success. We leverage state-of-the-art technology and a skilled workforce to meet the most stringent industry standards.
              </p>
            </div>
            <div className='flex items-center justify-center'>
              <Card className="overflow-hidden shadow-2xl rounded-xl w-full max-w-md">
                <CardContent className="p-0">
                   <Image
                      src="https://placehold.co/600x600.png"
                      alt="Team working at MNE Components"
                      width={600}
                      height={600}
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      data-ai-hint="factory team"
                    />
                </CardContent>
              </Card>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
