import { auth } from '@/lib/auth';
import PageTitle from '@/shared/components/typography/PageTitle';
import React from 'react';

export const metadata = {
  title: 'Account',
};
export default async function AccountPage() {
  const session = await auth();
  return (
    <div>
      <PageTitle className="text-lg">Welcome {session?.user?.name}.</PageTitle>
    </div>
  );
}
