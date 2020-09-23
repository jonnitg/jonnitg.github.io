import Head from 'next/head';
import Layout from '@components/layout';
import WorkSection from '@components/work-section';

const Home: React.FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>Web Developer | Jonatán Isaac Treviño Galindo</title>
      </Head>

      <WorkSection />
    </Layout>
  );
};

export default Home;
