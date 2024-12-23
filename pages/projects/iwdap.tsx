import data from '../../data/projects/iwdap';
import { NextPageWithLayout } from '../_app';
import Layout from '../../components/container/Layout';
import WebApp from '../../components/presentational/Webapp';

const IwdapPage: NextPageWithLayout = () => <WebApp data={data} />;

IwdapPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
export default IwdapPage;
