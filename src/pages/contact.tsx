import Head from 'next/head';
import Layout from '@components/layout';
import ContactSection from '@components/contact-section';

const Contact = () => (
  <Layout>
    <Head>
      <title>Contact | Web Developer | Jonatán Isaac Treviño Galindo</title>
    </Head>
    <ContactSection />
  </Layout>
);

export default Contact;
