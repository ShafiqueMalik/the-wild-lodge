'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>
        <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
