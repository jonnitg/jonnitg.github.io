import React, { useRef } from 'react';
import useSectionObserver from '@hooks/useSectionObserver';
import CodeText from '@elements/code-text';
import CodeObject from '@elements/code-object';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './contact-section.module.scss';

const ContactSection: React.FunctionComponent = () => {
  const contactRef = useRef(null);
  useSectionObserver(contactRef, { root: null, threshold: [0.5] });

  return (
    <section
      ref={contactRef}
      id="contact"
      className={clsx('section', styles.container)}
    >
      <div className={styles.content}>
        <div>
          <CodeText className={styles['content__code-text']}>
            thanks.message
          </CodeText>
          <p className={styles.content__text}>
            Thank you for visiting this website.
          </p>
          <p className={styles.content__text}>Lets do something fun!</p>
        </div>
        <CodeText>
          contact:
          <CodeObject
            json={{
              email: (
                <Link href="mailto:galtrev@gmail.com">
                  <a className={styles.content__link}>galtrev@gmail.com</a>
                </Link>
              ),
              github: (
                <CodeText>
                  username:{' '}
                  <Link href="https://github.com/jonnitg">
                    <a className={styles.content__link}>jonnitg</a>
                  </Link>
                </CodeText>
              ),
              linkedin: (
                <CodeText>
                  username:{' '}
                  <Link href="https://www.linkedin.com/in/jonnitg/">
                    <a className={styles.content__link}>jonnitg</a>
                  </Link>
                </CodeText>
              ),
            }}
          />
        </CodeText>
      </div>
    </section>
  );
};

export default ContactSection;
