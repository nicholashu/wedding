import React from 'react';
import Block from '../BlockContainer';

import styles from './styles.module.scss';

const Block6 = () => {
  return (
    <Block bg="#239da2">
      <div className={styles.faqs}>
        <div className={styles.heading}>
          <h1>
            FAQ's
          </h1>
            <br/>
            <h3>
              Is this our wedding?
            </h3>
            <h4>
              No. This is an opportunity to celebrate our marriage with our extended family and friends as we will be having an intimate ceremony at a different date
            </h4>
            <h3>
              What should I wear?
            </h3>
            <h4>
              Cocktail – keep in mind practicality if you wish to boogie 
            </h4>
            <h3>
              Is there going to be food?
            </h3>
            <h4>
              Food will be provided – please let us know if you have any dietary requirements
            </h4>
            <h3>
              Will there be drinks?
            </h3>
            <h4>
              Some drinks will be provided however you are welcome to bring your own
            </h4>
            <h3>
              Can I park my car?
            </h3>
            <h4>
              There will be limited street parking – Northbridge on a Saturday night. If possible, please uber
            </h4>
            <h3>
              What about gifts?
            </h3>
            <h4>
              Your presence is the greatest gift of all!
            </h4>
        </div>
      </div>
    </Block>
  );
}
export default Block6;