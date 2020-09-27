import React from 'react';
import clsx from 'clsx';
import styles from './code-button.module.scss';

interface Props {
  className?: string;
  onClick: () => void;
  withoutQuotes?: boolean;
}

const CodeButton: React.FunctionComponent<Props> = ({
  children,
  className = '',
  withoutQuotes = false,
  onClick = () => null,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        styles.container,
        className,
        withoutQuotes && styles['container--without-quotes']
      )}
    >
      {children}
    </button>
  );
};

export default CodeButton;
