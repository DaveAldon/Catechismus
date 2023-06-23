import React from 'react';
import { useCollapse } from 'react-collapsed';
import { Icon } from '@iconify/react';

interface CollapseArticleProps {
  color?: string;
  articles?: {
    articleTitle: string;
    articleSections: {
      title: string;
      verseRange?: number[];
    }[];
    verseRange?: number[];
  }[];
}
export const CollapseArticle = (props: CollapseArticleProps) => {
  const { getToggleProps, getCollapseProps, isExpanded } = useCollapse();

  return (
    <div className="flex w-full flex-col justify-between pt-4">
      {props.articles &&
        props.articles.map((article, index) => {
          return (
            <div key={index}>
              <div className="flex w-full flex-row justify-between">
                <div
                  className={`font-cinzelFont text-2xl font-bold ${props.color}`}>
                  {article.articleTitle}
                </div>
                <div className="flex flex-row items-center">
                  {article.verseRange ? (
                    <div className="flex flex-row gap-1 px-4 font-karla text-sm font-normal">
                      <div>{article.verseRange[0]}</div>
                      <div>{'→'}</div>
                      <div>{article.verseRange[1]}</div>
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
              <div {...getCollapseProps()}>
                {article.articleSections.map((articleSection, index) => {
                  return (
                    <div className="font-karla text-sm font-normal">
                      <div
                        className={`font-cinzelFont text-2xl font-bold ${props.color}`}>
                        {articleSection.title}
                      </div>
                      <div className="flex flex-row items-center">
                        {articleSection.verseRange ? (
                          <div className="flex flex-row gap-1 px-4 font-karla text-sm font-normal">
                            <div>{articleSection.verseRange[0]}</div>
                            <div>{'→'}</div>
                            <div>{articleSection.verseRange[1]}</div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};
