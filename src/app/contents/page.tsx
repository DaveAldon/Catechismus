import { ContentHeader } from '@/components/ContentParent/ContentHeader';
import { ContentParent } from '@/components/ContentParent/ContentParent';
import { CollapseParentType } from '@/components/ContentParent/collapse';
import { getListPage } from '@/lib/contentParser';
import SeoMeta from '@/partials/SeoMeta';
import { RegularPage } from '@/types';

const Contents = async () => {
  const data: RegularPage = getListPage('pages/contact.mdx');
  const { frontmatter, content } = data;
  const { title, description, meta_title, image } = frontmatter;

  const tableOfContents: CollapseParentType[] = [
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
      backgroundColor: 'white-background',
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
          chapters: [
            {
              chapterTitle: 'Search',
              chapterDescription: 'Ch. 1: Man’s Capacity for God',
              verseRange: [26, 49],
              isCollapsable: true,
              articles: [
                {
                  articleTitle: 'Art. 1: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
                {
                  articleTitle: 'Art. 2: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
              ],
            },
          ],
        },
        {
          sectionTitle: 'Creed',
          sectionDescription: 'Sec. 2: The Profession of the Christian Faith',
          verseRange: [185, 1065],
          chapters: [
            {
              chapterTitle: 'Search',
              chapterDescription: 'Ch. 1: Man’s Capacity for God',
              verseRange: [26, 49],
              isCollapsable: true,
              articles: [
                {
                  articleTitle: 'Art. 1: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
                {
                  articleTitle: 'Art. 2: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
              ],
            },
          ],
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
          chapters: [
            {
              chapterTitle: 'Search',
              chapterDescription: 'Ch. 1: Man’s Capacity for God',
              verseRange: [26, 49],
              isCollapsable: true,
              articles: [
                {
                  articleTitle: 'Art. 1: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
                {
                  articleTitle: 'Art. 2: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
              ],
            },
          ],
        },
        {
          sectionTitle: 'Sacraments',
          sectionDescription: 'Sec. 2: The Seven Sacraments of the Church',
          verseRange: [1210, 1690],
          chapters: [
            {
              chapterTitle: 'Search',
              chapterDescription: 'Ch. 1: Man’s Capacity for God',
              verseRange: [26, 49],
              isCollapsable: true,
              articles: [
                {
                  articleTitle: 'Art. 1: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
                {
                  articleTitle: 'Art. 2: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
              ],
            },
          ],
        },
      ],
      color: 'liturgy-text',
      backgroundColor: 'white-background',
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
          chapters: [
            {
              chapterTitle: 'Search',
              chapterDescription: 'Ch. 1: Man’s Capacity for God',
              verseRange: [26, 49],
              isCollapsable: true,
              articles: [
                {
                  articleTitle: 'Art. 1: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
                {
                  articleTitle: 'Art. 2: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
              ],
            },
          ],
        },
        {
          sectionTitle: 'Commandments',
          sectionDescription: 'Sec. 2: The Ten Commandments',
          verseRange: [2052, 2557],
          chapters: [
            {
              chapterTitle: 'Search',
              chapterDescription: 'Ch. 1: Man’s Capacity for God',
              verseRange: [26, 49],
              isCollapsable: true,
              articles: [
                {
                  articleTitle: 'Art. 1: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
                {
                  articleTitle: 'Art. 2: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
              ],
            },
          ],
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
          chapters: [
            {
              chapterTitle: 'Search',
              chapterDescription: 'Ch. 1: Man’s Capacity for God',
              verseRange: [26, 49],
              isCollapsable: true,
              articles: [
                {
                  articleTitle: 'Art. 1: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
                {
                  articleTitle: 'Art. 2: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
              ],
            },
          ],
        },
        {
          sectionTitle: 'Our Father',
          sectionDescription: 'Sec. 2: The Lord’s Prayer “Our Father!”',
          verseRange: [2759, 2865],
          chapters: [
            {
              chapterTitle: 'Search',
              chapterDescription: 'Ch. 1: Man’s Capacity for God',
              verseRange: [26, 49],
              isCollapsable: true,
              articles: [
                {
                  articleTitle: 'Art. 1: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
                {
                  articleTitle: 'Art. 2: The Revelation of God',
                  articleSections: [
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                    {
                      title: 'I. Christ—The Unique Word of Sacred Scripture',
                      verseRange: [101, 104],
                    },
                  ],
                  verseRange: [50, 73],
                },
              ],
            },
          ],
        },
      ],
      color: 'prayer-text',
      backgroundColor: 'white-background',
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
      <div className="black-text w-full">
        <ContentHeader />
        {tableOfContents.map((item, index) => (
          <ContentParent key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default Contents;
