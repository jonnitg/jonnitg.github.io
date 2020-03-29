import React from 'react';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.stl}>
      <a className={styles.stl__link} href="/">
        About
        <span className={styles['stl__link__animated-box']} />
      </a>
      <a className={styles.stl__link} href="/">
        Skills
        <span className={styles['stl__link__animated-box']} />
      </a>
      <a className={styles.stl__link} href="/">
        Portfolio
        <span className={styles['stl__link__animated-box']} />
      </a>
      <a className={styles.stl__link} href="/">
        Contact
        <span className={styles['stl__link__animated-box']} />
      </a>
    </nav>
  );
};

export default Navigation;
