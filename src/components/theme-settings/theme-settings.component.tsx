import React, { useState, useEffect, useContext } from 'react';
import { TwitterPicker } from 'react-color';
import {
  PointerClassesContext,
  addLinkClassAction,
  resetClasses,
} from '@context/pointer-classes.context';
import styles from './theme-settings.module.scss';

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#607d8b',
];

const ThemeSettings = () => {
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [showTextPicker, setShowTextPicker] = useState(false);

  const { dispatchClasses } = useContext(PointerClassesContext);

  const handleChangeComplete = (color, type) => {
    if (type === 'theme') {
      document.documentElement.style.setProperty(
        '--main-theme-color',
        color.hex
      );
      window.localStorage.setItem('themeColor', color.hex);
    }
    if (type === 'text') {
      document.documentElement.style.setProperty(
        '--main-text-color',
        color.hex
      );
      window.localStorage.setItem('textColor', color.hex);
    }
  };

  const toggleOptions = (type) => {
    if (type === 'theme') {
      setShowThemePicker(!showThemePicker);
      setShowTextPicker(false);
    }
    if (type === 'text') {
      setShowThemePicker(false);
      setShowTextPicker(!showTextPicker);
    }
  };

  const addPointerClass = () => {
    dispatchClasses(addLinkClassAction());
  };

  const removePointerClass = () => {
    dispatchClasses(resetClasses());
  };

  useEffect(() => {
    const { localStorage } = window;
    const currentThemeColor = localStorage.getItem('themeColor');
    const currentTextColor = localStorage.getItem('themeColor');

    if (currentThemeColor) {
      document.documentElement.style.setProperty(
        '--main-theme-color',
        currentThemeColor || '#ffffff'
      );
    }

    if (currentTextColor) {
      document.documentElement.style.setProperty(
        '--main-theme-color',
        currentTextColor || '#000000'
      );
    }
  }, []);

  return (
    <div className={styles['theme-settings']}>
      <div>
        <button
          type="button"
          onMouseOver={addPointerClass}
          onFocus={addPointerClass}
          onMouseOut={removePointerClass}
          onBlur={removePointerClass}
          className={styles['theme-settings__button']}
          onClick={() => toggleOptions('theme')}
        >
          Theme Color
        </button>
        {showThemePicker && (
          <TwitterPicker
            className={styles['theme-settings__picker']}
            colors={colors}
            width={315}
            onChangeComplete={(color) => handleChangeComplete(color, 'theme')}
          />
        )}
      </div>

      <div>
        <button
          type="button"
          onMouseOver={addPointerClass}
          onFocus={addPointerClass}
          onMouseOut={removePointerClass}
          onBlur={removePointerClass}
          className={styles['theme-settings__button']}
          onClick={() => toggleOptions('text')}
        >
          Text Color
        </button>

        {showTextPicker && (
          <TwitterPicker
            className={styles['theme-settings__picker']}
            colors={colors}
            width={315}
            onChangeComplete={(color) => handleChangeComplete(color, 'text')}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeSettings;