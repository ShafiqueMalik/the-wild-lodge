import { AppButton } from '@/shared/components/forms/AppButton';
import React from 'react';

export default function NoReservationMessage() {
  return (
    <p className="flex items-center gap-2 text-paragraph">
      You have no reservations yet. Check out our{' '}
      <AppButton variant="linkPrimary" href="/cabins">
        Luxury Cabins
      </AppButton>
    </p>
  );
}
