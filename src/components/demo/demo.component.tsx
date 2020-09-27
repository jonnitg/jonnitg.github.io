import React, { useState } from 'react';
import clsx from 'clsx';
import CodeText from '@elements/code-text';
import CodeList from '@elements/code-list';
import CodeButton from '@elements/code-button';
import styles from './demo.module.scss';

interface Props {
  open: boolean;
  projectId: number;
  closeDemo: () => void;
}

const Demo: React.FunctionComponent<Props> = ({
  projectId,
  open = false,
  closeDemo,
}) => {
  const [currentView, setCurrentView] = useState('desktop');

  return (
    <section
      className={clsx(styles.container, open && styles['container--is-open'])}
    >
      <div
        role="presentation"
        onClick={closeDemo}
        className={styles.container__backdrop}
      />
      <div className={styles.container__view}>
        <img src="" alt="" />
        <div className={styles.container__view__buttons}>
          <CodeText>
            device:
            <CodeList
              orientation="horizontal"
              list={['desktop', 'tablet', 'mobile'].map((device) => ({
                id: device,
                element: (
                  <CodeButton
                    key={device}
                    withoutQuotes
                    onClick={() => setCurrentView(device)}
                  >
                    {device}
                  </CodeButton>
                ),
              }))}
            />
          </CodeText>
        </div>
      </div>
    </section>
  );
};

export default Demo;
