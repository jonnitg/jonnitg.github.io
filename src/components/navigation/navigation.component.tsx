/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  PointerClassesContext,
  addNavClassAction,
  resetClasses,
} from '@context/pointer-classes.context';
import useMousePointer from '@hooks/useMousePointer';
import styles from './navigation.module.scss';

const routes = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Skills',
    href: '/skills',
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const Navigation = () => {
  const { pathname } = useRouter();
  const { dispatchClasses } = useContext(PointerClassesContext);
  const { mousePosition, setRef } = useMousePointer();

  const handleOnMouseOver = (type) => {
    const customClass = `pointer__cursor--on-${type.toLowerCase()}-page`;
    dispatchClasses(
      addNavClassAction({
        [customClass]: true,
      })
    );
  };

  useEffect(() => {
    if (!mousePosition.isOver) {
      dispatchClasses(resetClasses());
    }
    return () => {
      dispatchClasses(resetClasses());
    };
  }, [mousePosition.isOver]);

  return (
    <nav ref={setRef} className={styles.stl}>
      {routes.map((route) => (
        <Link key={route.title} href={route.href}>
          <a
            onMouseOver={() => handleOnMouseOver(route.title)}
            onFocus={() => handleOnMouseOver(route.title)}
            className={clsx(
              styles.stl__link,
              pathname === route.href && styles['stl__link--is-active']
            )}
          >
            {route.title}
            <span className={styles['stl__link__animated-box']} />
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
