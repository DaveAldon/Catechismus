'use client';

import { Icon } from '@iconify/react';
import { Copyright } from '../Copyright/Copyright';
import { Sheep } from '../Graphics/Sheep/Sheep';

export const WritingControl = () => {
  return (
    <div className="container mb-8 flex flex-col items-center gap-8 md:col-10 lg:col-7">
      <Copyright />
      <div className="orange-text flex w-full flex-row justify-between">
        <p className="flex flex-row items-center gap-1 text-center font-cinzelFont text-lg font-bold">
          <Icon icon="heroicons-outline:arrow-left" className="text-md" />
          Previous
        </p>
        <p className="flex flex-row items-center gap-1 text-center font-cinzelFont text-lg font-bold">
          Next <Icon icon="heroicons-outline:arrow-right" className="text-md" />
        </p>
      </div>
      <Sheep />
    </div>
  );
};
