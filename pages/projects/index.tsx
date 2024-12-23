import Layout from '../../components/container/Layout';
import Card from '../../components/presentational/Card';
import Tag from '../../components/presentational/Tag';
import { extractUniqueTech } from '../../helpers';

import data from '../../data';
import React from 'react';
import { NextPageWithLayout } from '../_app';

const Projects: NextPageWithLayout = () => {
  const { projects } = { ...data };

  return (
    <>
      <section>
        <h2 className='mb-1 mt-3 text-center text-xl font-medium'>
          Personal Projects
        </h2>
        <div className='mx-auto mb-5 mt-8 w-11/12 justify-between gap-5 sm:flex sm:flex-wrap'>
          {Object.entries(projects).map((e, i) => {
            return (
              <Card
                link={`/projects/${e[0]}`}
                heading={e[1].title ?? ''}
                text={e[1].short ?? ''}
                key={i}
              />
            );
          })}
        </div>
      </section>

      <section>
        <h2 className='mb-1 mt-3 text-center text-xl font-medium'>
          Technologies
        </h2>
        <div className='mb-10 mt-3 flex flex-wrap'>
          {Array.from(extractUniqueTech(projects))
            .concat('SQL')
            .map((t, i) => (
              <Tag key={i} text={t} />
            ))}
        </div>
      </section>
    </>
  );
};

Projects.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Projects;
