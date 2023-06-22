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
  backgroundColor?: string;
}

export const ContentParent = (props: ContentHeaderProps) => {
  return (
    <div className={`${props.backgroundColor}`}>
      <div
        className={`h-min-32 container flex flex-col items-start justify-between gap-4 py-4 lg:flex-row lg:items-center lg:gap-0`}>
        <div
          className={`items-left flex flex-col justify-center md:w-1/3 ${props.color}`}>
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
              <div
                className="flex w-full flex-col items-start md:w-1/2"
                key={index}>
                <div className="flex w-full flex-row justify-between">
                  <div
                    className={`font-cinzelFont text-2xl font-bold ${props.color}`}>
                    {section.sectionTitle}
                  </div>
                  <div className="flex flex-row items-center">
                    {section.verseRange ? (
                      <div
                        className="flex flex-row gap-1 px-4 font-karla text-sm font-normal"
                        key={index}>
                        <div>{section.verseRange[0]}</div>
                        <div>{'→'}</div>
                        <div>{section.verseRange[1]}</div>
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
      </div>
    </div>
  );
};
