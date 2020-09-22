import React, { useRef } from 'react';
import CodeText from '@elements/code-text';
import styles from './description.module.scss';

const Description: React.FunctionComponent = () => {
  return (
    <div id="about">
      <CodeText>about.description</CodeText>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam vel,
        vitae quisquam possimus quae facilis impedit dolores, nisi accusamus
        aperiam expedita voluptates consequuntur at explicabo praesentium,
        dignissimos earum officia quidem?
      </p>
    </div>
  );
};

export default Description;
