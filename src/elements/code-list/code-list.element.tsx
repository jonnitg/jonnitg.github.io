import React from 'react';
import clsx from 'clsx';
import styles from './code-list.module.scss';

interface Item {
  id: string;
  element?: JSX.Element;
  text?: string;
}

interface Props {
  list: Item[];
  orientation?: 'horizontal' | 'vertical';
}

const CodeList: React.FunctionComponent<Props> = ({
  list,
  orientation = 'vertical',
}) => {
  return (
    <ul className={clsx(styles.container, styles[`container--${orientation}`])}>
      {list.map(({ id, text, element }) => (
        <li key={id} className={styles.container__item}>
          {element || text}
        </li>
      ))}
    </ul>
  );
};

export default CodeList;
