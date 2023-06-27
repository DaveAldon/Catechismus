import React from 'react';
import SeoMeta from '@/partials/SeoMeta';
import { getListPage } from '@/lib/contentParser';
import { RegularPage } from '@/types';
import { WritingContent } from '@/components/WritingContent/WritingContent';

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
      <WritingContent content={content} />
    </>
  );
};

export default Writing;
