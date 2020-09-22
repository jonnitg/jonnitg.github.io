import React from 'react';
import clsx from 'clsx';
import styles from './code-text.module.scss';

interface Props {
  tab?: number;
  className?: string;
}

const CodeText: React.FunctionComponent<Props> = ({
  children,
  tab = 0,
  className = '',
}) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default CodeText;
