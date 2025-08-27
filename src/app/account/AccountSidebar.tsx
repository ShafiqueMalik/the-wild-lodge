'use client';
import Link from 'next/link';
import { User, Home, Calendar, LogOutIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';

function AccountSidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex mb-5 md:mb-0 md:flex-col gap-2 md:gap-2  border-b md:border-b-0 md:border-r border-white/20 px-0 md:px-4 pb-2 md:pb-0 text-paragraph">
      <Link
        href="/account"
        className={cn(
          `flex flex-col md:flex-row text-sm md:text-base items-center gap-1 md:gap-2 py-2 md:py-2 px-1 md:px-3 rounded hover:bg-white/10 transition`,
          pathname === '/account' && 'bg-white/10 text-primary'
        )}
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </Link>
      <Link
        href="/account/reservations"
        className={cn(
          `flex flex-col md:flex-row text-sm md:text-base items-center gap-1 md:gap-2 py-2 md:py-2 px-1 md:px-3 rounded hover:bg-white/10 transition`,
          pathname === '/account/reservations' && 'bg-white/10 text-primary'
        )}
      >
        <Calendar className="w-5 h-5" />
        <span>Reservations</span>
      </Link>
      <Link
        href="/account/profile"
        className={cn(
          `flex flex-col md:flex-row text-sm md:text-base items-center gap-1 md:gap-2 py-2 md:py-2 px-1 md:px-3 rounded hover:bg-white/10 transition`,
          pathname === '/account/profile' && 'bg-white/10 text-primary'
        )}
      >
        <User className="w-5 h-5" />
        <span>Guest profile</span>
      </Link>
      <Link
        href="#"
        className="flex flex-col md:flex-row flex-1 md:flex-none text-sm md:text-base items-center md:mt-auto gap-1 md:gap-2 py-2 md:py-2 px-1 md:px-3 rounded hover:bg-destructive/50 transition"
        onClick={() => signOut({ callbackUrl: '/login' })}
      >
        <LogOutIcon className="w-5 h-5" />
        <span>Signout</span>
      </Link>
    </nav>
  );
}
export default AccountSidebar;
