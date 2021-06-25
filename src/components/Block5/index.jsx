import React, { useState, useRef } from 'react';
import Loading from 'assets/images/loading.gif';
import Block from '../BlockContainer';

import styles from './styles.module.scss';

const Block5 = () => {
  const [going, setGoing] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(form.current);

    function encode(data) {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    }

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "rsvp",
        ...Object.fromEntries(formData.entries()),
      }),
    })
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <Block bg="#fbc8c8">
      <div className={styles.fifth}>
        {submitted ? (
          <h1>{going === "attending" ? "Thanks! Can't wait to see you there :)" : "Oh Shame! Catch up soon, OK?"}</h1>
        ) : (
          <form ref={form} name="rsvp" onSubmit={handleSubmit} data-netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="form-name" value="rsvp" />
          <h1>RSVP</h1>
            {loading ? (
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
                <button type="submit" disabled={loading}>
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