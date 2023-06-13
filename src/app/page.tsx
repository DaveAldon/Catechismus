import { TableOfContentsButton } from '@/components/Buttons/TableOfContentsButton/TableOfContentsButton';
import ImageFallback from '@/components/ImageFallback';
import { HomeSearch } from '@/components/Search/HomeSearch/HomeSearch';
import { getListPage } from '@/lib/contentParser';
import SeoMeta from '@/partials/SeoMeta';
import { Button, Feature } from '@/types';

const Home = () => {
  const homepage = getListPage('_index.md');
  const { frontmatter } = homepage;
  const {
    banner,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section className="section bg-stone-100 pt-14">
        <div className="container">
          <div className="row justify-center">
            <div className="mb-0 text-center">
              <p className="mb-4 font-garamondFont text-4xl font-medium italic text-stone-500">
                Catechismus Catholicæ Ecclesiæ
              </p>
              <div className="mb-2 flex flex-row justify-center gap-4">
                <p className="mb-0 font-cinzelFont text-7xl font-bold text-stone-600">
                  Catechism
                </p>
                <p className="text-italic font-garamondFont text-7xl font-medium italic text-stone-600">
                  of the
                </p>
              </div>
              <p className="mb-0 font-cinzelFont text-7xl font-bold text-stone-600">
                Catholic Church
              </p>
              <div className="mt-12 flex w-full flex-col items-center justify-center gap-6">
                <HomeSearch />
                <TableOfContentsButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
