import React, { useRef } from 'react';
import useSectionObserver from '@hooks/useSectionObserver';
import CodeText from '@elements/code-text';
import CodeList from '@elements/code-list';
import styles from './demo.module.scss';

interface Props {
  open: boolean;
  projectId: number;
}

const Demo: React.FunctionComponent<Props> = ({ projectId, open = false }) => {
  return (
    <section className={styles.container}>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <CodeText>
          device:
          <CodeList
            list={[
              {
                id: 'desktop',
                element: <button type="button">desktop</button>,
              },
              { id: 'tablet', element: <button type="button">tablet</button> },
              { id: 'mobile', element: <button type="button">mobile</button> },
            ]}
          />
        </CodeText>
      </div>
      <div>shadow</div>
    </section>
  );
};

export default Demo;
