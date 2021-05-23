import React from 'react';

import styles from './styles.module.scss';

const Block = ({ bg, bubbleRef, children }) => {
  return (
    <div ref={bubbleRef} className={styles.block} style={{ backgroundColor: bg }}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Block;