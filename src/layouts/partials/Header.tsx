'use client';

import Logo from '@/components/navigationBar/Logo/Logo';
import { Tag } from '@/components/navigationBar/Tag/Tag';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import config from '@/config/config.json';
import menu from '@/config/menu.json';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoSearch } from 'react-icons/io5/index.js';

export interface ChildNavigationLink {
  name: string;
  url: string;
}

export interface NavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: ChildNavigationLink[];
}

const Header = () => {
  // destructuring the main menu from menu object
  const { main }: { main: NavigationLink[] } = menu;
  const { navigation_button, settings } = config;
  // get current path
  const pathname = usePathname();

  return (
    <header
      className={`white-background z-30 h-[64px] py-6 ${
        settings.sticky_header && 'sticky top-0'
      } flex items-center`}>
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0 flex flex-row items-center justify-center gap-4">
          <Logo />
          <Tag />
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          id="show-button"
          htmlFor="nav-toggle"
          className="order-3 flex cursor-pointer items-center text-dark dark:text-white lg:order-1 lg:hidden">
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
        </label>
        <label
          id="hide-button"
          htmlFor="nav-toggle"
          className="order-3 hidden cursor-pointer items-center text-dark dark:text-white lg:order-1">
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"></polygon>
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="navbar-nav g:flex-row order-3 hidden grow pb-6 text-right lg:order-1 lg:flex lg:w-auto lg:justify-end lg:space-x-2 lg:pb-0 xl:space-x-8">
          <li className="nav-item">
            <Link href={'/about'} className={`nav-link active mr-4 block`}>
              About
            </Link>
          </li>
          {navigation_button.enable && (
            <li className="mt-4 inline-block lg:hidden">
              <Link
                className="btn btn-black btn-sm"
                href={navigation_button.link}>
                {navigation_button.label}
              </Link>
            </li>
          )}
        </ul>
        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          {settings.search && (
            <Link
              className="mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white"
              href="/search"
              aria-label="search">
              <IoSearch />
            </Link>
          )}
          <ThemeSwitcher className="mr-5" />
          {navigation_button.enable && (
            <Link
              className="btn btn-black btn-sm hidden lg:inline-block"
              href={navigation_button.link}>
              {navigation_button.label}
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
