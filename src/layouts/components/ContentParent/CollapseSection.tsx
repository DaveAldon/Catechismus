import React from 'react';
import { useCollapse } from 'react-collapsed';
import { Icon } from '@iconify/react';
import { CollapseChapter } from './CollapseChapter';

interface CollapseSectionProps {
  color?: string;
  sectionTitle: string;
  verseRange?: number[];
  sectionDescription?: string;
  chapters?: {
    chapterTitle: string;
    chapterDescription?: string;
    verseRange?: number[];
    isCollapsable?: boolean;
  }[];
}
export const CollapseSection = (props: CollapseSectionProps) => {
  const { getToggleProps, getCollapseProps, isExpanded } = useCollapse();

  return (
    <div className="flex w-full flex-col items-start md:w-1/2">
      <div className="flex w-full flex-row justify-between">
        <div className={`font-cinzelFont text-2xl font-bold ${props.color}`}>
          {props.sectionTitle}
        </div>
        <div className="flex flex-row items-center">
          {props.verseRange ? (
            <div className="flex flex-row gap-1 px-4 font-karla text-sm font-normal">
              <div>{props.verseRange[0]}</div>
              <div>{'→'}</div>
              <div>{props.verseRange[1]}</div>
            </div>
          ) : null}
          <button {...getToggleProps()}>
            {isExpanded ? (
              <Icon icon="heroicons-outline:minus" className="text-lg" />
            ) : (
              <Icon icon="heroicons-outline:plus" className="text-lg" />
            )}
          </button>
        </div>
      </div>
      {props.sectionDescription ? (
        <div className="font-karla text-sm font-normal">
          {props.sectionDescription}
        </div>
      ) : null}
      {props.chapters ? (
        <div className="w-full" {...getCollapseProps()}>
          <CollapseChapter {...props} />
        </div>
      ) : null}
    </div>
  );
};
