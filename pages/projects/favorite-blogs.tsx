import data from '../../data/projects/favorite-blogs';
import { NextPageWithLayout } from '../_app';
import Layout from '../../components/container/Layout';
import WebApp from '../../components/presentational/Webapp';

const FavouriteBlogsPage: NextPageWithLayout = () => <WebApp data={data} />;

FavouriteBlogsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
export default FavouriteBlogsPage;
