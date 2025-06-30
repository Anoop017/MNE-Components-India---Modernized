import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <Card className="h-full shadow-lg">
              <CardHeader>
                <CardTitle className='font-headline text-primary'>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>Plot No. 25, Sector-3, HSIIDC, Phase-1, Growth Centre Bawal Distt.- Rewari (Haryana)</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+919812039121" className="hover:text-primary">+91-9812039121</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:info@mnecomponents.com" className="hover:text-primary">info@mnecomponents.com</a>
                </div>
                <div className="pt-4 border-t">
                  <iframe
                    src="https://maps.google.com/maps?q=28.08,76.58&hl=en&z=14&output=embed"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-md"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          
          <FadeIn className="delay-200">
            <Card className="h-full shadow-lg">
              <CardHeader>
                <CardTitle className='font-headline text-primary'>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Input id="email" type="email" placeholder="Your Email" />
                  </div>
                  <div className="space-y-2">
                    <Textarea id="message" placeholder="Your Message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
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
