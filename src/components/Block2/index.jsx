import React from 'react';

import Block from '../BlockContainer';

import styles from './styles.module.scss';

const Block2 = () => {
  return (
    <Block bg="transparent">
      <div className={styles.bg}/>
      <div className={styles.second}>
        <div className={styles.heading}>
          <div className={styles.offsetBox}>
            <h1>
              CELEBRATE WITH US!
            </h1>
          </div>
        </div>
      </div>
    </Block>
  );
}
export default Block2;