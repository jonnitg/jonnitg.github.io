import React from 'react';
import clsx from 'clsx';
import styles from './code-list.module.scss';

interface Item {
  id: string;
  element?: JSX.Element;
  text?: string;
  className?: string;
}

interface Props {
  isShrunk?: boolean;
  list: Item[];
  orientation?: 'horizontal' | 'vertical';
}

const CodeList: React.FunctionComponent<Props> = ({
  isShrunk = false,
  list,
  orientation = 'vertical',
}) => {
  return (
    <ul
      className={clsx(
        styles.container,
        styles[`container--${orientation}`],
        isShrunk && styles['container--is-shrunk']
      )}
    >
      {isShrunk ? (
        <li>...</li>
      ) : (
        list.map(({ id, text, element, className = '' }) => (
          <li key={id} className={clsx(className, styles.container__item)}>
            {element || text}
          </li>
        ))
      )}
    </ul>
  );
};

export default CodeList;
