import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { regionalEvents } from "@/lib/data";
import { Calendar } from "lucide-react";

export default function RegionalCalendarPage() {
  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="Regional Calendar"
          description="Immerse yourself in the vibrant culture of Sikkim. Explore a year of colorful festivals and sacred rituals."
        />
        <div className="space-y-8">
          {regionalEvents.map((monthData) => (
            <div key={monthData.month}>
              <h2 className="font-headline text-3xl font-semibold text-primary mb-4">{monthData.month}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {monthData.events.map((event) => (
                  <Card key={event.name}>
                    <CardHeader>
                      <CardTitle>{event.name}</CardTitle>
                      <div className="flex items-center text-muted-foreground pt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{event.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </AppLayout>
  );
}
