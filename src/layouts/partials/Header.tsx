'use client';

import Logo from '@/components/navigationBar/Logo/Logo';
import { SearchBar } from '@/components/navigationBar/Search/SearchBar';
import { Sidebar } from '@/components/navigationBar/Sidebar/Sidebar';
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  const [animation, setAnimation] = React.useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setAnimation(isMenuOpen ? 'animate-slide-left' : 'animate-slide-right');
  };

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full black-background transition ease transform duration-300`;
  const HamburgerButton = () => {
    return (
      <button
        className="group flex h-10 w-10 flex-col items-center justify-center lg:hidden"
        onClick={toggleMenu}>
        <div
          className={`${genericHamburgerLine} ${
            !isMenuOpen
              ? 'translate-y-3 rotate-45 opacity-100 group-hover:opacity-100'
              : 'opacity-100 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            !isMenuOpen ? 'opacity-0' : 'opacity-100 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            !isMenuOpen
              ? '-translate-y-3 -rotate-45 opacity-100 group-hover:opacity-100'
              : 'opacity-100 group-hover:opacity-100'
          }`}
        />
      </button>
    );
  };
  return (
    <div>
      <div className="absolute right-0 top-[64px] w-full overflow-hidden md:w-[280px]">
        <div className={`w-full translate-x-[100%] ${animation}`}>
          <Sidebar />
        </div>
      </div>
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
          {pathname === '/' ? null : (
            <div className="hidden flex-grow items-center justify-center lg:flex">
              <SearchBar />
            </div>
          )}
          {/* navbar toggler */}
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
            <ThemeSwitcher className="mr-4" />
            <HamburgerButton />

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
    </div>
  );
};

export default Header;
