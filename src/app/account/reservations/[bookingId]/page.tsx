import { Metadata } from 'next';
import UpdateReservationForm from './components/UpdateReservationForm';

export const metadata: Metadata = {
  title: 'Change Reservation',
};

interface ReservationEditPageProps {
  params: {
    bookingId: string;
  };
}

export default function ReservationEditPage({ params }: ReservationEditPageProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Change Reservation #{params.bookingId}</h1>
      {/* Render the ReservationForm but remove date fields */}
      <UpdateReservationForm />
    </div>
  );
}
