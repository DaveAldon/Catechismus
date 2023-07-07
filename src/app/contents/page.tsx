import { ContentHeader } from '@/components/ContentParent/ContentHeader';
import { ContentParent } from '@/components/ContentParent/ContentParent';
import { CollapseParentType } from '@/components/ContentParent/collapse';
import { getListPage } from '@/lib/contentParser';
import SeoMeta from '@/partials/SeoMeta';
import { RegularPage } from '@/types';
import { getJsonData } from 'database/getJsonData';
import { SheetPaths } from 'database/lib/sheets';

const Contents = async () => {
  const tableOfContents = (await getJsonData(
    SheetPaths.COLLAPSABLE_TABLE_OF_CONTENTS,
  )) as CollapseParentType[];
  const data: RegularPage = getListPage('pages/contact.mdx');
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
        {tableOfContents.map((content, index) => (
          <ContentParent key={index} {...content} />
        ))}
      </div>
    </>
  );
};

export default Contents;
