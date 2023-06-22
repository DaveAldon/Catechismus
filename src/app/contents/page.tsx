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
      color: 'faith-text',
    },
    {
      title: 'Liturgy',
      subtitle: 'Celebration Of The Christian Mystery',
      part: 2,
      sections: [
        {
          sectionTitle: 'Liturgy',
          sectionDescription: 'Sec. 1: The Sacramental Economy',
          verseRange: [1066, 1209],
        },
        {
          sectionTitle: 'Sacraments',
          sectionDescription: 'Sec. 2: The Seven Sacraments of the Church',
          verseRange: [1210, 1690],
        },
      ],
      color: 'liturgy-text',
    },
    {
      title: 'Life',
      subtitle: 'Life in Christ',
      part: 3,
      sections: [
        {
          sectionTitle: 'Vocation',
          sectionDescription: 'Sec. 1: Man’s Vocation – Life in the Spirit',
          verseRange: [1691, 2051],
        },
        {
          sectionTitle: 'Commandments',
          sectionDescription: 'Sec. 2: The Ten Commandments',
          verseRange: [2052, 2557],
        },
      ],
      color: 'life-text',
    },
    {
      title: 'Prayer',
      subtitle: 'Christian Prayer',
      part: 4,
      sections: [
        {
          sectionTitle: 'Prayer',
          sectionDescription: 'Sec. 1: Prayer in the Christian Life',
          verseRange: [2558, 2758],
        },
        {
          sectionTitle: 'Our Father',
          sectionDescription: 'Sec. 2: The Lord’s Prayer “Our Father!”',
          verseRange: [2759, 2865],
        },
      ],
      color: 'prayer-text',
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
          <div className="black-text row w-full">
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
