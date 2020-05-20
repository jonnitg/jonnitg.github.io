import Head from 'next/head';
import Layout from '@components/layout';
import AboutSection from '@components/about-section';
import SkillsSection from '@components/skills-section';
import ContactSection from '@components/contact-section';

const Home = () => {
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
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Home;
