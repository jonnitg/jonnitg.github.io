import React, { useContext, useEffect } from 'react';
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
        <a
          onMouseOver={() => handleOnMouseOver(route.title)}
          onFocus={() => handleOnMouseOver(route.title)}
          href={route.href}
          key={route.title}
          className={styles.stl__link}
        >
          {route.title}
          <span className={styles['stl__link__animated-box']} />
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
