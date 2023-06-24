import React from 'react';
import SeoMeta from '@/partials/SeoMeta';
import { getListPage } from '@/lib/contentParser';
import { RegularPage } from '@/types';
import { ContentHeader } from '@/components/ContentParent/ContentHeader';
import MDXContent from '@/components/MDXContent';
import { WritingControl } from '@/components/WritingControl/WritingControl';

const Writing = () => {
  const data: RegularPage = getListPage('writing/prologue.mdx');
  const { frontmatter, content } = data;
  const { title, description, meta_title, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <div className="black-text w-full">
        <ContentHeader />
        <div className="black-text container gap-4 text-center md:col-10 lg:col-7">
          <p className="header-text mb-6 text-left">About</p>
          <div className="content text-left font-karla font-normal">
            <MDXContent content={content} />
          </div>
        </div>
        <WritingControl />
      </div>
    </>
  );
};

export default Writing;
