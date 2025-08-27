import GuestSidebar from '@/app/account/AccountSidebar';
import React from 'react';
export default async function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] md:flex-1">
      {/* <ServerAuthComponent /> */}
      <GuestSidebar />
      <div className="flex-1 pl-0 md:pl-5 lg:pl-10">{children}</div>
    </div>
  );
}
