import { CabinFilters } from '@/shared/components/layouts/CabinFilter';
import PageTitle from '@/shared/components/typography/PageTitle';
import React from 'react';
import CabinsGrid from './components/CabinGrid';

export const metadata = {
  title: 'Cabins',
};
export default function CabinsPage() {
  return (
    <div>
      <PageTitle className="mb-3">Out Luxury Cabins</PageTitle>
      <p className="text-paragraph">
        Discover your perfect escape in handpicked luxury cabins. Immerse yourself in nature without
        compromising on elegance and comfort. Book your dream retreat with exclusive amenities and
        breathtaking views.
      </p>
      <div className="flex justify-end my-5">
        <CabinFilters />
      </div>
      <React.Suspense fallback={<div>Loading cabins...</div>}>
        <CabinsGrid />
      </React.Suspense>
    </div>
  );
}
