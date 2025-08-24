import { Badge } from '@/components/ui/badge';
import { AppBadge } from '@/shared/components/AppBadge';
import { AppButton } from '@/shared/components/forms/AppButton';
import { Edit2Icon, Trash } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function ReservationCard() {
  return (
    <div className="flex items-center">
      <div className="relative w-[150px] self-stretch">
        <Image src="/about-1.jpg" fill alt="about " />
      </div>
      <div className="border border-l-0 relative border-white/20 px-5 py-3 flex-1">
        <h2>7 Night in Cabin 001</h2>
        <p className="text-paragraph/70 mb-3 text-sm">
          Wed, Feb 14 2025(3 months ago) - Sat, Dec 21 2025
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-primary">$2100</span>
            <span>.</span>
            <span>4 Guests</span>
          </div>
          <div className="text-paragraph/70 text-sm">Booked Fri, Jan 05 2025, 11:30pm</div>
        </div>
        <AppBadge variant="success" className="absolute right-3 top-2">
          Badge
        </AppBadge>
      </div>

      {/* Actions */}
      <div className="flex flex-col  self-stretch border-l-0 border border-white/20">
        <AppButton
          href="/account/reservations/100"
          className="flex-1 px-4 bg-transparent text-paragraph/70 border-b border-white/20  hover:bg-primary hover:text-foreground"
        >
          <Edit2Icon size={16} /> Edit
        </AppButton>
        <AppButton className="flex-1 px-4 bg-transparent text-paragraph/70  hover:bg-primary hover:text-foreground">
          <Trash size={14} /> Delete
        </AppButton>
      </div>
    </div>
  );
}
