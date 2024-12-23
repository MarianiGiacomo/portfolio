import Layout from '../../components/container/Layout';

import data from '../../data';
import { boldName } from '../../helpers';
import { NextPageWithLayout } from '../_app';

const Publications: NextPageWithLayout = () => {
  const { firstName, lastName, publications } = { ...data };
  return (
    <>
      <h1 className='mb-1 mt-4 text-2xl font-medium'>Publications</h1>
      <p className='mt-3'>{publications.intro}</p>
      <ul>
        {publications.articles.map((p, i) => {
          return (
            <li key={i} className='mt-3'>
              <a href={p.url.href} target='_blank' rel='noopener noreferrer'>
                {boldName(p.title, firstName, lastName)}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Publications.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Publications;
