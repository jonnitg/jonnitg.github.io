import React from 'react';
import { PointerClassesProvider } from '@context/pointer-classes.context';
import useMousePointer from '@hooks/useMousePointer';
import MouseTracker from '@elements/mouse-tracker';
import ThemeSettings from '@components/theme-settings';
import Navigation from '@components/navigation';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  const { setRef, mousePosition } = useMousePointer();

  return (
    <PointerClassesProvider>
      <main ref={setRef} className={styles.stl}>
        <ThemeSettings />
        {children}
        <MouseTracker mousePosition={mousePosition} />
        <Navigation />
      </main>
    </PointerClassesProvider>
  );
};

export default Layout;
