
"use client";

import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { eventTickets, placeTickets, hotelBookings, restaurantBookings, transportBookings } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { BedDouble, UtensilsCrossed, Car, IndianRupee, Ticket } from "lucide-react";

export default function TicketBookingPage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);
  const { toast } = useToast();

  const handleBooking = (itemName: string) => {
    toast({
      title: "Booking Confirmed!",
      description: `Your booking for ${itemName} has been made.`,
    });
  };

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="Bookings"
          description="Secure your spot for Sikkim's most popular attractions, events, stays, and transport."
        />
        <Tabs defaultValue="events">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 md:w-auto">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="places">Places</TabsTrigger>
            <TabsTrigger value="hotels"><BedDouble className="w-4 h-4 mr-2" />Stays</TabsTrigger>
            <TabsTrigger value="restaurants"><UtensilsCrossed className="w-4 h-4 mr-2"/>Restaurants</TabsTrigger>
            <TabsTrigger value="transport"><Car className="w-4 h-4 mr-2"/>Transport</TabsTrigger>
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
                      <div className="flex items-center text-xl font-bold text-primary">
                        <IndianRupee className="h-5 w-5 mr-1" />
                        <span>{ticket.price}</span>
                      </div>
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
                      <div className="flex items-center text-xl font-bold text-primary">
                        <IndianRupee className="h-5 w-5 mr-1" />
                        <span>{ticket.price}</span>
                      </div>
                      <Button onClick={() => handleBooking(ticket.name)}>
                         <Ticket className="mr-2 h-4 w-4" /> Book Now
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="hotels">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {hotelBookings.map((item) => {
                const image = getImage(item.imageId);
                return (
                  <Card key={item.id} className="overflow-hidden flex flex-col">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full">
                        {image && (
                          <Image src={image.imageUrl} alt={item.name} fill className="object-cover" data-ai-hint={image.imageHint} />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="mt-1 text-sm">{item.type}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between items-center">
                      <div className="flex items-center font-bold text-primary">
                        <IndianRupee className="h-5 w-5 mr-1" />
                        <span className="text-xl">{item.pricePerNight}</span>
                         <span className="text-sm text-muted-foreground ml-1">/ night</span>
                      </div>
                      <Button onClick={() => handleBooking(item.name)}>
                        <BedDouble className="mr-2 h-4 w-4" /> Book Stay
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="restaurants">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {restaurantBookings.map((item) => {
                const image = getImage(item.imageId);
                return (
                  <Card key={item.id} className="overflow-hidden flex flex-col">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full">
                        {image && (
                          <Image src={image.imageUrl} alt={item.name} fill className="object-cover" data-ai-hint={image.imageHint}/>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="mt-1 text-sm">{item.cuisine}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between items-center">
                       <div className="font-semibold text-muted-foreground">{item.priceRange}</div>
                      <Button onClick={() => handleBooking(item.name)}>
                        <UtensilsCrossed className="mr-2 h-4 w-4" /> Reserve Table
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="transport">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {transportBookings.map((item) => {
                const image = getImage(item.imageId);
                return (
                  <Card key={item.id} className="overflow-hidden flex flex-col">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full">
                        {image && (
                          <Image src={image.imageUrl} alt={item.name} fill className="object-cover" data-ai-hint={image.imageHint}/>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="mt-1 text-sm">{item.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between items-center">
                       <div className="flex items-center text-xl font-bold text-primary">
                        <IndianRupee className="h-5 w-5 mr-1" />
                        <span>{item.price}</span>
                      </div>
                      <Button onClick={() => handleBooking(item.name)}>
                        <Car className="mr-2 h-4 w-4" /> Book Ride
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
