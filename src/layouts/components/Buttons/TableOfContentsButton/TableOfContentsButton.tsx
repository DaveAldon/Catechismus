'use client';

import { Icon } from '@iconify/react';

export const TableOfContentsButton = () => {
  return (
    <a
      className="btn btn-primary mt-5 flex w-64 flex-row items-center justify-center gap-2 rounded-sm border-none bg-orange-700 font-cinzelFont text-lg shadow-xl"
      href={'/'}>
      <Icon icon="heroicons-outline:book-open" className="text-2xl" /> Table of
      Contents
    </a>
  );
};
