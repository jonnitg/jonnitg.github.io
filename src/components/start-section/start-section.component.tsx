import React from 'react';
import Heading from '@elements/heading';
import Breakline from '@elements/breakline';
import CodeText from '@elements/code-text';
import styles from './start-section.module.scss';

const StartSection: React.FunctionComponent = () => {
  return (
    <section id="start">
      <div>
        <img src="" alt="" />
        <CodeText>user.image</CodeText>
      </div>
      <div>
        <CodeText>user.full_name</CodeText>
        <Heading tag="h1">
          Jonatán Isaac
          <Breakline />
          Treviño Galindo
        </Heading>
        <Heading tag="h2">Web Developer</Heading>
        <CodeText>user.title</CodeText>
      </div>
    </section>
  );
};

export default StartSection;
