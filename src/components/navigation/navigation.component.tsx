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
    <header>
      <nav ref={setRef} className={styles.container}>
        <CodeText>
          menu:
          <CodeExpandButton onClick={() => null} />
          <CodeList
            list={routes.map((route) => ({
              id: route.title,
              element: (
                <a
                  key={route.title}
                  onMouseOver={() => handleOnMouseOver(route.title)}
                  onFocus={() => handleOnMouseOver(route.title)}
                  onClick={dispatch}
                  className={clsx(hashPath === route.href && 'link active')}
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
