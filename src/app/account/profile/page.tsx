import PageTitle from '@/shared/components/typography/PageTitle';
import React from 'react';
import ProfileForm from './components/ProfileForm';

export default function ProfilePage() {
  return (
    <div>
      <PageTitle className="text-2xl">Update your guest profile</PageTitle>
      <p className="text-paragraph/70 ">
        Provide the following information will make your check-in process smoother. See you soon!
      </p>
      <ProfileForm />
    </div>
  );
}
