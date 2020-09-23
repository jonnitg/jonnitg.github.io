import React from 'react';
import styles from './code-heading.module.scss';

const CodeHeading: React.FunctionComponent = ({ children }) => {
  return <span className={styles.text}>{children}</span>;
};

export default CodeHeading;
