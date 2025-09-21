
"use client";

import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { eventTickets, placeTickets } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Ticket } from "lucide-react";

export default function TicketBookingPage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);
  const { toast } = useToast();

  const handleBooking = (itemName: string) => {
    toast({
      title: "Booking Confirmed!",
      description: `Your ticket for ${itemName} has been booked.`,
    });
  };

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="Ticket Booking"
          description="Secure your spot for Sikkim's most popular events and attractions. Book your tickets hassle-free."
        />
        <Tabs defaultValue="events">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="places">Tourist Places</TabsTrigger>
          </TabsList>
          <TabsContent value="events">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {eventTickets.map((ticket) => {
                const image = getImage(ticket.imageId);
                return (
                  <Card key={ticket.id} className="overflow-hidden flex flex-col">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={ticket.name}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="text-lg">{ticket.name}</CardTitle>
                      <CardDescription className="mt-1 text-sm">{ticket.date}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between items-center">
                      <p className="text-xl font-bold text-primary">₹{ticket.price}</p>
                      <Button onClick={() => handleBooking(ticket.name)}>
                        <Ticket className="mr-2 h-4 w-4" /> Book Now
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="places">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {placeTickets.map((ticket) => {
                const image = getImage(ticket.imageId);
                return (
                  <Card key={ticket.id} className="overflow-hidden flex flex-col">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={ticket.name}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="text-lg">{ticket.name}</CardTitle>
                      <CardDescription className="mt-1 text-sm">{ticket.type}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between items-center">
                      <p className="text-xl font-bold text-primary">₹{ticket.price}</p>
                      <Button onClick={() => handleBooking(ticket.name)}>
                         <Ticket className="mr-2 h-4 w-4" /> Book Now
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </AppLayout>
  );
}
