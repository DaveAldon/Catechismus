import { Icon } from '@iconify/react';
import { useCollapse } from 'react-collapsed';

interface ArticleContentProps {
  color?: string;
  articleTitle: string;
  articleSections: {
    title: string;
    verseRange?: number[];
  }[];
  verseRange?: number[];
}
export const ArticleContent = (props: ArticleContentProps) => {
  const { getToggleProps, getCollapseProps, isExpanded } = useCollapse();
  const article = props;
  return (
    <div>
      <div className="flex w-full flex-row justify-between">
        <div className={`font-garamondFont text-lg font-medium ${props.color}`}>
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
              <Icon icon="heroicons-outline:minus" className="text-lg" />
            ) : (
              <Icon icon="heroicons-outline:plus" className="text-lg" />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4" {...getCollapseProps()}>
        {article.articleSections.map((articleSection, index) => {
          return (
            <div
              key={index}
              className="section-border flex flex-row font-karla text-sm font-normal">
              <div className={`font-karla text-base font-normal`}>
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
};