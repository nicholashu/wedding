import React from 'react';

import Block from '../BlockContainer';

import styles from './styles.module.scss';

const Block2 = () => {
  return (
    <Block bg="#ff7075">
      <div className={styles.second}>
        <div className={styles.heading}>
          <div className={styles.offsetBox}>
            <h1>
              ARE GETTING MARRIED!
            </h1>
          </div>
        </div>
      </div>
    </Block>
  );
}
export default Block2;