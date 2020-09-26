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
        const element = value as React.ReactElement;
        const props = {
          className: clsx(
            element.props.className,
            styles['item__value--is-text']
          ),
        };

        return React.cloneElement<{ className?: string }>(element, props);
      }
      return value;
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
