import React, { useState, useEffect } from 'react';
import styles from './Popup.module.css';
import Image from 'next/image';

const Popup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 8000);

    // Check if device is mobile
    const mobileCheck = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust width condition as needed
    };

    mobileCheck(); // Initial check

    window.addEventListener('resize', mobileCheck); // Listen to resize events

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', mobileCheck); // Clean up resize listener
    };
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);

    if (!isPopupOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  };

  const handleOverlayClick = () => {
    window.location.href = 'https://www.learnbay.co/submit-info';
  };

  if (!isPopupOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={togglePopup}>
          &times;
        </button>
        <div className={styles.content}>
          {/* Ternary to conditionally render different images */}
          {isMobile ? (
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/mbl_popup.webp"
              alt="Popup Background Mobile"
              className={styles.backgroundImage}
              width={300}
              height={400}
            />
          ) : (
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/popup_img.webp"
              alt="Popup Background Desktop"
              className={styles.backgroundImage}
              width={600}
              height={600}
            />
          )}
          <button className={styles.overlayImage} onClick={handleOverlayClick}>
            Apply for Counselling
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
