"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
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
                <Link href="/book-a-room" className={navigationMenuTriggerStyle()}>
                  Book a Room
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button ><Link href={"/login"}>Sign in</Link></Button>
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
                  <Link href="/" className="font-medium">
                    Home
                  </Link>
                  <Link href="#" className="font-medium">
                    Book a Room
                  </Link>
                  <Link href="#" className="font-medium">
                    Contact
                  </Link>
                </div>
                <div className="mt-6 flex flex-col gap-4 w-full">
                  <Button className="w-full">Sign in</Button>
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
