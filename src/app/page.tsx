
"use client";

import AppLayout from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cpu, 
  Ticket, 
  FileText, 
  LifeBuoy,
  Map, 
  LocateFixed, 
  Camera, 
  ScanLine,
  BookCopy, 
  BookOpen, 
  Calendar, 
  ShoppingBag,
  Palmtree,
  MountainSnow,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import WeatherWidget from "@/components/WeatherWidget";

const planYourTripFeatures = [
  { title: "AI Assistant", description: "Personalized trip planning & tips.", icon: Cpu, href: "/ai-assistant" },
  { title: "Bookings", description: "Book hotels, transport, and tickets.", icon: Ticket, href: "/ticket-booking" },
  { title: "Document Hub", description: "Manage your permits and documents.", icon: FileText, href: "/document-hub" },
  { title: "Help & FAQ", description: "Find answers and emergency contacts.", icon: LifeBuoy, href: "/help" },
];

const exploreFeatures = [
  { title: "Smart Maps", description: "Interactive maps with points of interest.", icon: Map, href: "/smart-maps" },
  { title: "Location Tracker", description: "Find your current location on the map.", icon: LocateFixed, href: "/location-tracker" },
  { title: "Immersive 360° Views", description: "Virtually visit stunning landscapes.", icon: Camera, href: "/immersive-views" },
  { title: "Land Recognition", description: "Identify landscapes from your photos.", icon: ScanLine, href: "/land-recognition" },
];

const discoverFeatures = [
  { title: "Sikkim Pedia", description: "An encyclopedia of Sikkim's history & culture.", icon: BookCopy, href: "/sikkim-pedia" },
  { title: "Narrative Walkthroughs", description: "Explore stories of endangered heritage.", icon: BookOpen, href: "/narrative-walkthroughs" },
  { title: "Regional Calendar", description: "Discover local festivals and events.", icon: Calendar, href: "/regional-calendar" },
  { title: "Local Crafts", description: "Support local artisans by buying their crafts.", icon: ShoppingBag, href: "/local-crafts" },
];

const FeatureCard = ({ title, description, icon: Icon, href }: { title: string, description: string, icon: React.ElementType, href: string }) => (
  <Link href={href} className="group block animate-fade-in-up">
    <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:bg-card/95">
      <CardHeader className="flex-row items-center gap-4">
        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
          <Icon className="w-6 h-6 text-primary group-hover:text-accent-foreground" />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  </Link>
);


export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const headlineWords = "Discover the Land of Mystic Splendour".split(" ");

  return (
    <AppLayout>
      <main className="flex-1 bg-background">
        <section className="relative h-[450px] md:h-[600px] flex items-center justify-center text-center text-white">
            {heroImage && (
              <Image 
                src={heroImage.imageUrl}
                alt="Beautiful Sikkim mountains" 
                fill 
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
            <div className="relative z-10 p-4 max-w-4xl mx-auto">
              <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tight">
                {headlineWords.map((word, index) => (
                  <span key={index} className="inline-block animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                    {word}&nbsp;
                  </span>
                ))}
              </h1>
              <p className="mt-6 text-lg md:text-xl animate-fade-in-up" style={{ animationDelay: `${headlineWords.length * 100}ms`}}>
                Your ultimate guide to the breathtaking beauty, vibrant culture, and hidden gems of Sikkim.
              </p>
              <div className="mt-8 flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: `${(headlineWords.length + 1) * 100}ms`}}>
                <Button size="lg" asChild>
                  <Link href="/ai-assistant">Plan My Trip</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/sikkim-pedia">Explore Sikkim</Link>
                </Button>
              </div>
            </div>
        </section>

        <div className="p-4 md:p-8 space-y-16">

            <section className="-mt-32 relative z-20">
                <WeatherWidget />
            </section>
            
            <section id="plan">
              <div className="flex items-center gap-4 mb-8">
                <Palmtree className="w-8 h-8 text-primary" />
                <h2 className="font-headline text-3xl font-semibold text-foreground">Plan Your Trip</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {planYourTripFeatures.map((feature, index) => (
                  <div key={feature.title} style={{ animationDelay: `${index * 100}ms`}}>
                    <FeatureCard {...feature} />
                  </div>
                ))}
              </div>
            </section>
            
            <section id="explore">
               <div className="flex items-center gap-4 mb-8">
                <MountainSnow className="w-8 h-8 text-primary" />
                <h2 className="font-headline text-3xl font-semibold text-foreground">Explore The Terrain</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {exploreFeatures.map((feature, index) => (
                  <div key={feature.title} style={{ animationDelay: `${index * 100}ms`}}>
                    <FeatureCard {...feature} />
                  </div>
                ))}
              </div>
            </section>

            <section id="discover">
               <div className="flex items-center gap-4 mb-8">
                <Sparkles className="w-8 h-8 text-primary" />
                <h2 className="font-headline text-3xl font-semibold text-foreground">Discover The Culture</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {discoverFeatures.map((feature, index) => (
                   <div key={feature.title} style={{ animationDelay: `${index * 100}ms`}}>
                    <FeatureCard {...feature} />
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center">
              <Card className="bg-secondary/40 border-dashed animate-fade-in-up">
                <CardContent className="p-8">
                  <h3 className="font-headline text-2xl mb-2">About Sikkim Vista</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
                    Our mission is to provide an innovative, all-in-one digital companion for tourists, promoting sustainable travel and celebrating the unique cultural and natural heritage of Sikkim.
                  </p>
                  <Button asChild variant="secondary">
                     <Link href="/about-us">
                        Learn More About Us <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

        </div>
      </main>
    </AppLayout>
  );
}
