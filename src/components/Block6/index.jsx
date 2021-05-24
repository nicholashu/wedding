import React from 'react';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';
import UseIsInViewPort from 'use-is-in-viewport';
import Block from '../BlockContainer';

import styles from './styles.module.scss';

const Block6 = () => {
  const { width, height } = useWindowSize();
  const [isInViewport, blockRef] = UseIsInViewPort({ threshold: 0 });

  return (
    <Block bg="#caeaca" bubbleRef={blockRef}>
      <div className={styles.third}>
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
            Details
          </h1>
          <h3>Placeholder text</h3>
        </div>
      </div>
    </Block>
  );
}
export default Block6;