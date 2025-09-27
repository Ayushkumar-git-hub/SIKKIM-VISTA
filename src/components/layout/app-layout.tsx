
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
  Cpu,
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
  LocateFixed,
  BookCopy,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ModeToggle } from '../mode-toggle';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/ai-assistant', label: 'AI Assistant', icon: Cpu },
  { href: '/sikkim-pedia', label: 'Sikkim Pedia', icon: BookCopy },
  { href: '/smart-maps', label: 'Smart Maps', icon: Map },
  { href: '/location-tracker', label: 'Location Tracker', icon: LocateFixed },
  { href: '/ticket-booking', label: 'Bookings', icon: Ticket },
  { href: '/document-hub', label: 'Document Hub', icon: FileText },
  { href: '/regional-calendar', label: 'Regional Calendar', icon: CalendarIcon },
  { href: '/narrative-walkthroughs', label: 'Narratives', icon: BookOpen },
  { href: '/local-crafts', label: 'Local Crafts', icon: ShoppingBag },
  { href: '/immersive-views', label: 'Immersive Views', icon: Camera },
  { href: '/land-recognition', label: 'Land Recognition', icon: ScanLine },
  { href: '/help', label: 'Help & FAQ', icon: LifeBuoy },
  { href: '/about-us', label: 'About Us', icon: Users },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const yetiAvatar = PlaceHolderImages.find(img => img.id === 'yeti-avatar');

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
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
           <Link href="/auth/sign-in" className="block p-2 group-data-[collapsible=icon]:p-0">
             <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://picsum.photos/seed/user-avatar/100/100" alt="User" />
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
                <div className="group-data-[collapsible=icon]:hidden">
                  <p className="font-semibold text-sm text-sidebar-foreground">Guest User</p>
                  <p className="text-xs text-sidebar-foreground/70">Sign In</p>
                </div>
              </div>
            </Link>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
            <SidebarTrigger />
            <div className='flex-1'>
                {/* Can add breadcrumbs here */}
            </div>
            <ModeToggle />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
