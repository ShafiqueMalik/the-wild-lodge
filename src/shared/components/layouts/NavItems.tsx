'use client';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavItems({ className }: { className?: string }) {
  const pathname = usePathname();
  const session = useSession();
  console.log('Session in Navbar:', session);
  const user = session?.data?.user;

  return (
    <nav className={cn(className)}>
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
          {user ? (
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
          ) : (
            <Link href="/login" className={cn(`hover:text-primary transition-all`)}>
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
