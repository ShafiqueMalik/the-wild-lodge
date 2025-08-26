import { Metadata } from 'next';
import UpdateReservationForm from './components/UpdateReservationForm';

export const metadata: Metadata = {
  title: 'Change Reservation',
};

interface ReservationEditPageProps {
  params: Promise<{ bookingId: string }>;
}

export default async function ReservationEditPage({ params }: ReservationEditPageProps) {
  const { bookingId } = await params;
  console.log('Booking ID:', bookingId);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Change Reservation #{bookingId}</h1>
      {/* Render the ReservationForm but remove date fields */}
      <UpdateReservationForm />
    </div>
  );
}
