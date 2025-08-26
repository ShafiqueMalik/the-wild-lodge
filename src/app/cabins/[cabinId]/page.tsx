import React from 'react';
import CabinDetailsCard from './components/CabinDetailsCard';
import PageTitle from '@/shared/components/typography/PageTitle';
import ReservationForm from './components/ReservationForm';

export async function generateStaticParams() {
  // Simulating fetching cabin IDs from a database or API
  const cabinIds = ['001', '002', '003']; // Example cabin IDs
  return cabinIds.map((id) => ({ cabinId: id }));
}

export const metadata = {
  title: 'Cabin Details',
};
export default async function CabinDetailsPage({
  params,
}: {
  params: Promise<{ cabinId: string }>;
}) {
  console.log('CabinDetailsPage params:', params);
  const { cabinId } = await params;
  console.log('Cabin ID:', cabinId);
  return (
    <div>
      <CabinDetailsCard
        id="003"
        title="Cabin 003"
        description="Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from local wood with large windows offering stunning mountain views."
        guests={4}
        location="Dolomites (Italy)"
      />

      <PageTitle className=" my-5 lg:py-10 text-center">
        Reserve 003 today. Pay on arrival
      </PageTitle>

      <div className="border border-white/20 rounded-lg p-5 bg-primary-light ">
        <ReservationForm />
      </div>
    </div>
  );
}
