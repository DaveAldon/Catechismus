import React from 'react';
import { ArticleContent } from './ArticleContent';

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
  return (
    <div className="flex w-full flex-col justify-between pt-4">
      {props.articles &&
        props.articles.map((article, index) => {
          return (
            <ArticleContent
              key={index}
              {...{ ...article, color: props.color }}
            />
          );
        })}
    </div>
  );
};
