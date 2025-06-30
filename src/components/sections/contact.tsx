'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Building, Send } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Let's Build Together</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or need a quote for a specific component? Our team is ready to assist you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <Card className="bg-card border rounded-2xl p-4 lg:p-8 h-full">
              <CardHeader>
                <CardTitle className='font-headline text-3xl text-primary'>Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-lg mt-4">
                <div className="flex items-start gap-4">
                  <Building className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary/90">Head Office & Works</h3>
                    <address className="text-muted-foreground not-italic mt-2">
                      D-11, MIDC Satpur<br />
                      Nashik - 422007<br />
                      Maharashtra, India
                    </address>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-7 w-7 text-accent flex-shrink-0" />
                  <a href="tel:+919812039121" className="hover:text-accent transition-colors duration-300 text-primary/90">+91-9812039121</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-7 w-7 text-accent flex-shrink-0" />
                  <a href="mailto:info@mnecomponents.com" className="hover:text-accent transition-colors duration-300 text-primary/90">info@mnecomponents.com</a>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Card className="bg-card border rounded-2xl p-4 lg:p-8">
              <CardHeader>
                <CardTitle className='font-headline text-3xl text-primary'>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="space-y-2">
                    <Input id="name" placeholder="Your Name" required className="bg-input/50 h-12 text-lg focus:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <Input id="email" type="email" placeholder="Your Email" required className="bg-input/50 h-12 text-lg focus:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <Textarea id="message" placeholder="Your Message" rows={5} required className="bg-input/50 text-lg focus:border-accent" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground font-bold text-lg h-14 hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
