import React, { useRef } from 'react';
import clsx from 'clsx';
import useSectionObserver from '@hooks/useSectionObserver';
import CodeText from '@elements/code-text';
import CodeHeading from '@elements/code-heading';
import Description from '@components/description';
import Skills from '@components/skills';
import styles from './about-section.module.scss';

const AboutSection: React.FunctionComponent = () => {
  const aboutRef = useRef(null);
  useSectionObserver(aboutRef, { root: null, threshold: [0.5] });

  return (
    <section ref={aboutRef} className={clsx('section', styles.section)}>
      <div className={styles.image__container}>
        <img
          className={styles.image}
          src="https://via.placeholder.com/480x600"
          alt=""
        />
        <div className={styles.image__title__container}>
          <CodeText className={styles.image__title}>
            current_page:<CodeHeading>about</CodeHeading>
          </CodeText>
        </div>
        <CodeText className={styles['image__code-text']}>about.image</CodeText>
      </div>
      <div className={styles.content}>
        <Description />
        <Skills />
      </div>
    </section>
  );
};

export default AboutSection;
