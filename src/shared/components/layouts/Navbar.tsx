'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavItems from './NavItems';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  // Define routes where navbar should be hidden
  const hiddenRoutes = ['/login', '/signup', '/'];

  // Check if current path is in hiddenRoutes
  const shouldHideNavbar = hiddenRoutes.includes(pathname);

  if (shouldHideNavbar) {
    return null;
  }
  return (
    <header className="flex justify-between h-[92px] items-center py-4 z-50">
      <Link href="/" className="flex  items-center gap-2">
        <Image src="/logo.png" width={60} height={60} alt="The Wilder Lodge" />
        <span>The Wilder Lodge</span>
      </Link>
      <NavItems className="hidden md:flex" />

      {/* Mobile Hamburger */}
      <button className="md:hidden p-2" onClick={toggleSidebar}>
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
}
