import React, { useRef } from 'react';
import useSectionObserver from '@hooks/useSectionObserver';
import Heading from '@elements/heading';
import styles from './skills-section.module.scss';

const SkillsSection = () => {
  const skillsRef = useRef(null);
  useSectionObserver(skillsRef, { root: null, threshold: [0.5] });

  return (
    <section ref={skillsRef} id="skills" className="section">
      <div className={styles.stl}>
        <div className={styles.stl__container}>
          <Heading tag="h2" className={styles.str__heading}>
            Skills
          </Heading>
          <div className={styles.stl__text}>
            <ul>
              <li>
                Front-End
                <ul>
                  <li>HTML</li>
                  <li>CSS / SASS</li>
                  <li>Javascript ES6 / JQuery</li>
                  <li>Typescript</li>
                </ul>
              </li>
              <li>
                Back-End
                <ul>
                  <li>Javascript / NodeJs</li>
                  <li>PHP / Composer</li>
                  <li>Docker</li>
                </ul>
              </li>
              <li>
                FrameWorks
                <ul>
                  <li>React / Redux / GatsbyJs / NextJs</li>
                  <li>Material UI</li>
                  <li>GraphQL</li>
                  <li>Laravel</li>
                  <li>AdonisJs / ExpressJs</li>
                  <li>Firebase</li>
                </ul>
              </li>
              <li>
                Source Control
                <ul>
                  <li>Git (Git Flow)</li>
                  <li>Github</li>
                  <li>Jira</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
