import React from 'react';
import { useCollapse } from 'react-collapsed';
import { Icon } from '@iconify/react';
import { CollapseArticle } from './CollapseArticle';
import { CollapseChapterType, CollapseStyle } from './collapse';

interface CollapseChapterProps extends CollapseStyle {
  chapters?: CollapseChapterType[];
}
export const CollapseChapter = (props: CollapseChapterProps) => {
  const { getToggleProps, getCollapseProps, isExpanded } = useCollapse();

  return (
    <div className=" flex w-full flex-col justify-between pt-4">
      {props.chapters &&
        props.chapters.map((chapter, index) => {
          return (
            <div key={index}>
              <div className="flex w-full flex-row justify-between">
                <div
                  className={`font-cinzelFont text-2xl font-bold ${props.color}`}>
                  {chapter.chapterTitle}
                </div>
                <div className="flex flex-row items-center">
                  {chapter.verseRange ? (
                    <div className="flex flex-row gap-1 px-4 font-karla text-sm font-normal">
                      <div>{chapter.verseRange[0]}</div>
                      <div>{'→'}</div>
                      <div>{chapter.verseRange[1]}</div>
                    </div>
                  ) : null}
                  <button {...getToggleProps()}>
                    {isExpanded ? (
                      <Icon
                        icon="heroicons-outline:minus"
                        className="text-lg"
                      />
                    ) : (
                      <Icon icon="heroicons-outline:plus" className="text-lg" />
                    )}
                  </button>
                </div>
              </div>
              {chapter.chapterDescription ? (
                <div className="font-karla text-sm font-normal">
                  {chapter.chapterDescription}
                </div>
              ) : null}
              {chapter.articles ? (
                <div className="section-border w-full" {...getCollapseProps()}>
                  <CollapseArticle
                    articles={chapter.articles}
                    color={props.color}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
    </div>
  );
};
