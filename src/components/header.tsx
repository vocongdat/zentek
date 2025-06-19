"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "./icons/menu-icon";
import { Button } from "./ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 right-0 left-0 z-50 bg-neutral-accent laptop:px-10">
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-4">
          <Button
            variant="transparent"
            size="auto"
            className="laptop:hidden"
            onClick={handleToggleMenu}
          >
            <MenuIcon />
          </Button>
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Logo" width={72} height={36} priority />
          </Link>
          <nav className="laptop:flex hidden items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-[100px] px-4.5 py-2.5 font-medium text-sm text-white uppercase transition-colors hover:bg-neutral-subdued hover:text-primary-normal",
                  item.href === "/" && "bg-neutral-subdued text-primary-normal"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button>Sign Up</Button>
          <Button variant="outline">Sign In</Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[60px] right-0 left-0 mt-4 laptop:hidden h-full w-full bg-neutral-accent pb-4">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
