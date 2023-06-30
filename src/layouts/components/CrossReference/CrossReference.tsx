import { Icon } from '@iconify/react';
import { SectionHeader } from '../SectionHeader/SectionHeader';

interface CrossReferenceProps {
  toggleSidebar: (value: boolean) => void;
}
export const CrossReference = (props: CrossReferenceProps) => {
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
        <button onClick={() => props.toggleSidebar(false)}>
          <Icon icon="heroicons-outline:x-mark" className="text-2xl" />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <p className="orange-text font-cinzelFont text-xl font-bold">
          Cross-Reference
        </p>
        <SectionHeader />
        <p className="font-karla text-lg">
          The Beatitudes respond to the natural desire for happiness. This
          desire is of divine origin: God has placed it in the human heart in
          order to draw man to the One who alone can fulfill it: We all want to
          live happily; in the whole human race there is no one who does not
          assent to this proposition, even before it is fully articulated. How
          is it, then, that I seek you, Lord? Since in seeking you, my God, I
          seek a happy life, let me seek you so that my soul may live, for my
          body draws life from my soul and my soul draws life from you. God
          alone satisfies.
        </p>
      </div>
    </div>
  );
};
