import React from 'react';
import Breakline from '@elements/breakline';
import CodeText from '@elements/code-text';
import Heading from '@elements/heading';
import styles from './start-section.module.scss';

const StartSection: React.FunctionComponent = () => {
  return (
    <section id="start" className="section">
      <div className={styles.text__container}>
        <CodeText className={styles.text__heading__code}>
          user.full_name
        </CodeText>
        <Heading tag="h1" className={styles.text__heading}>
          Jonatán Isaac
          <Breakline />
          Treviño Galindo
        </Heading>
        <Heading tag="h2" className={styles.text__subheading}>
          Web Developer
        </Heading>
        <CodeText className={styles.text__subheading__code}>
          user.title
        </CodeText>
      </div>
      <div className={styles.image__container}>
        <img
          className={styles.image}
          src="https://via.placeholder.com/420x800"
          alt=""
        />
        <CodeText className={styles.image__text}>user.image</CodeText>
      </div>
    </section>
  );
};

export default StartSection;
