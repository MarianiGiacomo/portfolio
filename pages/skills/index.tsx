import Layout from '../../components/container/Layout';

import React from 'react';
import { NextPageWithLayout } from '../_app';

const SkillsPage: NextPageWithLayout = () => {
  return (
    <>
      <section>
        <h2 className='mb-1 mt-3 text-center text-xl font-medium'>Skills</h2>
      </section>
    </>
  );
};

SkillsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
export default SkillsPage;
