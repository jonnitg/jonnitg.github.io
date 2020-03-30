import React from 'react';
import clsx from 'clsx';
import Heading from '@elements/heading';
import styles from './about-section.module.scss';

const AboutSection = () => {
  const aboutTextClasses = clsx(
    styles.stl__container,
    styles['stl__about-text']
  );

  const hobbiesTextClasses = clsx(
    styles.stl__container,
    styles['stl__hobbies-text']
  );

  return (
    <div className={styles.stl}>
      <div className={aboutTextClasses}>
        <Heading tag="h2">About me</Heading>
      </div>
      <div className={hobbiesTextClasses}>
        <Heading tag="h2">Hobbies</Heading>
      </div>
    </div>
  );
};

export default AboutSection;
