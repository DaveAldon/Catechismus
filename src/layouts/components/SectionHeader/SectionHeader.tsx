'use client';

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

export const SectionHeader = () => {
  const sections = () => {
    const elements = [];
    for (let i = 0; i < sectionData.length; i++) {
      elements.push(
        <div className="flex flex-row items-center justify-evenly">
          <div className="flex flex-col">
            <p className="subtitle-text hidden font-karla text-xs @md:block">
              {sectionData[i].title}
            </p>
            <p className="subtitle-text block font-karla text-xs @md:hidden">
              {sectionData[i].abbreviatedTitle}
            </p>
            <p className="black-text hidden font-karla text-sm @2xl:block">
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
    <div className="flex w-full flex-row items-center justify-between px-2 py-1 @container">
      {sections().map((section, index) => (
        <div key={index}>{section}</div>
      ))}
    </div>
  );
};
