import * as React from 'react';
import clsx from 'clsx';
import styles from './heading.module.scss';

type HeadingProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  children: React.ReactNode;
};

const Heading: React.FunctionComponent<HeadingProps> = ({
  tag: Tag = 'h4',
  className = '',
  children,
}) => {
  const classes = clsx(styles.content, className, styles[`content--is-${Tag}`]);

  return <Tag className={classes}>{children}</Tag>;
};

export default Heading;
