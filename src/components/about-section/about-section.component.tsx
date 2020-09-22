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
    <section ref={aboutRef} className="section">
      <div>
        <img src="" alt="" />
        <CodeText>
          current_page:<CodeHeading>about</CodeHeading>
        </CodeText>
        <CodeText>about.image</CodeText>
      </div>
      <Description />
      <Skills />
    </section>
  );
};

export default AboutSection;
