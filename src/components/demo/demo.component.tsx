import React, { useRef } from 'react';
import useSectionObserver from '@hooks/useSectionObserver';
import CodeText from '@elements/code-text';
import CodeList from '@elements/code-list';
import styles from './about-section.module.scss';

interface Props {
  projectId: number;
}

const Demo: React.FunctionComponent<Props> = ({ projectId }) => {
  const demoRef = useRef(null);
  useSectionObserver(demoRef, { root: null, threshold: [0.5] });

  return (
    <section ref={demoRef} id="demo" className="section">
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
