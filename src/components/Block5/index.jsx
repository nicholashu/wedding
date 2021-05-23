import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import Block from '../BlockContainer';

import styles from './styles.module.scss';

const Block5 = () => {
  const [state, handleSubmit] = useForm("xoqyegjo");
  const [going, setGoing] = useState();

  return (
    <Block bg="#fbc8c8">
      <div className={styles.fifth}>
        {state.succeeded ? (
          <h1>{going ? "Thanks! Can't wait to see you there :)" : "Oh Shame! Catch up soon, OK?"}</h1>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1>RSVP</h1>
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
            <label htmlFor="attenting">
              Attending
            </label>
            <input
              id="attending"
              type="checkbox" 
              name="attending"
              onChange={(e) => setGoing(e.target.checked)}
              defaultChecked={true}
            />
            <label htmlFor="attenting">
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
          </form>
        )}
      </div>
    </Block>
  );
}
export default Block5;