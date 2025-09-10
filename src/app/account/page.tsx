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
      <p className="mt-2 text-paragraph/70 text-base max-w-xl">
        This is your personal account dashboard. Here you can view and manage your reservations,
        update your profile, and explore all the features The Wilder Lodge has to offer. If you need
        any help, feel free to reach out to our support team.
      </p>
    </div>
  );
}
