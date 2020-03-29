import React from 'react';
import Heading from '@elements/heading';
import styles from './about-section.module.scss';

const AboutSection = () => {
  return (
    <div className={styles.stl}>
      <div>
        <Heading>About me</Heading>
      </div>
      <div>
        <Heading>Hobbies</Heading>
      </div>
    </div>
  );
};

export default AboutSection;
