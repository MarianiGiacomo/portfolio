import Image from 'next/image';
import Head from 'next/head';

import Layout, { siteTitle } from '../components/container/Layout';
import Card from '../components/presentational/Card';
import Tag from '../components/presentational/Tag';

import data from '../data';
import { extractUniqueTech, boldName } from '../helpers';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';

const Page: NextPageWithLayout = () => {
  const { firstName, lastName, home, profileImg, projects } = { ...data };
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='mt-5 justify-center text-2xl sm:flex sm:flex-row'>
        <div className='mt-5 text-center'>
          <Image
            priority
            src={profileImg.src}
            height={profileImg.height}
            width={profileImg.width}
            alt={`${firstName} ${lastName}`}
            className='size-24 rounded-full border-2 border-solid border-mint'
          />
        </div>
        <div className='mt-5 p-2'>
          <h1 className='mb-5'>
            {boldName(home.heading, firstName, lastName)}
          </h1>
          <h2 className='md:ml-9 md:pl-9'>{home.intro}</h2>
        </div>
      </section>
      <section>
        <h2 className='mb-1 mt-3 text-center text-xl font-medium'>Projects</h2>
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

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout home> {page} </Layout>;
};

export default Page;
