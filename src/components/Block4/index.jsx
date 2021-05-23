import React from 'react';
import UseIsInViewPort from 'use-is-in-viewport';

import Block from '../BlockContainer';
import Truck from 'assets/images/truck.png';

import styles from './styles.module.scss';

const Block3 = () => {
  const [isInViewport, blockRef] = UseIsInViewPort({ threshold: 50 });

  return (
    <Block bg="#ff9c9c">
      <div className={styles.fourth} ref={blockRef}>
        <div className={styles.heading}>
          <h1>
            CECCHELE MOTORS
            <span>&nbsp;CARPARK</span>
          </h1>
          <h2>29 PALMERSTON STREET</h2>
          <br/>
          <h4>21 NOVEMBER 2021 @ 4PM</h4>
        </div>
        <img className={styles.truck} src={Truck} data-visible={isInViewport}/>
      </div>
    </Block>
  );
}
export default Block3;