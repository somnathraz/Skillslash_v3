import React from "react";
import styles from "./Newhoose.module.css";
import Image from "next/image";
const NewChoose = () => {
  return (
    <>
      <div className={styles.headus}>
        <h2> <span>Why</span> Choose Us</h2>

        <div className={styles.mainbox}>
          <div className={styles.boxes}>
            <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/Class_us.webp" width={60} height={40} alt="box" loading="lazy" />
            <p>30+ Branded Case <br/>Studies</p>
          </div>

          <div className={styles.boxes}>
            <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/Certificate_us.webp" width={60} height={40} alt="box" loading="lazy" />
            <p>10+ Branded <br/>Certificate</p>
          </div>

          <div className={styles.boxes}>
            <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/Web.webp" width={60} height={40} alt="box" loading="lazy" />
            <p>100+ tools to <br/>pratice</p>
          </div>

        </div>
        <div className={styles.maindownbox}>
          <div className={styles.boxes}>
            <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/Internship_us.webp" width={60} height={40} alt="box" loading="lazy" />
            <p>guaranteed <br/>Internship</p>
          </div>

          <div className={styles.boxes}>
            <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/Task.webp" width={60} height={40} alt="box" loading="lazy" />
            <p>100% placement <br/>assistance</p>
          </div>
          </div>
        
      </div>
    </>
  );
};

export default NewChoose;
