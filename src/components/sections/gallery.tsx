"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FadeIn } from '@/components/fade-in';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Machinery in factory', hint: 'industrial machinery' },
  { src: 'https://placehold.co/600x800.png', alt: 'Close-up of a metal component', hint: 'metal parts' },
  { src: 'https://placehold.co/600x400.png', alt: 'Production line', hint: 'factory assembly' },
  { src: 'https://placehold.co/600x400.png', alt: 'Stacks of finished products', hint: 'industrial products' },
  { src: 'https://placehold.co/600x800.png', alt: 'Detailed view of a fine blanked part', hint: 'precision gear' },
  { src: 'https://placehold.co/600x400.png', alt: 'Quality control process', hint: 'quality inspection' },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Gallery</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A glimpse into our manufacturing process and high-quality products.
          </p>
        </FadeIn>

        <div className="columns-2 md:columns-3 gap-4">
          <Dialog>
            {galleryImages.map((image, index) => (
              <FadeIn key={index} as="div" className="mb-4 break-inside-avoid-column">
                  <DialogTrigger asChild onClick={() => setSelectedImage(image.src)}>
                    <Card className="overflow-hidden group relative cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={index % 2 === 0 ? 400 : 800}
                        className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={image.hint}
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Plus className="h-12 w-12 text-white" />
                      </div>
                    </Card>
                  </DialogTrigger>
              </FadeIn>
            ))}
            {selectedImage && (
                <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                    <Image
                    src={selectedImage}
                    alt="Enlarged gallery view"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-lg"
                    />
                </DialogContent>
            )}
          </Dialog>
        </div>
      </div>
    </section>
  );
}
