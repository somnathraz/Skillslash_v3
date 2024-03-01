import { useState } from "react";
import styles from "./WaveButton.module.css";

const ButtonWaveAnimation = ({ id }) => {
  return (
    <div className={styles.playButton} id={id}>
      <div className={styles.playIcon} id={id} />
      <div className={styles.waves} id={id} />
    </div>
  );
};

export default ButtonWaveAnimation;