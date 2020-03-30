import * as React from 'react';
import clsx from 'clsx';
import styles from './heading.module.scss';

type HeadingProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  children: React.ReactNode;
};

function Heading({ tag: Tag = 'h4', className = '', children }: HeadingProps) {
  const classes = clsx(styles.heading, className, styles[`heading--is-${Tag}`]);

  return <Tag className={classes}>{children}</Tag>;
}

export default Heading;
