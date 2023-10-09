'use client'
import React from 'react';
import SpaceXLogo from './SpaceXLogo';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: 'Crew', link: '#' },
    { label: 'Cores', link: '#' },
    { label: 'Rockets', link: '#' },
    { label: 'Capsules', link: '#' },
    { label: 'Payloads', link: '#' },
    { label: 'Launches', link: '#' },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} position='static' className='lg:py-4'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <SpaceXLogo width={200} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-5' justify='end'>
        {menuItems.map((item, index) =>
          <NavbarItem key={index}>
            <Link
              href={`${item.link}`}
              color='foreground'
              className='uppercase decoration-blue-500 hover:underline hover:underline-offset-4'
            >
              {item.label}
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) =>
          <NavbarMenuItem key={index}>
            <Link href={`${item.link}`} color='foreground' size='lg'>
              {item.label}
            </Link>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;