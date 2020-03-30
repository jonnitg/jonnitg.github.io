import Head from 'next/head';
import Layout from '@components/layout';
import AboutSection from '@components/about-section';

const Home = () => (
  <Layout>
    <Head>
      <title>About | Web Developer | Jonatán Isaac Treviño Galindo</title>
    </Head>
    <AboutSection />
  </Layout>
);

export default Home;
