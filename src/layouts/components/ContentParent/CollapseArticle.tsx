import React from 'react';
import { ArticleContent } from './ArticleContent';
import { CollapseArticleType, CollapseStyle } from './collapse';

interface CollapseArticleProps extends CollapseStyle {
  articles?: CollapseArticleType[];
}
export const CollapseArticle = (props: CollapseArticleProps) => {
  return (
    <div className="flex w-full flex-col justify-between gap-4 pt-4 capitalize">
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
