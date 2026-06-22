"use client";

import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Solution", href: "/solution" },
  { label: "Contact Us", href: "/contact" },
  { label: "Hardware & Booth", href: "/device" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-secondary text-secondary-foreground border-b border-white/10">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight"
        >
          PHOTORA
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/register"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Register
          </Link>
          <Link href="/login" className={buttonVariants({ size: "sm" })}>
            Login
          </Link>
        </div>

        {/* Mobile sheet menu */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="lg:hidden"
              />
            }
          >
            <ListIcon className="size-5" />
          </SheetTrigger>
          <SheetContent side="left" showCloseButton={false}>
            <SheetHeader>
              <SheetTitle>
                <Link
                  href="/"
                  className="font-display text-lg font-bold tracking-tight"
                >
                  PHOTORA
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-secondary-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 px-4 mt-auto pb-4">
              <Link
                href="/register"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Register
              </Link>
              <Link href="/login" className={buttonVariants({ size: "sm" })}>
                Login
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
