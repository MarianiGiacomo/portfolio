import Layout from '../../components/container/Layout';
import WebApp from '../../components/presentational/Webapp';
import data from '../../data/projects/zlib-pump';
import { NextPageWithLayout } from '../_app';

const ZlibPumpPage: NextPageWithLayout = () => <WebApp data={data} />;

ZlibPumpPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
export default ZlibPumpPage;
