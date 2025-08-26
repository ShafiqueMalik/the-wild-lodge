import PageTitle from '@/shared/components/typography/PageTitle';
import React from 'react';
import ReservationCard from './components/ReservationCard';
import NoReservationMessage from './components/NoReservationMessage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservations',
};
export default function ReservationsPage() {
  return (
    <div>
      <PageTitle className="text-xl">Your reservations</PageTitle>
      <NoReservationMessage />
      <div className="space-y-5 mt-5">
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
      </div>
    </div>
  );
}
