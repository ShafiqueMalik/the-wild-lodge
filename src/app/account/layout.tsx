import GuestSidebar from '@/app/account/AccountSidebar';
import { redirect } from 'next/navigation';
import React from 'react';
import getServerSession from 'next-auth';
import { auth } from '@/lib/auth';
export default async function GuestLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect('/login');
  // if (true) {
  //   redirect('/login');
  // }
  return (
    <div className="grid grid-cols-[230px_1fr] flex-1">
      <GuestSidebar />
      <div className="flex-1 pl-5 lg:pl-10">{children}</div>
    </div>
  );
}
