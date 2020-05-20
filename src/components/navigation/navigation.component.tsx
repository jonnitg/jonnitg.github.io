/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';
import {
  PointerClassesContext,
  addNavClassAction,
  resetClasses,
} from '@context/pointer-classes.context';
import useMousePointer from '@hooks/useMousePointer';
import useHashLocation from '@hooks/useHashLocation';
import styles from './navigation.module.scss';

const routes = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

const Navigation = () => {
  const { dispatchClasses } = useContext(PointerClassesContext);
  const { mousePosition, setRef } = useMousePointer();
  const [hashPath, dispatch] = useHashLocation();

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
    <header className={styles.stl__header}>
      <nav ref={setRef} className={styles.stl}>
        {routes.map((route) => (
          <a
            key={route.title}
            onMouseOver={() => handleOnMouseOver(route.title)}
            onFocus={() => handleOnMouseOver(route.title)}
            onClick={dispatch}
            className={clsx(
              styles.stl__link,
              hashPath === route.href && styles['stl__link--is-active']
            )}
            href={route.href}
          >
            {route.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
