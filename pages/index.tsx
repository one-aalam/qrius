import { GetServerSideProps } from 'next';
import fetch from 'isomorphic-unfetch';

import * as SITE_CONFIG from '../public/site.config.json';
import { INewsItemFrontPageResponse } from '../interfaces/hn';
import Layout from '../components/layout';
import NewsItemList from '../components/NewsItemList';
import NewsItemPagination from '../components/NewsItemPagination';
import Header from '../components/Header';

export default ({ data }) => {
  return (
    <Layout>
      <Header siteName={SITE_CONFIG.siteName} />
      {data && (
        <>
          <NewsItemList items={data.hits} />
          <NewsItemPagination numOfPages={data.nbPages} currPage={data.page} />
        </>
      )}
    </Layout>
  );
};

type ServerResponseProp = {
  data: INewsItemFrontPageResponse;
};
export const getServerSideProps: GetServerSideProps = async ({ query }): Promise<{ props: ServerResponseProp }> => {
  const res = await fetch(`https://hn.algolia.com/api/v1/search?tags=front_page&page=${query.page || 0}`);
  const data = await res.json();

  return { props: { data } };
};
