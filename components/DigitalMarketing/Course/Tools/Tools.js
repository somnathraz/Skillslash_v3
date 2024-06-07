import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Tools.module.css'; // Import the CSS module

const Tools = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundImage = isMobile
    ? 'url("https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/tools_DM_mbl.webp")'
    : 'url("/desktop-background-image.webp")';

  return (
    <div className={styles.toolsdiv} style={{ backgroundImage }}>
      <h2><span>Tools</span> Covered</h2>
      <Image
        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/tools_DM.webp"
        alt="Tools All"
        width={1000}
        height={300}
        loading="lazy"
        className={styles.toolsImage}
      />
      <div className={styles.andMore}>
        <p>and more</p>
      </div>
    </div>
  );
}

export default Tools;
