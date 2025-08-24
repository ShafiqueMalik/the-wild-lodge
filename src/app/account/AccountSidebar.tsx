'use client';
import Link from 'next/link';
import { User, Home, Calendar, LogOutIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

function AccountSidebar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-2  border-r border-white/20 px-4 text-paragraph">
      <Link
        href="/account"
        className={cn(
          `flex items-center gap-2 py-2 px-3 rounded hover:bg-white/10 transition`,
          pathname === '/account' && 'bg-white/10 text-primary'
        )}
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </Link>
      <Link
        href="/account/reservations"
        className={cn(
          `flex items-center gap-2 py-2 px-3 rounded hover:bg-white/10 transition`,
          pathname === '/account/reservations' && 'bg-white/10 text-primary'
        )}
      >
        <Calendar className="w-5 h-5" />
        <span>Reservations</span>
      </Link>
      <Link
        href="/account/profile"
        className={cn(
          `flex items-center gap-2 py-2 px-3 rounded hover:bg-white/10 transition`,
          pathname === '/account/profile' && 'bg-white/10 text-primary'
        )}
      >
        <User className="w-5 h-5" />
        <span>Guest profile</span>
      </Link>
      <Link
        href="/"
        className="flex items-center mt-auto gap-2 py-2 px-3 rounded hover:bg-destructive/50 transition"
      >
        <LogOutIcon className="w-5 h-5" />
        <span>Signout</span>
      </Link>
    </nav>
  );
}
export default AccountSidebar;
