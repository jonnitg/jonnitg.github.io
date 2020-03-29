import React from 'react';
import Link from 'next/link';
import styles from './navigation.module.scss';

const routes = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/',
  },
  {
    title: 'Skills',
    href: '/',
  },
  {
    title: 'Portfolio',
    href: '/',
  },
  {
    title: 'Contact',
    href: '/',
  },
];

const Navigation = () => {
  return (
    <nav className={styles.stl}>
      {routes.map((route) => (
        <a href={route.href} key={route.title} className={styles.stl__link}>
          {route.title}
          <span className={styles['stl__link__animated-box']} />
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
