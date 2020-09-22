import React from 'react';
import clsx from 'clsx';
import styles from './code-expand-button.module.scss';

interface Props {
  onClick: () => void;
}

const CodeExpandButton: React.FunctionComponent<Props> = ({ onClick }) => {
  return (
    <button
      type="button"
      className={clsx(styles.btn, styles['btn--is-expanded'])}
      onClick={onClick}
    >
      &rsaquo;
    </button>
  );
};

export default CodeExpandButton;
