import React from 'react';
import UseIsInViewPort from 'use-is-in-viewport';

import Block from '../BlockContainer';
import Truck from 'assets/images/truck.png';

import styles from './styles.module.scss';

const Block3 = () => {
  const [isInViewport, blockRef] = UseIsInViewPort({ threshold: 20 });

  return (
    <Block bg="#ff9c9c">
      <div className={styles.fourth} ref={blockRef}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h1>
              CECCHELE MOTORS
              <span>
                <br className={styles.mobileBreak} />
                &nbsp;CARPARK
              </span>
            </h1>
            <h2>29 PALMERSTON STREET</h2>
            <br/>
            <h4>21 NOVEMBER 2021 @ 6PM</h4>
            <a 
              href="https://www.google.com/maps/@-31.9440427,115.8563222,3a,75y,35.1h,94.75t/data=!3m6!1e1!3m4!1saYyNgyWUQm79Szd2mx3Xjw!2e0!7i16384!8i8192"
              target="_blank"
            >
              VIEW MAP
            </a>
          </div>
          <img className={styles.truck} src={Truck} data-visible={isInViewport} alt="truck"/>
        </div>
      </div>
    </Block>
  );
}
export default Block3;