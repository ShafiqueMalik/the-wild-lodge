import { Badge } from '@/components/ui/badge';
import { AppBadge } from '@/shared/components/AppBadge';
import { AppButton } from '@/shared/components/forms/AppButton';
import { Edit2Icon, Trash } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type ReservationCardProps = {
  id: number;
  nights: number;
  cabin: string;
  dateRange: string;
  price: number;
  guests: number;
  booked: string;
  badge: string;
  image: string;
};

export default function ReservationCard({
  id,
  nights,
  cabin,
  dateRange,
  price,
  guests,
  booked,
  badge,
  image,
}: ReservationCardProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="relative w-full  md:w-[150px] h-[150px] md:h-auto self-stretch">
        <Image src={image} fill alt={cabin} className="object-cover" />
      </div>
      <div className="border border-l md:border-l-0 relative border-white/20 px-5 py-5 md:py-3 flex-1">
        <h2>
          {nights} Night{nights > 1 ? 's' : ''} in {cabin}
        </h2>
        <p className="text-paragraph/70 mb-3 text-sm">{dateRange}</p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-primary">${price}</span>
            <span>.</span>
            <span>
              {guests} Guest{guests > 1 ? 's' : ''}
            </span>
          </div>
          <div className="text-paragraph/70 text-sm">Booked {booked}</div>
        </div>
        <AppBadge
          variant={
            badge === 'Confirmed' ? 'success' : badge === 'Pending' ? 'warning' : 'destructive'
          }
          className="absolute right-3 top-2"
        >
          {badge}
        </AppBadge>
      </div>

      {/* Actions */}
      <div className="flex flex-row items-center md:flex-col  self-stretch border-l md:border-l-0 border border-white/20">
        <AppButton
          href={`/account/reservations/${id}`}
          className="flex-1 px-4 bg-transparent text-paragraph/70  border-b border-white/20  hover:bg-primary hover:text-foreground"
        >
          <Edit2Icon size={16} /> Edit
        </AppButton>
        <AppButton className="flex-1 px-4 bg-transparent text-paragraph/70   hover:bg-primary hover:text-foreground">
          <Trash size={14} /> Delete
        </AppButton>
      </div>
    </div>
  );
}
