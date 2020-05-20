import React, { useRef } from 'react';
import clsx from 'clsx';
import useSectionObserver from '@hooks/useSectionObserver';
import Heading from '@elements/heading';
import styles from './about-section.module.scss';

const AboutSection = () => {
  const aboutRef = useRef(null);
  useSectionObserver(aboutRef, { root: null, threshold: [0.5] });
  const aboutTextClasses = clsx(
    styles.stl__container,
    styles['stl__about-section']
  );

  return (
    <section ref={aboutRef} id="about" className="section">
      <div className={styles.stl}>
        <div className={aboutTextClasses}>
          <Heading tag="h2">About me</Heading>
          <p className={styles.stl__text}>
            I&apos;m a person passionate about the development of web
            technologies, and who uses technologies to create a new experience
            and who is able to demonstrate everything he knows how to do.
          </p>
          <p className={styles.stl__text}>
            Well organized person, self-taught, problem solver, and with high
            attention to detail. A family person, the one that makes them laugh.
          </p>
          <p className={styles.stl__text}>
            Interested in the frontend environment and working on ambitious
            projects with a good community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
