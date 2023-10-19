"use client";
import React, { useState } from "react";
import Link from "next/link";
import SpaceXLogo from "./SpaceXLogo";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Crew", link: "/search/crew" },
    { label: "Cores", link: "/search/cores" },
    { label: "Rockets", link: "/search/rockets" },
    { label: "Capsules", link: "/search/capsules" },
    { label: "Payloads", link: "/search/payloads" },
    { label: "Launches", link: "/search/launches" },
  ];

  return (
    <Navbar
      position="static"
      onMenuOpenChange={setIsMenuOpen}
      className="lg:py-4"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <SpaceXLogo width={200} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={`${item.link}`}
              className="uppercase hover:underline underline-offset-8 decoration-sky-400"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={`${item.link}`} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
