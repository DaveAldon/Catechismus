'use client';

import LogoSmall from '@/components/navigationBar/Logo/LogoSmall';
import config from '@/config/config.json';
import menu from '@/config/menu.json';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="dark:bg-darkmode-theme-light">
      <div className="px-8">
        <div className="flex flex-row items-center justify-between py-10">
          <div className="mb-8 flex flex-row gap-8 text-center lg:mb-0 lg:w-1/3 lg:text-left">
            <div className="pt-2">
              <LogoSmall />
            </div>
            <p className="w-4/5">
              <Link href={'/'} className="text-orange-700">
                Catechismus
              </Link>{' '}
              is the best online experience of the Catechism of the Catholic
              Church
            </p>
          </div>
          <div className="mb-8 flex flex-row gap-3 text-center lg:mb-0">
            {menu.footer.map(menu => (
              <div className="inline-block" key={menu.name}>
                <Link href={menu.url} className="text-lg text-orange-700">
                  {menu.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-border py-7 dark:border-darkmode-border">
          <div className=" flex flex-row justify-between text-center text-light dark:text-darkmode-light">
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
