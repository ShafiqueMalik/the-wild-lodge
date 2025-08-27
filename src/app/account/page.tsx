import UserName from '@/shared/components/dynamic/client/UserNameClilent';
import PageTitle from '@/shared/components/typography/PageTitle';
import React from 'react';

export const metadata = {
  title: 'Account',
};
export default async function AccountPage() {
  return (
    <div>
      <PageTitle className="text-lg">
        Welcome, <UserName />
      </PageTitle>
    </div>
  );
}
