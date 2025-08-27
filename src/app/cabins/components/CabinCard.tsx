import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';
import Image from 'next/image';
import { AppButton } from '@/shared/components/forms/AppButton';

interface CabinCardProps {
  id: string;
  title: string;
  guests: number;
  price: number;
  originalPrice?: number;
}

export function CabinCard({ id, title, guests, price, originalPrice }: CabinCardProps) {
  return (
    <Card className="overflow-hidden max-w-[460px] shadow-sm rounded-none p-0 border-white/20 bg-transparent text-foreground">
      <div className="flex flex-row">
        {/* Left: Image */}
        <div className="w-1/3 flex items-center relative justify-center ">
          {/* Replace with actual image src or prop if available */}
          <Image src="/about-1.jpg" fill alt={title} className="object-cover w-full " />
        </div>
        {/* Right: Content */}
        <div className="w-2/3 flex flex-col pt-4 bg-none">
          <CardHeader className=" ">
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="space-y-1">
              <div className="flex items-center gap-1 ">
                <Users size={13} />
                <p className="text-sm text-paragraph">For up to {guests} guests</p>
              </div>
              <div className="flex items-center justify-end gap-2 ">
                <span className="font-medium text-2xl">
                  ${price} / <span className="text-xs">night</span>
                </span>
                {originalPrice && (
                  <span className="  text-sm text-muted-foreground line-through">
                    ${originalPrice}
                  </span>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="!pt-0 justify-end px-0 border-t border-white/20">
            <AppButton
              variant="ghostPrimary"
              href={`/cabins/${id}`}
              className="text-sm justify-end flex-1 flex  gap-2 border- border-white/20"
            >
              Details & reservation <ArrowRight className="h-4 w-4" />
            </AppButton>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
