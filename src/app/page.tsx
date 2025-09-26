
"use client";

import AppLayout from "@/components/layout/app-layout";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  FileText, 
  Map, 
  Bot, 
  Calendar, 
  BookOpen, 
  ShoppingBag,
  ArrowRight,
  ScanLine,
  Ticket,
  LifeBuoy,
  Users,
  LocateFixed,
  Sun,
  Cloudy,
  CloudRain,
  Wind,
  Sunrise,
  Sunset,
  Cpu
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  {
    title: "Immersive 360° Views",
    description: "Virtually visit monasteries and landscapes.",
    icon: Camera,
    href: "/immersive-views",
    color: "text-red-500",
  },
  {
    title: "Document Hub",
    description: "Manage your e-permits, tickets, and passes.",
    icon: FileText,
    href: "/document-hub",
    color: "text-blue-500",
  },
  {
    title: "Smart Maps",
    description: "Offline maps with geotagged points of interest.",
    icon: Map,
    href: "/smart-maps",
    color: "text-green-500",
  },
  {
    title: "Location Tracker",
    description: "Find your current location on the map.",
    icon: LocateFixed,
    href: "/location-tracker",
    color: "text-purple-500",
  },
   {
    title: "AI Assistant",
    description: "Get trip advice from our AI guide.",
    icon: Cpu,
    href: "/ai-assistant",
    color: "text-orange-500",
  },
  {
    title: "Regional Calendar",
    description: "Discover local festivals, events, and rituals.",
    icon: Calendar,
    href: "/regional-calendar",
    color: "text-orange-500",
  },
  {
    title: "Narrative Walkthroughs",
    description: "Explore stories of endangered heritage.",
    icon: BookOpen,
    href: "/narrative-walkthroughs",
    color: "text-yellow-500",
  },
  {
    title: "Local Crafts",
    description: "Support local artisans by buying their crafts.",
    icon: ShoppingBag,
    href: "/local-crafts",
    color: "text-teal-500",
  },
  {
    title: "Land Recognition",
    description: "Identify landscapes from your photos.",
    icon: ScanLine,
    href: "/land-recognition",
    color: "text-indigo-500",
  },
  {
    title: "Bookings",
    description: "Book tickets, hotels, transport and more.",
    icon: Ticket,
    href: "/ticket-booking",
    color: "text-pink-500",
  },
  {
    title: "Help & FAQ",
    description: "Find answers to your questions.",
    icon: LifeBuoy,
    href: "/help",
    color: "text-gray-500",
  },
   {
    title: "About Us",
    description: "Meet the team behind Sikkim Explorer.",
    icon: Users,
    href: "/about-us",
    color: "text-cyan-500",
  },
];

const weatherData = [
  {
    location: "Gangtok",
    temp: 18,
    condition: "Partly Cloudy",
    icon: Cloudy,
    wind: "10 km/h",
    sunrise: "5:15 AM",
    sunset: "6:30 PM",
  },
  {
    location: "Pelling",
    temp: 15,
    condition: "Sunny",
    icon: Sun,
    wind: "8 km/h",
    sunrise: "5:20 AM",
    sunset: "6:40 PM",
  },
  {
    location: "Lachung (N. Sikkim)",
    temp: 9,
    condition: "Light Rain",
    icon: CloudRain,
    wind: "15 km/h",
    sunrise: "5:10 AM",
    sunset: "6:25 PM",
  },
];


const WeatherIcon = ({ icon: Icon, condition }: { icon: React.ElementType, condition: string }) => {
  let color = "text-yellow-500";
  if (condition.includes("Cloud")) color = "text-gray-400";
  if (condition.includes("Rain")) color = "text-blue-500";

  return <Icon className={`w-16 h-16 ${color}`} />;
};

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <AppLayout>
      <main className="flex-1">
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-center text-white">
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
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 p-4">
              <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
                Welcome to Sikkim Explorer
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                Your all-in-one companion to discover the breathtaking beauty, vibrant culture, and hidden gems of Sikkim.
              </p>
            </div>
        </section>

        <div className="p-4 md:p-8 space-y-8">
            <section>
              <h2 className="font-headline text-3xl font-semibold text-primary mb-4">Weather Forecast</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {weatherData.map(weather => (
                  <Card key={weather.location}>
                    <CardHeader>
                      <CardTitle>{weather.location}</CardTitle>
                      <CardDescription>{weather.condition}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center text-center gap-4">
                      <WeatherIcon icon={weather.icon} condition={weather.condition} />
                      <div className="text-6xl font-bold">
                        {weather.temp}°<span className="text-4xl">C</span>
                      </div>
                      <div className="w-full grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2"><Wind className="w-4 h-4"/><span>{weather.wind}</span></div>
                          <div className="flex items-center gap-2"><Sunrise className="w-4 h-4"/><span>{weather.sunrise}</span></div>
                          <div className="flex items-center gap-2"></div>
                          <div className="flex items-center gap-2"><Sunset className="w-4 h-4"/><span>{weather.sunset}</span></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
               <p className="text-xs text-muted-foreground mt-4 text-center">Note: Weather data is for demonstration purposes only.</p>
            </section>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature) => (
                <Link href={feature.href} key={feature.title} className="group">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <CardHeader className="flex-row items-start gap-4 space-y-0">
                    <div className="flex-shrink-0">
                        <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <div>
                        <CardTitle>{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                    </div>
                    </CardHeader>
                    <div className="flex-grow" />
                    <div className="p-6 pt-0 flex justify-end">
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                </Card>
                </Link>
            ))}
            </div>
        </div>
      </main>
    </AppLayout>
  );
}
