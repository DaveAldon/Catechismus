import { TableOfContentsButton } from '@/components/Buttons/TableOfContentsButton/TableOfContentsButton';
import { Sheep } from '@/components/Graphics/Sheep/Sheep';
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
      <section className="body py-24 pt-14">
        <div className="container">
          <div className="row justify-center">
            <div className="mb-0 text-center">
              <p className="black-text mb-4 font-garamondFont text-4xl font-medium italic">
                Catechismus Catholicæ Ecclesiæ
              </p>
              <div className="mb-2 flex flex-col justify-center gap-0 md:flex-row md:gap-4">
                <p className="black-text mb-0 font-cinzelFont text-7xl font-bold">
                  Catechism
                </p>
                <p className="text-italic black-text font-garamondFont text-7xl font-medium italic">
                  of the
                </p>
              </div>
              <p className="black-text mb-0 px-6 font-cinzelFont text-7xl font-bold md:px-0">
                Catholic Church
              </p>
              <div className="mt-12 flex w-full flex-col items-center justify-center gap-6">
                <HomeSearch />
                <TableOfContentsButton />
                <Sheep />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
