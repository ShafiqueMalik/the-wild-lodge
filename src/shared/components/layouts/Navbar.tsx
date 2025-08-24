import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavItems from './NavItems';

export default function Navbar() {
  return (
    <header className="flex justify-between h-[92px] items-center py-4 z-50">
      <Link href="/" className="flex  items-center gap-2">
        <Image src="/logo.png" width={60} height={60} alt="The Grand Castle" />
        <span>The Grand Castle</span>
      </Link>
      <NavItems />
    </header>
  );
}
