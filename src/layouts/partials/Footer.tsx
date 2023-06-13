'use client';

import LogoSmall from '@/components/navigationBar/Logo/LogoSmall';
import config from '@/config/config.json';
import menu from '@/config/menu.json';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="white-background">
      <div className="px-8">
        <div className="flex flex-col items-center justify-between gap-4 pb-0 pt-10 md:flex-row md:gap-0 md:pb-10">
          <div className="flex flex-row gap-8 text-left lg:w-[436px]">
            <div className="pt-2">
              <LogoSmall />
            </div>
            <p className="w-80">
              <Link href={'/'} className="orange-text">
                Catechismus
              </Link>{' '}
              is the best online experience of the Catechism of the Catholic
              Church
            </p>
          </div>
          <div className="mb-8 flex flex-row gap-3 text-center md:mb-0">
            {menu.footer.map(menu => (
              <div key={menu.name}>
                <Link
                  href={menu.url}
                  className="orange-text font-karla text-lg font-normal">
                  {menu.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-border py-7 dark:border-darkmode-border">
          <div className="flex flex-col justify-between gap-4 text-center font-garamondFont text-light dark:text-darkmode-light md:flex-row md:gap-0">
            <p>St. John Paul II, patron saint of Catechismus, pray for us!</p>
            <p>{config.params.copyright}</p>
          </div>
        </div>
      </div>
      <div className="h-[120px] w-full bg-[url('/images/patterns/footer-pattern.png')]" />
    </footer>
  );
};

export default Footer;
