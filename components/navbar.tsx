"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavbarButton,
  NavItems,
  Navbar as ResizableNavbar,
} from "@/components/ui/resizable-navbar";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Pricing", link: "/pricing" },
  { name: "Solution", link: "/solution" },
  { name: "Contact Us", link: "/contact" },
  { name: "Hardware & Booth", link: "/device" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ResizableNavbar className="top-0">
      {/* Desktop */}
      <NavBody>
        <Link
          href="/"
          className="py-1 text-sm font-bold font-display tracking-tight"
        >
          PHOTORA
        </Link>
        <NavItems items={navLinks} onItemClick={() => setIsOpen(false)} />
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <Link
            href="/"
            className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-bold font-display tracking-tight"
          >
            PHOTORA
          </Link>
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300 px-4 py-2"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex w-full flex-col gap-2 mt-4">
            <NavbarButton
              as={Link}
              href="/register"
              variant="primary"
              className="w-full text-center"
            >
              Register
            </NavbarButton>
            <NavbarButton
              as={Link}
              href="/login"
              variant="primary"
              className="w-full text-center"
            >
              Login
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
