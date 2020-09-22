import React from 'react';
import clsx from 'clsx';
import styles from './code-expand-button.module.scss';

interface Props {
  isShrunk: boolean;
  onClick: () => void;
}

const CodeExpandButton: React.FunctionComponent<Props> = ({
  onClick,
  isShrunk = false,
}) => {
  return (
    <button
      type="button"
      className={clsx(styles.btn, isShrunk && styles['btn--is-expanded'])}
      onClick={onClick}
    >
      &rsaquo;
    </button>
  );
};

export default CodeExpandButton;
