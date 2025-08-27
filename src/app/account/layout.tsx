import GuestSidebar from '@/app/account/AccountSidebar';
import React from 'react';
export default async function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[230px_1fr] flex-1">
      {/* <ServerAuthComponent /> */}
      <GuestSidebar />
      <div className="flex-1 pl-5 lg:pl-10">{children}</div>
    </div>
  );
}
