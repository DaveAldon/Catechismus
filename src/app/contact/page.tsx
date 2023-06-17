import { Sheep } from '@/components/Graphics/Sheep/Sheep';
import MDXContent from '@/components/MDXContent';
import { getListPage } from '@/lib/contentParser';
import SeoMeta from '@/partials/SeoMeta';
import { RegularPage } from '@/types';

const Contact = async () => {
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
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="black-text gap-4 text-center md:col-10 lg:col-7">
              <p className="header-text mb-6 text-left">Contact</p>
              <div className="content text-left font-karla font-normal">
                <MDXContent content={content} />
              </div>
              <div className="mt-12 flex w-full flex-col items-center justify-center gap-6">
                <Sheep />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
