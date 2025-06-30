import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/fade-in';

const products = [
  { name: 'Press Components', image: 'https://placehold.co/600x400.png', hint: 'metal parts' },
  { name: 'Fine Blanked Components', image: 'https://placehold.co/600x400.png', hint: 'precision gear' },
  { name: 'Machined Components', image: 'https://placehold.co/600x400.png', hint: 'machined metal' },
  { name: 'Insert Molded Components', image: 'https://placehold.co/600x400.png', hint: 'molded plastic' },
  { name: 'Automotive Parts', image: 'https://placehold.co/600x400.png', hint: 'car parts' },
  { name: 'Sub Assemblies', image: 'https://placehold.co/600x400.png', hint: 'industrial assembly' },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Products</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We specialize in a wide range of precision-engineered components for various industrial applications.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <FadeIn key={product.name} className={`delay-${index * 100}`}>
              <Card className="overflow-hidden group relative block border-2 border-border hover:border-primary transition-all duration-300 rounded-lg shadow-lg hover:shadow-2xl">
                <CardContent className="p-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={product.hint}
                  />
                  <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:bg-black/60" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-headline text-2xl font-bold text-white">
                      {product.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
