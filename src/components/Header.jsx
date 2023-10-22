"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import SpaceXLogo from "./SpaceXLogo";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Crew", href: "/search/crew" },
    { label: "Cores", href: "/search/cores" },
    { label: "Dragons", href: "/search/dragons" },
    { label: "Rockets", href: "/search/rockets" },
    { label: "Capsules", href: "/search/capsules" },
    { label: "Payloads", href: "/search/payloads" },
    { label: "Launches", href: "/search/launches" },
    { label: "Landpads", href: "/search/landpads" },
    { label: "Launchpads", href: "/search/launchpads" },
  ];

  return (
    <Navbar
      position="static"
      onMenuOpenChange={setIsMenuOpen}
      className="lg:py-4"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden mx-auto" justify="center">
        <NavbarBrand>
          <Link href="/">
            <SpaceXLogo width={150} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarBrand>
          <Link href="/">
            <SpaceXLogo width={200} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {menuItems.map((item) => (
          <NavbarItem className="hidden lg:flex" key={item.label}>
            <Link
              href={item.href}
              className="uppercase text-sm font-medium hover:underline hover:underline-offset-4 hover:decoration-sky-400"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label} size="lg" className="w-full">
            <Link href={item.href} className="uppercase">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
