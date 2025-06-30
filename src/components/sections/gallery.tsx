"use client";

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FadeIn } from '@/components/fade-in';
import { Maximize } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const galleryImages = [
  { src: 'https://placehold.co/800x600.png', alt: 'Machinery in factory', hint: 'industrial machinery', title: 'Advanced Press Line' },
  { src: 'https://placehold.co/800x600.png', alt: 'Close-up of a metal component', hint: 'metal parts', title: 'Fine-Blanked Gearset' },
  { src: 'https://placehold.co/800x600.png', alt: 'Production line', hint: 'factory assembly', title: 'Automated Assembly' },
  { src: 'https://placehold.co/800x600.png', alt: 'Stacks of finished products', hint: 'industrial products', title: 'Finished Goods Inventory' },
  { src: 'https://placehold.co/800x600.png', alt: 'Detailed view of a fine blanked part', hint: 'precision gear', title: 'CNC Machined Housing' },
  { src: 'https://placehold.co/800x600.png', alt: 'Quality control process', hint: 'quality inspection', title: 'Laser Inspection Station' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Product Showcase</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A visual journey through our state-of-the-art facility and the high-quality components we produce.
          </p>
        </FadeIn>

        <FadeIn>
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Dialog>
                    <DialogTrigger asChild>
                       <Card className="overflow-hidden group relative cursor-pointer rounded-2xl border border-white/10 shadow-lg transition-all duration-300 hover:shadow-accent/10">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={600}
                          className="object-cover w-full h-auto aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                          data-ai-hint={image.hint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                            <h3 className="font-headline text-2xl font-bold text-white">{image.title}</h3>
                            <div className="mt-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                                <span>View Larger</span>
                                <Maximize size={16} />
                            </div>
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1600}
                        height={1200}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </DialogContent>
                   </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 text-white bg-black/30 hover:bg-accent hover:text-accent-foreground border-none" />
            <CarouselNext className="absolute right-4 text-white bg-black/30 hover:bg-accent hover:text-accent-foreground border-none" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}
