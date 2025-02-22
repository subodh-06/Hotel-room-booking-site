"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
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
            <img
              src="/hotel.svg"
              alt="logo"
              className="w-8"
            />
            <span className="text-lg font-semibold">StayEase</span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex justify-center">
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Book a Room
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline">Sign in</Button>
            <Button>Start for free</Button>
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
                    <img
                      src="https://shadcnblocks.com/images/block/block-1.svg"
                      alt="logo"
                      className="w-8"
                    />
                    <span className="text-lg font-semibold">
                      Shadcnblocks.com
                    </span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col items-start">
                <div className="flex flex-col gap-4 w-full mt-4">
                  <a href="/" className="font-medium">
                    Home
                  </a>
                  <a href="#" className="font-medium">
                    Book a Room
                  </a>
                  <a href="#" className="font-medium">
                    Contact
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4 w-full">
                  <Button variant="outline" className="w-full">
                    Sign in
                  </Button>
                  <Button className="w-full">Start for free</Button>
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
