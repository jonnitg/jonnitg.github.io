import React from 'react';
import Heading from '@elements/heading';
import styles from './skills-section.module.scss';

const SkillsSection = () => {
  return (
    <div className={styles.stl}>
      <div className={styles.stl__container}>
        <Heading tag="h2" className={styles.str__heading}>
          Skills
        </Heading>
        <div className={styles.stl__text}>
          <ul>
            <li>
              Javascript
              <ul>
                <li>ReactJs</li>
                <li>Redux</li>
                <li>NextJs</li>
                <li>GatsbyJs</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>Typescript</li>
              </ul>
            </li>
            <li>
              CSS
              <ul>
                <li>Sass</li>
                <li>BEM</li>
              </ul>
            </li>
            <li>
              Git
              <ul>
                <li>GitHub</li>
                <li>GitLab</li>
              </ul>
            </li>
            <li>Docker</li>
            <li>
              PHP
              <ul>
                <li>Laravel</li>
                <li>Wordpress</li>
              </ul>
            </li>
            <li>
              Databases
              <ul>
                <li>Mysql</li>
                <li>Postgres</li>
                <li>Mongo</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
