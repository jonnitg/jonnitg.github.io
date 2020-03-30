import React from 'react';
import clsx from 'clsx';
import Heading from '@elements/heading';
import styles from './about-section.module.scss';

const AboutSection = () => {
  const aboutTextClasses = clsx(
    styles.stl__container,
    styles['stl__about-section']
  );

  const hobbiesTextClasses = clsx(
    styles.stl__container,
    styles['stl__hobbies-section']
  );

  return (
    <div className={styles.stl}>
      <div className={aboutTextClasses}>
        <Heading tag="h2">About me</Heading>
        <p className={styles.stl__text}>
          I&apos;m a person passionate about the development of web
          technologies, and who uses technologies to create a new experience and
          who is able to demonstrate everything he knows how to do.
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
      <div className={hobbiesTextClasses}>
        <Heading tag="h2">Hobbies</Heading>
        <ul className={styles.stl__list}>
          <li>Musician</li>
          <li>PC Gamer</li>
          <li>Watch Anime</li>
          <li>Watch TV series</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
