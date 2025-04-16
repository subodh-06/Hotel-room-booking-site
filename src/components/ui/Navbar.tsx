'use client';

import { useEffect, useState } from 'react';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleSignOut = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
    router.push('/'); // redirect to home or login page
  };

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/hotel.svg"
                alt="logo"
                width={32}
                height={32}
                priority
              />
              <span className="text-lg font-semibold">StayEase</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex justify-center">
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/search" className={navigationMenuTriggerStyle()}>
                  Book a Room
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/owner/list-hotel" className={navigationMenuTriggerStyle()}>
                  List Your Hotel
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {isLoggedIn ? (
              <Button variant="destructive" onClick={handleSignOut}>Sign out</Button>
            ) : (
              <Button><Link href="/auth">Sign in</Link></Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-scroll px-4">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/hotel.svg"
                      alt="logo"
                      width={32}
                      height={32}
                      priority
                    />
                    <span className="text-lg font-semibold">StayEase</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col items-start">
                <div className="flex flex-col gap-4 w-full mt-4">
                  <Link href="/" className="font-medium">Home</Link>
                  <Link href="/search" className="font-medium">Book a Room</Link>
                  <Link href="/owner/list-hotel" className="font-medium">List Your Hotel</Link>
                </div>
                <div className="mt-6 flex flex-col gap-4 w-full">
                  {isLoggedIn ? (
                    <Button className="w-full" variant="destructive" onClick={handleSignOut}>Sign out</Button>
                  ) : (
                    <Button className="w-full"><Link href="/auth">Sign in</Link></Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
