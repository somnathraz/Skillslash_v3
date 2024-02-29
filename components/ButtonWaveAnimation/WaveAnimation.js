import { useState } from 'react';
import styles from './WaveButton.module.css';

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
  
    <div className={styles.playButton} onClick={handlePlayToggle}>
      <div className={`${styles.playIcon} ${isPlaying ? styles.playing : ''}`} />
      <div className={styles.waves} />
    </div>
  );
};

export default PlayButton;
