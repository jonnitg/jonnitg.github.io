/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import {
  PointerClassesContext,
  addNavClassAction,
  resetClasses,
} from '@context/pointer-classes.context';
import useMousePointer from '@hooks/useMousePointer';
import CodeText from '@elements/code-text';
import CodeList from '@elements/code-list';
import CodeExpandButton from '@elements/code-expand-button';
import styles from './navigation.module.scss';

const routes = [
  {
    title: 'start',
    href: '/',
  },
  {
    title: 'about',
    href: '/about',
  },
  {
    title: 'work',
    href: '/work',
  },
  {
    title: 'contact',
    href: '/contact',
  },
];

const Navigation: React.FunctionComponent = () => {
  const router = useRouter();
  const { dispatchClasses } = useContext(PointerClassesContext);
  const { mousePosition, setRef } = useMousePointer();
  const [position, setPosition] = useState(0);
  const [isShrunk, setIsShrunk] = useState(false);

  const handleOnMouseOver = (type) => {
    dispatchClasses(addNavClassAction());
  };

  useLayoutEffect(() => {
    setPosition(
      routes.findIndex((route) => router.pathname === route.href || 0)
    );
  }, [router.pathname]);

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
          <CodeExpandButton
            isShrunk={isShrunk}
            onClick={() => setIsShrunk(!isShrunk)}
          />
          <CodeList
            className={styles.list}
            isShrunk={isShrunk}
            list={routes.map((route, index) => ({
              id: route.title,
              className: clsx(
                styles.item,
                router.pathname === route.href && styles['item--is-active']
              ),
              element: (
                <Link key={route.title} href={route.href}>
                  <a>{route.title}</a>
                </Link>
              ),
            }))}
          />
        </CodeText>
      </nav>
    </header>
  );
};

export default Navigation;
