import * as React from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './heading.module.scss';

type HeadingProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  children: React.ReactNode;
} & React.ClassAttributes<React.Ref<HTMLElement>>;

function Heading(
  {
    tag: Tag = 'h4',

    className = '',
    children,
  }: HeadingProps,
  ref
) {
  const classes = clsx(styles.heading, className, styles[`heading--is-${Tag}`]);

  return (
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}

export default forwardRef(Heading);
