import { Metadata } from 'next';
import UpdateReservationForm from './components/UpdateReservationForm';
import BackButton from '@/shared/components/buttons/BackButton';

// Same data as in reservations/page.tsx
const reservations = [
  { id: 100, cabin: 'Cabin 001' },
  { id: 101, cabin: 'Cabin 002' },
  { id: 102, cabin: 'Cabin 003' },
  { id: 103, cabin: 'Cabin 004' },
  { id: 104, cabin: 'Cabin 005' },
  { id: 105, cabin: 'Cabin 006' },
  { id: 106, cabin: 'Cabin 007' },
  { id: 107, cabin: 'Cabin 008' },
  { id: 108, cabin: 'Cabin 009' },
  { id: 109, cabin: 'Cabin 010' },
];

export function generateStaticParams() {
  return reservations.map((r) => ({ bookingId: r.id.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bookingId: string }>;
}): Promise<Metadata> {
  const { bookingId } = await params;
  const reservation = reservations.find((r) => r.id.toString() === bookingId);
  return {
    title: reservation ? reservation.cabin : 'Change Reservation',
  };
}

interface ReservationEditPageProps {
  params: Promise<{ bookingId: string }>;
}

export default async function ReservationEditPage({ params }: ReservationEditPageProps) {
  const { bookingId } = await params;
  const reservation = reservations.find((r) => r.id.toString() === bookingId);
  return (
    <div>
      <BackButton className="mb-5" />
      <h1 className="text-2xl font-bold mb-6">
        Change Reservation #{bookingId} {reservation ? `(${reservation.cabin})` : ''}
      </h1>
      {/* Render the ReservationForm but remove date fields */}
      <UpdateReservationForm />
    </div>
  );
}
