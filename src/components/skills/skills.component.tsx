import React, { useRef } from 'react';
import useSectionObserver from '@hooks/useSectionObserver';
import CodeText from '@elements/code-text';
import CodeList from '@elements/code-list';
import styles from './skills.module.scss';

const Skills: React.FunctionComponent = () => {
  const skillsRef = useRef(null);
  const skillList = [
    { id: 'html/css/js', text: 'html/css/js' },
    { id: 'react', text: 'react' },
    { id: 'nextjs', text: 'nextjs' },
    { id: 'gatsbyjs', text: 'gatsbyjs' },
    { id: 'node.js', text: 'node.js' },
    { id: 'jquery', text: 'jquery' },
    { id: 'bootstrap/material design', text: 'bootstrap/material design' },
    { id: 'webpack/grunt', text: 'webpack/grunt' },
    { id: 'sass', text: 'sass' },
    { id: 'npm/yarn', text: 'npm/yarn' },
    { id: 'docker', text: 'docker' },
    { id: 'mysql/nosql', text: 'mysql/nosql' },
    { id: 'sketch', text: 'sketch' },
    { id: 'firebase', text: 'firebase' },
    { id: 'netlify', text: 'netlify' },
  ];
  useSectionObserver(skillsRef, { root: null, threshold: [0.5] });

  return (
    <div className={styles.content}>
      <CodeText>about.skills</CodeText>
      <CodeList list={skillList} />
    </div>
  );
};

export default Skills;
