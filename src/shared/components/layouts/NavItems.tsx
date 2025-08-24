'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavItems() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-6 lg:gap-12">
        <li>
          <Link
            href="/cabins"
            className={cn(
              `hover:text-primary  transition-all `,
              pathname === '/cabins' && 'text-primary '
            )}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={cn(
              `hover:text-primary transition-all`,
              pathname === '/about' && 'text-primary '
            )}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className={cn(
              `hover:text-primary transition-all`,
              (pathname === '/account' ||
                pathname === '/account/reservations' ||
                pathname === '/account/profile') &&
                'text-primary '
            )}
          >
            Guest Area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
