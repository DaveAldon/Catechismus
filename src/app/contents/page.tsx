import { ContentHeader } from '@/components/ContentParent/ContentHeader';
import { ContentParent } from '@/components/ContentParent/ContentParent';
import { getListPage } from '@/lib/contentParser';
import SeoMeta from '@/partials/SeoMeta';
import { RegularPage } from '@/types';

const Contents = async () => {
  const data: RegularPage = getListPage('pages/contact.mdx');
  const { frontmatter, content } = data;
  const { title, description, meta_title, image } = frontmatter;

  const tableOfContents = [
    {
      title: 'Intro',
      sections: [
        {
          sectionTitle: 'Preface',
        },
        {
          sectionTitle: 'Prologue',
          verseRange: [1, 25],
        },
      ],
    },
    {
      title: 'Faith',
      subtitle: 'Profession of Faith',
      part: 1,
      sections: [
        {
          sectionTitle: 'Divine Revelation',
          sectionDescription: 'Sec. 1: “I Believe” - “We Believe”',
          verseRange: [26, 184],
        },
        {
          sectionTitle: 'Creed',
          sectionDescription: 'Sec. 2: The Profession of the Christian Faith',
          verseRange: [185, 1065],
        },
      ],
    },
  ];

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="">
        <div className="container">
          <div className="black-text row justify-center">
            <ContentHeader />
            {tableOfContents.map((item, index) => (
              <ContentParent key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contents;
