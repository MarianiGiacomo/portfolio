import Layout from '../../components/container/Layout';

import React from 'react';
import { NextPageWithLayout } from '../_app';

const CoursesAndCertsPage: NextPageWithLayout = () => {

  return (
    <>
      <section>
        <h2 className='mb-1 mt-3 text-center text-xl font-medium'>
          Courses and Certifications
        </h2>
      </section>
    </>
  );
};

CoursesAndCertsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
export default CoursesAndCertsPage;
