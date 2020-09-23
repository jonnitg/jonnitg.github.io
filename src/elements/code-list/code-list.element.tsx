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
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const CodeList: React.FunctionComponent<Props> = ({
  isShrunk = false,
  list,
  orientation = 'vertical',
  className = '',
}) => {
  return (
    <ul
      className={clsx(
        isShrunk && styles['container--is-shrunk'],
        className,
        styles.container,
        styles[`container--${orientation}`]
      )}
    >
      {isShrunk ? (
        <li style={{ display: 'inline-flex' }}>...</li>
      ) : (
        list.map(({ id, text, element, className: itemClassName = '' }) => (
          <li key={id} className={clsx(itemClassName, styles.container__item)}>
            {element || text}
          </li>
        ))
      )}
    </ul>
  );
};

export default CodeList;
