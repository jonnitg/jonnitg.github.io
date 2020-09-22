import React from 'react';
import { PointerClassesProvider } from '@context/pointer-classes.context';
import useMousePointer from '@hooks/useMousePointer';
import MouseTracker from '@elements/mouse-tracker';
import Navigation from '@components/navigation';
import styles from './layout.module.scss';

const Layout: React.FunctionComponent = ({ children }) => {
  const { setRef, mousePosition } = useMousePointer();

  return (
    <PointerClassesProvider>
      <main ref={setRef} className={styles.stl}>
        {children}
        <Navigation />
        <MouseTracker mousePosition={mousePosition} />
      </main>
    </PointerClassesProvider>
  );
};

export default Layout;
