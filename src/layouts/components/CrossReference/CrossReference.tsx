import { Icon } from '@iconify/react';
import { SectionHeader } from '../SectionHeader/SectionHeader';

export const CrossReference = () => {
  return (
    <div className="black-text flex h-full flex-col gap-4 bg-stone-50 p-4 @container dark:bg-stone-900">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <Icon
            icon="heroicons-outline:information-circle"
            className="text-2xl"
          />
          <Icon
            icon="heroicons-outline:arrows-right-left"
            className="orange-text text-2xl"
          />
        </div>
        <Icon icon="heroicons-outline:x-mark" className="text-2xl" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="orange-text font-cinzelFont text-xl font-bold">
          Cross-Reference
        </p>
        <SectionHeader />
      </div>
    </div>
  );
};
