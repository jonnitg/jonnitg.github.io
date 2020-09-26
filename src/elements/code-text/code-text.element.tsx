import React from 'react';
import clsx from 'clsx';
import styles from './code-text.module.scss';

interface Props {
  tab?: number;
  className?: string;
  noEnd?: boolean;
  noStart?: boolean;
}

const CodeText: React.FunctionComponent<Props> = ({
  children,
  tab = 0,
  className = '',
  noEnd = false,
  noStart = false,
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        className,
        noEnd && styles['container--no-end'],
        noStart && styles['container--no-start']
      )}
    >
      {children}
    </div>
  );
};

export default CodeText;
