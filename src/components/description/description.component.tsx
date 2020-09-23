import React, { useRef } from 'react';
import CodeText from '@elements/code-text';
import styles from './description.module.scss';

const Description: React.FunctionComponent = () => {
  return (
    <div className={styles.content}>
      <CodeText className={styles['content__code-text']}>
        about.description
      </CodeText>
      <p className={styles.content__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula
        quam, lacinia nec efficitur in, ultrices sit amet sem. Duis nec vehicula
        arcu. Nam euismod ipsum ac est tempus, non feugiat lectus scelerisque.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed at dui ut velit fermentum volutpat nec quis
        nisl. Fusce non leo semper, euismod risus et, tempor justo. Praesent
        auctor, nunc non posuere aliquet, eros nunc aliquam nunc, sit amet
        congue eros augue at magna.
      </p>
    </div>
  );
};

export default Description;
