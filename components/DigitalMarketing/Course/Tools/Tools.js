import React from 'react';
import Image from 'next/image';
import styles from './Tools.module.css'; // Import the CSS module

const Tools = () => {
  return (
    <>
      <div className={styles.toolsdiv}>
        <h2><span>Tools</span> Covered</h2>
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/tools_DM.webp"
          alt='Tools All'
          width={1000}
          height={300}
          loading='lazy'
          className={styles.toolsImage}
        />
        <div className={styles.andMore}>
          <p>and more</p>
        </div>
      </div>
    </>
  );
}

export default Tools;
