import { AppButton } from '@/shared/components/forms/AppButton';
import Overlay from '@/shared/components/layouts/Overlay';
import Image from 'next/image';

export default async function Home() {
  return (
    <div className="fixed inset-0 min-h-screen w-screen flex items-center justify-center">
      {/* Create overlay div please */}
      <Overlay />
      <Image src="/bg.png" fill alt="The grand castle" className="h-full" />
      <div className="z-10 flex justify-center items-center flex-col gap-5">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center text-white">
          Welcome to The Grand Castle
        </h1>
        <AppButton variant="primary" size="large" href="/cabins">
          Explor our luxurious Cabins
        </AppButton>
      </div>
    </div>
  );
}
