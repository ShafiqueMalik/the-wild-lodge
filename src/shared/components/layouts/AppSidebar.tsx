'use client';
import { BookUser, HomeIcon, Users, X } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';

// Menu items.
const items = [
  {
    title: 'Cabins',
    url: '/cabins',
    icon: HomeIcon,
  },
  {
    title: 'About',
    url: '/about',
    icon: BookUser,
  },
  {
    title: 'Guest Area',
    url: '/account',
    icon: Users,
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar>
      <button onClick={toggleSidebar} className="absolute top-2 right-2 cursor-pointer">
        <X className="w-6 h-6 text-primary" />
      </button>
      <SidebarHeader className="bg-background text-foreground flex  p-4 border-b border-white/20">
        <Link href="/" className="flex  items-center gap-2">
          <Image src="/logo.png" width={60} height={60} alt="The Wilder Lodge" />
          <span>The Wilder Lodge</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-background text-foreground pt-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} onClick={toggleSidebar}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
