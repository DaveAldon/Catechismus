'use client';

import { Icon } from '@iconify/react';

export const ContentHeader = () => {
  return (
    <div className="flex h-14 w-full flex-row items-center justify-start gap-2">
      <Icon icon="heroicons-outline:book-open" className="text-2xl" />
      <p className="font-cinzelFont text-lg font-bold">Contents</p>
    </div>
  );
};
