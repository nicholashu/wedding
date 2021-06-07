import React from 'react';

import Winnie from 'components/Winnie';
import Block from '../BlockContainer';
import ProfileImage from 'assets/images/sunglasses.gif';
import Hearts from 'assets/images/hearts.png';

import styles from './styles.module.scss';

const Block1 = () => {
  return (
    <Block bg="#fbe3e4">
      <div className={styles.first}>
        <div className={styles.heading}>
          <h1>
            BRITTANY FREEMAN
          </h1>
          <div className={styles.frame}>
            <img src={ProfileImage} alt="nick + britt"/>
          </div>
          <h1>NICHOLAS HU</h1>
        </div>
        <img className={styles.hearts} src={Hearts} alt="heart"/>
        <Winnie />
      </div>
    </Block>
  );
}
export default Block1;