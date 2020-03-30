/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import clsx from 'clsx';
import styles from './input.module.scss';

const Input = ({
  id = '',
  type = 'text',
  name = null,
  label = null,
  helperText = null,
  isTextarea = false,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const classes = clsx(
    styles.stl,
    isTextarea && styles['stl--is-textarea'],
    className
  );
  const containerClasses = clsx(styles.stl__container, containerClassName);
  return (
    <div className={containerClasses}>
      <label htmlFor={`input_${id}`}>
        {label && <span className={styles.stl__label}>{label}</span>}
        {isTextarea ? (
          <textarea
            className={classes}
            id={`textarea_${id}`}
            name={name || id}
            {...props}
          />
        ) : (
          <input
            className={classes}
            id={`input_${id}`}
            type={type}
            name={name || id}
            {...props}
          />
        )}
        {helperText && <span className={styles.stl__helper}>{helperText}</span>}
      </label>
    </div>
  );
};

export default Input;
