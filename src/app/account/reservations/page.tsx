import PageTitle from '@/shared/components/typography/PageTitle';
import React from 'react';
import ReservationCard from './components/ReservationCard';
import NoReservationMessage from './components/NoReservationMessage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservations',
};
export default function ReservationsPage() {
  // Reservation data matching ReservationCard structure
  const reservations = [
    {
      id: 100,
      nights: 7,
      cabin: 'Cabin 001',
      dateRange: 'Wed, Feb 14 2025 (3 months ago) - Sat, Dec 21 2025',
      price: 2100,
      guests: 4,
      booked: 'Fri, Jan 05 2025, 11:30pm',
      badge: 'Confirmed',
      image: '/about-1.jpg',
    },
    {
      id: 101,
      nights: 3,
      cabin: 'Cabin 002',
      dateRange: 'Mon, Mar 10 2025 - Thu, Mar 13 2025',
      price: 900,
      guests: 2,
      booked: 'Mon, Feb 10 2025, 09:00am',
      badge: 'Pending',
      image: '/about-2.jpg',
    },

    {
      id: 103,
      nights: 2,
      cabin: 'Cabin 004',
      dateRange: 'Sat, May 03 2025 - Mon, May 05 2025',
      price: 600,
      guests: 2,
      booked: 'Fri, Apr 03 2025, 05:45pm',
      badge: 'Cancelled',
      image: '/bg.png',
    },
    {
      id: 102,
      nights: 5,
      cabin: 'Cabin 003',
      dateRange: 'Fri, Apr 18 2025 - Wed, Apr 23 2025',
      price: 1500,
      guests: 3,
      booked: 'Wed, Mar 18 2025, 02:15pm',
      badge: 'Confirmed',
      image: '/about-1.jpg',
    },
    {
      id: 104,
      nights: 4,
      cabin: 'Cabin 005',
      dateRange: 'Tue, Jun 09 2025 - Sat, Jun 13 2025',
      price: 1200,
      guests: 5,
      booked: 'Mon, May 09 2025, 10:00am',
      badge: 'Confirmed',
      image: '/bg.png',
    },
    {
      id: 105,
      nights: 6,
      cabin: 'Cabin 006',
      dateRange: 'Thu, Jul 16 2025 - Wed, Jul 22 2025',
      price: 1800,
      guests: 4,
      booked: 'Tue, Jun 16 2025, 08:30am',
      badge: 'Pending',
      image: '/about-1.jpg',
    },
    {
      id: 106,
      nights: 8,
      cabin: 'Cabin 007',
      dateRange: 'Sun, Aug 02 2025 - Mon, Aug 10 2025',
      price: 2400,
      guests: 6,
      booked: 'Sat, Jul 02 2025, 07:20pm',
      badge: 'Confirmed',
      image: '/about-2.jpg',
    },
    {
      id: 107,
      nights: 1,
      cabin: 'Cabin 008',
      dateRange: 'Wed, Sep 17 2025 - Thu, Sep 18 2025',
      price: 300,
      guests: 1,
      booked: 'Tue, Aug 17 2025, 11:00am',
      badge: 'Cancelled',
      image: '/about-1.jpg',
    },
    {
      id: 108,
      nights: 10,
      cabin: 'Cabin 009',
      dateRange: 'Fri, Oct 23 2025 - Mon, Nov 02 2025',
      price: 3000,
      guests: 7,
      booked: 'Thu, Sep 23 2025, 03:30pm',
      badge: 'Confirmed',
      image: '/bg.png',
    },
    {
      id: 109,
      nights: 9,
      cabin: 'Cabin 010',
      dateRange: 'Sat, Nov 28 2025 - Sun, Dec 07 2025',
      price: 2700,
      guests: 5,
      booked: 'Fri, Oct 28 2025, 06:10pm',
      badge: 'Pending',
      image: '/about-1.jpg',
    },
  ];

  return (
    <div>
      <PageTitle className="text-xl">Your reservations</PageTitle>
      {/* <NoReservationMessage /> */}
      <div className="space-y-5 mt-5">
        {reservations.map((reservation) => (
          <ReservationCard key={reservation.id} {...reservation} />
        ))}
      </div>
    </div>
  );
}
