'use client';

import { Icon } from '@iconify/react';

export const TableOfContentsButton = () => {
  return (
    <a
      className="btn btn-primary mt-5 flex w-64 flex-row items-center justify-center gap-2 text-lg"
      href={'/contents'}>
      <Icon icon="heroicons-outline:book-open" className="text-2xl" /> Table of
      Contents
    </a>
  );
};
