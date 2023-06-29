import { Icon } from '@iconify/react';
import { Arrow } from '../Graphics/Arrow/Arrow';

interface SectionData {
  title: string;
  abbreviatedTitle: string;
  number: string;
  description: string;
}
const sectionData: SectionData[] = [
  {
    title: 'Part 3',
    abbreviatedTitle: 'Pt. 3',
    number: '3',
    description: 'General Provisions',
  },
  {
    title: 'Section 1',
    abbreviatedTitle: 'Sec. 1',
    number: '1',
    description: 'General Provisions',
  },
  {
    title: 'Chapter 3',
    abbreviatedTitle: 'Ch. 3',
    number: '3',
    description: 'General Provisions',
  },
  {
    title: 'Article 2',
    abbreviatedTitle: 'Art. 2',
    number: '2',
    description: 'General Provisions',
  },
  {
    title: 'Part 1',
    abbreviatedTitle: 'Pt. 1',
    number: '1',
    description: 'General Provisions',
  },
];

export const CrossReference = () => {
  const sections = () => {
    const elements = [];
    for (let i = 0; i < sectionData.length; i++) {
      elements.push(
        <div className="flex flex-row items-center justify-evenly">
          <div className="flex flex-col">
            <p className="hidden @xl:block">{sectionData[i].title}</p>
            <p className="block @xl:hidden">
              {sectionData[i].abbreviatedTitle}
            </p>
            <p className="hidden text-xs @xl:block">
              {sectionData[i].description}
            </p>
          </div>
        </div>,
      );
      if (i != sectionData.length - 1) {
        elements.push(<Arrow />);
      }
    }
    return elements;
  };

  return (
    <div className="black-text flex h-full flex-col gap-4 bg-stone-50 p-4 @container dark:bg-stone-700">
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
        <div className="flex flex-row items-center justify-between px-2 py-1">
          {sections().map((section, index) => (
            <div key={index}>{section}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
