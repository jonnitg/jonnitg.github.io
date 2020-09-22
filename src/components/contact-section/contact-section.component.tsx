import React, { useRef } from 'react';
import useSectionObserver from '@hooks/useSectionObserver';
import CodeText from '@elements/code-text';
import CodeObject from '@elements/code-object';
import styles from './contact-section.module.scss';

const ContactSection: React.FunctionComponent = () => {
  const contactRef = useRef(null);
  useSectionObserver(contactRef, { root: null, threshold: [0.5] });

  return (
    <section ref={contactRef} id="contact" className="section">
      <CodeText>thanks.message</CodeText>
      <p>Thank you for visiting this website.</p>
      <p> Lets do something fun!</p>

      <CodeText>
        contact:
        <CodeObject
          json={{
            email: 'galtrev@gmail.com',
            github: <CodeText>username: &ldquo;jonnitg&rdquo;</CodeText>,
            linkedin: <CodeText>username: &ldquo;jonnitg&rdquo;</CodeText>,
          }}
        />
      </CodeText>
    </section>
  );
};

export default ContactSection;
