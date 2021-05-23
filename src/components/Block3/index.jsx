import React from 'react';

import Block from '../BlockContainer';

import styles from './styles.module.scss';

const Block3 = () => {
  return (
    <Block bg="#caeaca">
      <div className={styles.third}>
        <div className={styles.heading}>
          <h1>
            CELEBRATE WITH US
          </h1>
        </div>
      </div>
    </Block>
  );
}
export default Block3;