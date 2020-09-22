/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  PointerClassesContext,
  addNavClassAction,
  resetClasses,
} from '@context/pointer-classes.context';
import useMousePointer from '@hooks/useMousePointer';
import useHashLocation from '@hooks/useHashLocation';
import CodeText from '@elements/code-text';
import CodeList from '@elements/code-list';
import CodeExpandButton from '@elements/code-expand-button';
import styles from './navigation.module.scss';

const routes = [
  {
    title: 'start',
    href: '#start',
  },
  {
    title: 'about',
    href: '#about',
  },
  {
    title: 'skills',
    href: '#skills',
  },
  {
    title: 'contact',
    href: '#contact',
  },
];

const Navigation: React.FunctionComponent = () => {
  const { dispatchClasses } = useContext(PointerClassesContext);
  const { mousePosition, setRef } = useMousePointer();
  const [hashPath, dispatch] = useHashLocation();
  const [position, setPosition] = useState(0);
  const [isShrunk, setIsShrunk] = useState(false);

  const handleOnMouseOver = (type) => {
    dispatchClasses(addNavClassAction());
  };

  const onClick = (e, indexPosition) => {
    setPosition(indexPosition);
    dispatch(e);
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
    <header>
      <nav ref={setRef} className={styles.container}>
        <CodeText>
          {`menu[${position}]:`}
          <CodeExpandButton onClick={() => setIsShrunk(!isShrunk)} />
          <CodeList
            isShrunk={isShrunk}
            list={routes.map((route, index) => ({
              id: route.title,
              className: hashPath === route.href && styles['item--is-active'],
              element: (
                <a
                  key={route.title}
                  onMouseOver={() => handleOnMouseOver(route.title)}
                  onFocus={() => handleOnMouseOver(route.title)}
                  onClick={(e) => onClick(e, index)}
                  className={styles.item}
                  href={route.href}
                >
                  {route.title}
                </a>
              ),
            }))}
          />
        </CodeText>
      </nav>
    </header>
  );
};

export default Navigation;
