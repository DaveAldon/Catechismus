'use client';

import { Icon } from '@iconify/react';
import { SectionHeader } from '../SectionHeader/SectionHeader';

export const ContentHeader = () => {
  return (
    <div className="container flex h-14 w-full flex-row items-center justify-start gap-4 @container">
      <Icon
        icon="heroicons-outline:book-open"
        className="flex-shrink-0 text-2xl"
      />
      <p className="hidden font-cinzelFont text-lg font-bold @md:block">
        Contents
      </p>
      <div className="h-8 border-r-2 border-stone-300"></div>
      <SectionHeader />
    </div>
  );
};
