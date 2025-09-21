
import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "How do I apply for a Restricted Area Permit (RAP)?",
    answer: "You can apply for a RAP/PAP through the official Sikkim tourism website or upon arrival at designated entry points. Our Document Hub allows you to store and manage these permits digitally once they are approved.",
  },
  {
    question: "Is the AI Travel Assistant available 24/7?",
    answer: "Yes, our AI Travel Assistant is designed to provide you with information and create itineraries anytime you need. Just type your query, and it will respond instantly.",
  },
  {
    question: "Are the Smart Maps available offline?",
    answer: "Yes, our Smart Maps are designed to be offline-friendly. We recommend loading the map of the area you plan to visit while you have an internet connection, and it will be available for navigation even without a signal.",
  },
  {
    question: "How does the Land Recognition feature work?",
    answer: "Simply take a photo with your camera or upload an image from your device on the Land Recognition page. Our AI will analyze the photo and provide information about the landscape, landmarks, and geography.",
  },
  {
    question: "What payment methods are accepted for ticket and craft purchases?",
    answer: "Currently, our booking and purchasing features are for demonstration purposes. In a real-world scenario, we would integrate secure payment gateways that accept credit/debit cards, UPI, and other popular digital wallets.",
  },
  {
    question: "How can I support local artisans?",
    answer: "You can support them by purchasing their beautiful, handcrafted items from our Local Crafts section. Every purchase directly contributes to the livelihood of Sikkim's talented artisans.",
  },
];

export default function HelpPage() {
  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="Help & FAQ"
          description="Find answers to frequently asked questions about the Sikkim Explorer app and traveling in Sikkim."
        />
        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </AppLayout>
  );
}
