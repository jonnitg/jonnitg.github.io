import Head from 'next/head';
import Layout from '@components/layout';
import AboutSection from '@components/about-section';
import ContactSection from '@components/contact-section';
import StartSection from '@components/start-section';
import WorkSection from '@components/work-section';

const Home: React.FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>Web Developer | Jonatán Isaac Treviño Galindo</title>
      </Head>
      <div
        style={{
          scrollBehavior: 'smooth',
          overflowY: 'scroll',
          height: '100%',
        }}
      >
        {/* <StartSection />
        <AboutSection />
        <WorkSection />
        <ContactSection /> */}
      </div>
    </Layout>
  );
};

export default Home;
