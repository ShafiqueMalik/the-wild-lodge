import PageTitle from '@/shared/components/typography/PageTitle';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'About Us',
};
export default function AboutPage() {
  return (
    <div className="space-y-12 sm:space-y-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_300px] gap-6">
        <div className="space-y-4 order-2 sm:order-1">
          <PageTitle className="text-2xl">Welcome to The Wilder Lodge</PageTitle>
          <div className="space-y-4 text-paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto animi nisi maiores quas
              molestias mollitia, reprehenderit consectetur sapiente quisquam earum, asperiores
              cupiditate labore impedit est provident perferendis nostrum molestiae ex.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus, non,
              necessitatibus neque minus, dicta amet odit modi aliquid consequatur iure reiciendis
              minima omnis molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi maiores modi
              laboriosam fugiat, accusantium sed ea doloribus ullam sunt blanditiis.
            </p>
          </div>
        </div>
        <div className="relative min-h-[200px] order-1 sm:order-1">
          <Image src="/about-1.jpg" fill alt="about cabin " />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[300px_1fr] gap-6">
        <div className="relative min-h-[200px] order-1 sm:order-1">
          <Image src="/about-2.jpg" fill alt="about cabin " />
        </div>
        <div className="space-y-4 order-2 sm:order-1">
          <PageTitle className="text-2xl">Welcome to The Wilder Lodge</PageTitle>
          <div className="space-y-4 text-paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto animi nisi maiores quas
              molestias mollitia, reprehenderit consectetur sapiente quisquam earum, asperiores
              cupiditate labore impedit est provident perferendis nostrum molestiae ex.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus, non,
              necessitatibus neque minus, dicta amet odit modi aliquid consequatur iure reiciendis
              minima omnis molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi maiores modi
              laboriosam fugiat, accusantium sed ea doloribus ullam sunt blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
