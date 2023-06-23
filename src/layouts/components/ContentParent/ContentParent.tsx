'use client';

import { CollapseSection } from './CollapseSection';

interface ContentHeaderProps {
  title: string;
  part?: number;
  subtitle?: string;
  sections: {
    sectionTitle: string;
    sectionDescription?: string;
    verseRange?: number[];
    chapters?: {
      chapterTitle: string;
      chapterDescription?: string;
      verseRange?: number[];
      isCollapsable?: boolean;
    }[];
  }[];
  color?: string;
  backgroundColor?: string;
}

export const ContentParent = (props: ContentHeaderProps) => {
  return (
    <div className={`${props.backgroundColor}`}>
      <div
        className={`h-min-32 container flex flex-col gap-4 py-4 lg:flex-row lg:gap-0`}>
        <div className={`flex flex-col items-start md:w-1/3 ${props.color}`}>
          {props.part ? (
            <div className="font-garamondFont text-3xl italic">
              Part {props.part}
            </div>
          ) : null}
          <div className="font-cinzelFont text-7xl font-bold">
            {props.title}
          </div>
          {props.subtitle ? (
            <div className="subtitle-text font-cinzelFont text-2xl font-bold">
              {props.subtitle}
            </div>
          ) : null}
        </div>
        <div className="flex w-full flex-col gap-8 md:flex-row md:gap-8 lg:w-2/3">
          {props.sections.map((section, index) => {
            return (
              <CollapseSection
                {...{ ...section, color: props.color }}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
