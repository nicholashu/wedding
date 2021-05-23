import React, { useState, useRef } from 'react';
import WinnieImage from 'assets/images/winnie-click.png';
import Audio from 'assets/images/Pérez Prado - Patricia.mp3';

import styles from './styles.module.scss';

const Winnie  = () => {
  const audio = useRef(null);
  const [playAudio, setPlayAudio] = useState(false);

  const toggleAudio = () => {
    if (!playAudio) {
      audio.current.play()
    } else {
      audio.current.pause()
    }
    setPlayAudio(!playAudio);
  }

  return (
    <>
      <audio ref={audio} src={Audio}></audio>
      <button className={styles.winnie} onClick={toggleAudio}>
        {playAudio && <span className={styles.meow}>MEOW!</span>}
        <img src={WinnieImage} />
      </button> 
    </>
  )
}

export default Winnie;