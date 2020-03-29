import React, { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  PointerClassesContext,
  addLinkClassAction,
  resetClasses,
} from '@context/pointer-classes.context';
import useMousePointer from '@hooks/useMousePointer';
import styles from './social-media.module.scss';

type Props = {
  className?: string;
};

const SocialMedia = ({ className = '' }: Props) => {
  const [showLink, setShowLink] = useState('');
  const { dispatchClasses } = useContext(PointerClassesContext);

  const { mousePosition, setRef } = useMousePointer();

  const handleOnMouseOver = (type) => {
    if (type === 'twitter') {
      setShowLink('https://twitter.com/jonnitg');
    }
    if (type === 'facebook') {
      setShowLink('https://facebook.com/jonnitg');
    }
    if (type === 'github') {
      setShowLink('https://github.com/jonnitg');
    }
  };

  useEffect(() => {
    if (mousePosition.isOver) {
      dispatchClasses(addLinkClassAction());
    } else {
      setShowLink('');
    }
    return () => {
      dispatchClasses(resetClasses());
    };
  }, [mousePosition.isOver]);

  const classes = clsx(styles.stl, className);

  return (
    <div ref={setRef} className={classes}>
      <a
        onMouseOver={() => handleOnMouseOver('twitter')}
        onFocus={() => handleOnMouseOver('twitter')}
        className={styles.stl__link}
        href="https://twitter.com/jonnitg"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter
      </a>
      <a
        onMouseOver={() => handleOnMouseOver('facebook')}
        onFocus={() => handleOnMouseOver('facebook')}
        className={styles.stl__link}
        href="https://www.facebook.com/jonnitg"
        target="_blank"
        rel="noopener noreferrer"
      >
        facebook
      </a>
      <a
        onMouseOver={() => handleOnMouseOver('github')}
        onFocus={() => handleOnMouseOver('github')}
        className={styles.stl__link}
        href="https://github.com/jonnitg"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
      {showLink && (
        <a className={styles.stl__absolute_link} href={showLink}>
          {showLink}
        </a>
      )}
    </div>
  );
};

export default SocialMedia;
