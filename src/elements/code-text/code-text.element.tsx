import React from 'react';
import styles from './code-text.module.scss';

interface Props {
  tab?: number;
}

const CodeText: React.FunctionComponent<Props> = ({ children, tab = 0 }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CodeText;
