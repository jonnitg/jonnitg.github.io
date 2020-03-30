import React from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

const Button = ({ children, submit = false, className = '' }) => {
  const classes = clsx(styles.stl, className);
  if (submit) {
    return (
      <button className={classes} type="submit">
        {children}
      </button>
    );
  }
  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
};

export default Button;
