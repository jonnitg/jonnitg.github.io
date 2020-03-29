import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { PointerClassesContext } from '@context/pointer-classes.context';
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
  const [typeClass, setTypeClass] = useState('');
  const { classes: pointerClasses, setClasses: setPointerClasses } = useContext(
    PointerClassesContext
  );
  const { mousePosition, setRef } = useMousePointer();

  const handleOnMouseOver = (type) => {
    setPointerClasses({
      ...pointerClasses,
      'pointer__cursor--is-on-nav': true,
      [`pointer__cursor--type-${type.toLowerCase()}`]: true,
    });
    setTypeClass(`pointer__cursor--type-${type.toLowerCase()}`);
  };

  useEffect(() => {
    if (!mousePosition.isOver) {
      setPointerClasses({
        ...pointerClasses,
        'pointer__cursor--is-on-nav': false,
        [typeClass]: false,
      });
    }
    return () => {
      setPointerClasses({
        ...pointerClasses,
        'pointer__cursor--is-on-nav': false,
        [typeClass]: false,
      });
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
