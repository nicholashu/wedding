import React from 'react';

import Block from '../BlockContainer';
import Truck from 'assets/images/truck.png';

import styles from './styles.module.scss';

const Block3 = () => {
  return (
    <Block bg="#ff9c9c">
      <div className={styles.fourth}>
        <div className={styles.heading}>
          <h1>
            CECCHELE MOTORS
          </h1>
          <h2>29 PALMERSTON STREET</h2>
          <br/>
          <h4>21 NOVEMBER 2021 @ 4PM</h4>
        </div>
        <img className={styles.truck} src={Truck} />
      </div>
    </Block>
  );
}
export default Block3;