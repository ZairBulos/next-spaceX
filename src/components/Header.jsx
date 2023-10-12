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
      onMenuOpenChange={setIsMenuOpen}
      position="static"
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

      <NavbarContent className="hidden sm:flex gap-5" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={`${item.link}`}
              className="uppercase decoration-blue-500 hover:underline hover:underline-offset-4"
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
