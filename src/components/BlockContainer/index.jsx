import React from 'react';

import styles from './styles.module.scss';

const Block = ({ bg, children }) => {
  return (
    <div className={styles.block} style={{ backgroundColor: bg }}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Block;