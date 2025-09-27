
import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Eye, Mountain } from "lucide-react";

export default function AboutUsPage() {
  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="About Sikkim Vista"
          description="Learn about our mission to bring you the ultimate guide to the treasures of Sikkim."
        />

        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Mountain className="w-6 h-6 text-primary" />
                        <span>Our Story</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                   <p>Sikkim Vista was born from a deep love for the Himalayan region and a desire to share its wonders with the world. We believe that technology can bridge distances and bring people closer to the rich culture, breathtaking landscapes, and vibrant traditions of Sikkim. Our goal is to create a seamless, immersive, and informative travel experience for every visitor.</p>
                   <p>We are a passionate team of developers, designers, and travel enthusiasts committed to building a platform that not only serves as a guide but also fosters a deeper appreciation for this incredible destination.</p>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="w-6 h-6 text-primary" />
                            <span>Our Mission</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        To empower tourists with a comprehensive, user-friendly, and AI-driven digital companion for exploring Sikkim, while promoting sustainable tourism and supporting local communities.
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Eye className="w-6 h-6 text-primary" />
                            <span>Our Vision</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        To be the most trusted and innovative travel platform for the Himalayan region, revolutionizing how travelers discover, experience, and connect with unique cultures and pristine environments.
                    </CardContent>
                </Card>
            </div>
        </div>
      </main>
    </AppLayout>
  );
}
