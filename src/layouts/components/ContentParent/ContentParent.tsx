'use client';

import { Icon } from '@iconify/react';

interface ContentHeaderProps {
  title: string;
  part?: number;
  subtitle?: string;
  sections: {
    sectionTitle: string;
    sectionDescription?: string;
    verseRange?: number[];
  }[];
  color?: string;
}

export const ContentParent = (props: ContentHeaderProps) => {
  return (
    <div className="h-min-32 flex grid-cols-3 flex-row items-center gap-12 px-12 py-4">
      <div
        className={`items-left flex w-1/3 flex-col justify-center ${props.color}`}>
        {props.part ? (
          <div className="font-garamondFont text-3xl italic">
            Part {props.part}
          </div>
        ) : null}
        <div className="font-cinzelFont text-7xl font-bold">{props.title}</div>
        {props.subtitle ? (
          <div className="subtitle-text font-cinzelFont text-2xl font-bold">
            {props.subtitle}
          </div>
        ) : null}
      </div>
      {props.sections.map((section, index) => {
        const verseRange = section.verseRange
          ? section.verseRange.join(' → ')
          : null;
        return (
          <div
            className="flex w-1/3 flex-col items-start justify-center"
            key={index}>
            <div className="flex w-full flex-row justify-between">
              <div
                className={`font-cinzelFont text-2xl font-bold ${props.color}`}>
                {section.sectionTitle}
              </div>
              <div className="flex flex-row items-center gap-4">
                {verseRange ? (
                  <div
                    className="flex font-karla text-sm font-normal"
                    key={index}>
                    {verseRange}
                  </div>
                ) : null}
                <Icon icon="heroicons-outline:plus" className="text-lg" />
              </div>
            </div>
            {section.sectionDescription ? (
              <div className="font-karla text-sm font-normal">
                {section.sectionDescription}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
