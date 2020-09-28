import CodeList from '@elements/code-list';
import clsx from 'clsx';
import React from 'react';
import styles from './code-object.module.scss';

type Props = {
  tab?: number;
  json: unknown;
  className?: string;
  id?: string;
};

const CodeObject: React.FunctionComponent<Props> = ({
  json,
  tab = 0,
  className = '',
  id = '',
}) => {
  function renderObjectValue(value): React.ReactNode {
    if (Array.isArray(value)) {
      return (
        <CodeList
          className={styles['item__value--is-list']}
          list={value}
          orientation="horizontal"
        />
      );
    }

    if (React.isValidElement(value)) {
      if (value.type === 'img') {
        const props = {
          className: styles['item__value--is-image'],
        };

        return React.cloneElement<{ className?: string }>(value, props);
      }

      if (value.type === 'button') {
        return React.cloneElement(value);
      }

      const props = {
        className: clsx(styles['item__value--is-inline-flex']),
      };

      return React.cloneElement<{ className?: string }>(value, props);
    }

    return <span className={styles['item__value--is-text']}>{value}</span>;
  }

  return (
    <div id={id} className={clsx(className, styles.container)}>
      {Object.entries(json).map(([key, value]) => (
        <div className={styles.item} key={key}>
          {`${key}: `}
          {renderObjectValue(value)}
        </div>
      ))}
    </div>
  );
};

export default CodeObject;
