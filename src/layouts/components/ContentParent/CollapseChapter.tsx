import React from 'react';
import { useCollapse } from 'react-collapsed';
import { Icon } from '@iconify/react';
import { CollapseArticle } from './CollapseArticle';
import { CollapseChapterType, CollapseStyle } from './collapse';

export const CollapseChapter = (props: CollapseChapterType) => {
  const { getToggleProps, getCollapseProps, isExpanded } = useCollapse();

  return (
    <div>
      <div className="flex w-full flex-row justify-between">
        <div
          className={`font-cinzelFont text-2xl font-bold capitalize ${props.color}`}>
          {props.chapterTitle}
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
      {props.chapterDescription ? (
        <div className="font-karla text-sm font-normal capitalize">
          {props.chapterDescription}
        </div>
      ) : null}
      {props.articles ? (
        <div className="section-border w-full" {...getCollapseProps()}>
          <CollapseArticle articles={props.articles} color={props.color} />
        </div>
      ) : null}
    </div>
  );
};
