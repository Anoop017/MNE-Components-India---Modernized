import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/fade-in';
import { ArrowRight } from 'lucide-react';

const products = [
  { name: 'Press Components', description: 'High-volume, precision-stamped metal parts for various applications.', image: 'https://placehold.co/600x400.png', hint: 'metal parts' },
  { name: 'Fine Blanked Components', description: 'Superior edge quality and flatness for critical performance parts.', image: 'https://placehold.co/600x400.png', hint: 'precision gear' },
  { name: 'Machined Components', description: 'Complex geometries and tight tolerances achieved through CNC machining.', image: 'https://placehold.co/600x400.png', hint: 'machined metal' },
  { name: 'Insert Molded Components', description: 'Combining metal and plastic for robust, integrated solutions.', image: 'https://placehold.co/600x400.png', hint: 'molded plastic' },
  { name: 'Automotive Parts', description: 'Safety-critical and functional components for the automotive sector.', image: 'https://placehold.co/600x400.png', hint: 'car parts' },
  { name: 'Sub Assemblies', description: 'Complete assembled units, ready for integration into your production line.', image: 'https://placehold.co/600x400.png', hint: 'industrial assembly' },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Core Capabilities</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            From individual components to complex sub-assemblies, our manufacturing expertise covers a wide spectrum of industrial needs.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <FadeIn key={product.name} className={`delay-${index * 100}`}>
              <Card className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl group overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={product.hint}
                  />
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="font-headline text-2xl font-bold text-primary">
                    {product.name}
                  </CardTitle>
                  <p className="text-muted-foreground mt-3 flex-grow">{product.description}</p>
                   <div className="mt-6 text-accent font-semibold flex items-center gap-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
