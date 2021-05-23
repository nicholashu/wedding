import React from 'react';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';
import UseIsInViewPort from 'use-is-in-viewport';
import Block from '../BlockContainer';

import styles from './styles.module.scss';

const Block3 = () => {
  const { width, height } = useWindowSize();
  const [isInViewport, blockRef] = UseIsInViewPort({ threshold: 50 });

  return (
    <Block bg="#caeaca">
      <div className={styles.third} ref={blockRef}>
        {isInViewport && (
          <>
          <Confetti
            width={width}
            height={height}
            colors={['#fbc8c8', '#fff', '#ca2026']}
          />
          </>
        )}
        <div className={styles.heading}>
          <h1>
            CELEBRATE WITH US!
          </h1>
          <h3>*wedding not included</h3>
        </div>
      </div>
    </Block>
  );
}
export default Block3;