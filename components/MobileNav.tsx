"use client";

import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


const MobileNav = () => {

  const pathname = usePathname();

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="menu"
            width={30}
            height={30}
            className='cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent side="left" className='border-none bg-black-1'>
          <Link href="/" className='flex cursor-pointer items-center gap-2 pb-10 pl-4'>
            <Image
              src="/icons/logo.svg"
              alt="Podcast AI"
              width={23}
              height={27}
            />
            <h1 className='text-24 font-extrabold text-white-1 ml-2'>Podcaster</h1>
          </Link>

          <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
              <nav className='flex h-full flex-col gap-6 text-white-1'>
                {
                  sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                    return (
                      <SheetClose asChild key={link.route}>
                        <Link
                          key={link.label}
                          href={link.route}
                          className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-start", { "bg-nav-focus border-r-4 border-orange-1": isActive })}
                        >
                          <Image
                            src={link.imgURL}
                            alt={link.label}
                            width={24}
                            height={24}
                          />
                          <p>{link.label}</p>
                        </Link>
                      </SheetClose>
                    )
                  })
                }
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default MobileNav