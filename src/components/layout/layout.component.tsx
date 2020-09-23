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
      <div ref={setRef} className={styles.stl}>
        <Navigation />
        <main>{children}</main>
        <MouseTracker mousePosition={mousePosition} />
      </div>
    </PointerClassesProvider>
  );
};

export default Layout;
