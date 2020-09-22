import React from 'react';
import CodeText from '@elements/code-text';
import CodeHeading from '@elements/code-heading';
import CodeList from '@elements/code-list';
import CodeObject from '@elements/code-object';
import Demo from '@components/demo';
import styles from './work-section.module.scss';

const WorkSection: React.FunctionComponent = () => {
  return (
    <section>
      <CodeText>
        current_page:<CodeHeading>work</CodeHeading> demo: true
      </CodeText>

      <div>
        <CodeText>
          project[0]:
          <CodeObject
            tab={1}
            json={{
              title: 'Lorem Ipsum',
              stack: (
                <CodeList
                  list={[
                    { id: 'ReactJs', text: 'ReactJs' },
                    { id: 'GatsbyJs', text: 'GatsbyJs' },
                  ]}
                  orientation="horizontal"
                />
              ),
              demo: '/project-title',
              thumbnail: <img src="" alt="" />,
            }}
          />
        </CodeText>
      </div>

      <Demo projectId={1} />
    </section>
  );
};

export default WorkSection;
