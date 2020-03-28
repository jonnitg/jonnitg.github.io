import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@elements/heading';
import useMousePointer from '@hooks/useMousePointer';
import { PointerClassesContext } from '@context/pointer-classes.context';
import SocialMedia from '@components/social-media';
import styles from './main-section.module.scss';

const MainSection = () => {
  const { classes: pointerClasses, setClasses } = useContext(
    PointerClassesContext
  );
  const { mousePosition, setRef } = useMousePointer();

  useEffect(() => {
    if (mousePosition.isOver) {
      setClasses({ ...pointerClasses, 'pointer__cursor--is-on-title': true });
    }
    return () => {
      setClasses({ ...pointerClasses, 'pointer__cursor--is-on-title': false });
    };
  }, [mousePosition.isOver]);

  const classes = clsx(styles.stl__heading);
  return (
    <div className={styles.stl}>
      <Heading ref={setRef} className={classes} tag="h1">
        Jonatán Isaac
        <br />
        Treviño Galindo
      </Heading>
      <SocialMedia />
    </div>
  );
};

export default MainSection;
