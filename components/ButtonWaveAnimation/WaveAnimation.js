import { useState } from 'react';
import styles from './WaveButton.module.css';

const PlayButton = () => {
  

  return (
  
    <div className={styles.playButton}>
      <div className={styles.playIcon}  />
      <div className={styles.waves} />
    </div>
  );
};

export default PlayButton;
