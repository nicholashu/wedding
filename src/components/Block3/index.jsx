import React from 'react';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';
import UseIsInViewPort from 'use-is-in-viewport';
import Block from '../BlockContainer';
import styles from './styles.module.scss';

const Block3 = () => {
  const { width, height } = useWindowSize();
  const [isInViewport, blockRef] = UseIsInViewPort({ threshold: 0 });

  return (
    <div className={styles.thirdContainer}>
    {isInViewport && (
      <Confetti
        width={width}
        height={height}
        colors={['#fbc8c8', '#fff', '#ca2026']}
      />
    )}
    <Block bg="#caeaca">
      <div className={styles.third} ref={blockRef}>
        <div className={styles.heading}>
          <h1>
            ARE GETTING MARRIED!
          </h1>
        </div>
      </div>
    </Block>
    </div>
  );
}
export default Block3;