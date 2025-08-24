import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, MapPin, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';

interface CabinDetailProps {
  id: string;
  title: string;
  description: string;
  guests: number;
  location: string;
  showMore?: boolean;
}

function CabinDetailsCard({
  title,
  description,
  guests,
  location,
  showMore = false,
}: CabinDetailProps) {
  return (
    <Card className=" overflow-hidden shadow-sm rounded-none p-0 border-none bg-transparent text-foreground">
      <div className="flex">
        <div className="min-w-0 mob-lg:min-w-[200px] lg:min-w-[400px] flex items-center relative justify-center ">
          {/* Replace with actual image src or prop if available */}
          <Image src="/about-1.jpg" fill alt={title} className="object-cover w-full " />
        </div>
        <div className="p-5  lg:p-10 border-white/20 border border-l-0 my-5">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-paragraph">
              {showMore ? description : `${description.split(' ').slice(0, 40).join(' ')}...`}
              {!showMore && (
                <Button variant="link" className="px-0 py-0 h-auto">
                  Show more <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              )}
            </p>
          </div>

          <div className="space-y-4 mt-5 text-paragraph/70">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-paragraph/50" />
              <span>For up to {guests} guests</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-paragraph/50" />
              <span>
                Located in the heart of <strong>{location}</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-paragraph/50" />
              <span>
                Privacy <strong>100% guaranteed</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CabinDetailsCard;
