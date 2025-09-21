
"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import {
  Camera,
  FileText,
  Map,
  Bot,
  Calendar as CalendarIcon,
  BookOpen,
  ShoppingBag,
  Home,
  Mountain,
  User,
  ScanLine,
  Ticket,
  LifeBuoy,
  Users,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { AiChat } from '../ai-chat';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/immersive-views', label: 'Immersive Views', icon: Camera },
  { href: '/document-hub', label: 'Document Hub', icon: FileText },
  { href: '/smart-maps', label: 'Smart Maps', icon: Map },
  { href: '/regional-calendar', label: 'Regional Calendar', icon: CalendarIcon },
  { href: '/narrative-walkthroughs', label: 'Narratives', icon: BookOpen },
  { href: '/local-crafts', label: 'Local Crafts', icon: ShoppingBag },
  { href: '/land-recognition', label: 'Land Recognition', icon: ScanLine },
  { href: '/ticket-booking', label: 'Ticket Booking', icon: Ticket },
  { href: '/help', label: 'Help & FAQ', icon: LifeBuoy },
  { href: '/about-us', label: 'About Us', icon: Users },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const yetiAvatar = PlaceHolderImages.find(img => img.id === 'yeti-avatar');

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-3 p-2">
            <Button variant="ghost" size="icon" className="text-sidebar-foreground">
              <Mountain className="w-7 h-7" />
            </Button>
            <div className="text-xl font-semibold font-headline text-sidebar-foreground group-data-[collapsible=icon]:hidden">
              Sikkim Explorer
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
           <Separator className="my-2 bg-sidebar-border group-data-[collapsible=icon]:hidden" />
           <div className="flex items-center gap-3 p-2 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://picsum.photos/seed/user-avatar/100/100" alt="User" />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
              <div className="group-data-[collapsible=icon]:hidden">
                <p className="font-semibold text-sm text-sidebar-foreground">Guest User</p>
                <p className="text-xs text-sidebar-foreground/70">guest@example.com</p>
              </div>
            </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
            <SidebarTrigger />
            <div className='flex-1'>
                {/* Can add breadcrumbs here */}
            </div>
            {/* Can add search or other header items here */}
        </header>
        {children}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-40 p-0 overflow-hidden" size="icon">
              {yetiAvatar ? (
                <Image src={yetiAvatar.imageUrl} alt="Yatra Yeti" fill className="object-cover" />
              ) : (
                <Bot className="h-8 w-8" />
              )}
              <span className="sr-only">Open Yatra Yeti</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[85vh] flex flex-col p-0">
             <SheetHeader className="p-4 border-b">
                <SheetTitle className="flex items-center gap-2">
                    <Bot className="h-6 w-6 text-primary" />
                    Yatra Yeti
                </SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto">
              <AiChat />
            </div>
          </SheetContent>
        </Sheet>
      </SidebarInset>
    </SidebarProvider>
  );
}
