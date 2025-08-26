import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

import './globals.css';
import { Providers } from '@/providers';

import { Josefin_Sans } from 'next/font/google';
import Navbar from '@/shared/components/layouts/Navbar';
import NavigationBar from '@/shared/components/layouts/NavigationBar';
import { AppSidebar } from '@/shared/components/layouts/AppSidebar';

const josefin_Sans = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - The Wilder Lodge',
    default: 'The Wilder Lodge',
  },
  description: 'A The Wilder Lodge application built with Next.js, React, and Tailwind CSS.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth  " suppressHydrationWarning>
      <body className={josefin_Sans.className + ' antialiased  '}>
        <Providers>
          <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <AppSidebar />
            {/* <NavigationBar /> */}
            <main className="flex flex-col min-h-[calc(100vh-92px)] py-10 ">{children}</main>
            <ToastContainer position="bottom-right" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
