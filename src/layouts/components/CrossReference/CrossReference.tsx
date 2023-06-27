import { Icon } from '@iconify/react';

export const CrossReference = () => {
  return (
    <div className="black-text flex h-full flex-col gap-8 bg-stone-50 p-4 dark:bg-stone-700">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <Icon
            icon="heroicons-outline:information-circle"
            className="text-2xl"
          />
          <Icon
            icon="heroicons-outline:arrows-right-left"
            className="text-2xl"
          />
        </div>
        <Icon icon="heroicons-outline:x-mark" className="text-2xl" />
      </div>
      <div>
        <p className="orange-text font-cinzelFont text-xl font-bold">
          Cross-Reference
        </p>
        <div className="flex flex-row items-center self-stretch px-2 py-1">
          <div className="flex flex-row">
            <p>Part 3</p>
            <Icon icon="heroicons-outline:chevron-right" className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
