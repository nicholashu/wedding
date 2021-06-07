import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Loading from 'assets/images/loading.gif';
import Block from '../BlockContainer';

import styles from './styles.module.scss';

const Block5 = () => {
  const [state, handleSubmit] = useForm("xoqyegjo");
  const [going, setGoing] = useState();

  return (
    <Block bg="#fbc8c8">
      <div className={styles.fifth}>
        {state.succeeded ? (
          <h1>{going === "attending" ? "Thanks! Can't wait to see you there :)" : "Oh Shame! Catch up soon, OK?"}</h1>
        ) : (
          <form onSubmit={handleSubmit}>
          <h1>RSVP</h1>
            {state.submitting ? (
              <div className={styles.loading}>
                <img src={Loading} alt="loading" />
              </div>
            ): (
              <>
                <label htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text" 
                  name="name"
                />
                <label htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email" 
                  name="email"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                <div className={styles.checks}>
                  <label htmlFor="attenting">
                    Attending
                    <input
                      id="attending"
                      type="radio" 
                      name="attending"
                      value="attending"
                      onClick={(e) => setGoing(e.target.value)}
                    />
                  </label>
                  <label htmlFor="attenting">
                    Not Attending
                    <input
                      id="notattending"
                      type="radio" 
                      name="attending"
                      value="notattending"
                      onSelect={(e) => setGoing(e.target.value)}
                    />
                  </label>
                </div>
                <label htmlFor="message">
                  Notes:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={`What song do you want to hear?\nIs there anything else we need to know?`}
                  row={4}
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </>
           )}
          </form>
        )}
      </div>
    </Block>
  );
}
export default Block5;