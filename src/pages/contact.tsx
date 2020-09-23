import Head from 'next/head';
import Layout from '@components/layout';
import ContactSection from '@components/contact-section';

const Home: React.FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>Web Developer | Jonatán Isaac Treviño Galindo</title>
      </Head>
      <ContactSection />
    </Layout>
  );
};

export default Home;
