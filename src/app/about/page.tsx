import ImageFallback from '@/components/ImageFallback';
import MDXContent from '@/components/MDXContent';
import { getListPage } from '@/lib/contentParser';
import { markdownify } from '@/lib/utils/textConverter';
import SeoMeta from '@/partials/SeoMeta';
import { RegularPage } from '@/types';

const About = () => {
  const data1: RegularPage = getListPage('pages/about-1.mdx');
  const data2: RegularPage = getListPage('pages/about-2.mdx');
  const { frontmatter: frontmatter1, content: content1 } = data1;
  const { content: content2 } = data2;
  const { title, meta_title, description, image } = frontmatter1;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="black-text gap-4 text-center md:col-10 lg:col-7">
              <p className="header-text mb-6 text-left">About</p>
              <div className="content text-left font-karla font-normal">
                <MDXContent content={content1} />
              </div>
              <p className="header-text mb-6 text-left text-3xl">Creators</p>
              <div className="content text-left font-karla font-normal">
                <MDXContent content={content2} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
