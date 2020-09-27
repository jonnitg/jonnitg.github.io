import React from 'react';
import clsx from 'clsx';
import styles from './code-array-input.module.scss';

interface Props {
  className?: string;
  onChange: (event: any) => void;
  value?: number;
  min: number;
  max: number;
}

const CodeArrayInput: React.FunctionComponent<Props> = ({
  className = '',
  value = 0,
  onChange,
  max,
  min,
}) => {
  return (
    <input
      className={clsx(styles.container, className)}
      value={value}
      onChange={onChange}
      type="number"
      max={max}
      min={min}
    />
  );
};

export default CodeArrayInput;
