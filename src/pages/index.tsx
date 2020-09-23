import Head from 'next/head';
import Layout from '@components/layout';
import StartSection from '@components/start-section';

const Home: React.FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>Web Developer | Jonatán Isaac Treviño Galindo</title>
      </Head>
      <StartSection />
    </Layout>
  );
};

export default Home;
