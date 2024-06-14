import React from "react";
import styles from "./Newhoose.module.css";
import Image from "next/image";

const boxesData = [
  {
    src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/four_dm.webp",
    alt: "box",
    description: "Own Digital Marketing Agency",
  },
  {
    src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/three_dm.webp",
    alt: "box",
    description: "Dedicated Learning Coordinator",
  },
  {
    src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/two_dm.webp",
    alt: "box",
    description: "Daily 1:1 Doubt clearing sessions",
  },
  {
    src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/one_dm.webp",
    alt: "box",
    description: "Strong Alumni & recruiter network",
  },
];

const NewChoose = () => {
  return (
    <>
      <div className={styles.headus}>
        <h2>
          {" "}
          <span>Why</span> Choose Us
        </h2>

        <div className={styles.mainbox}>
          {boxesData.map((box, index) => (
            <div key={index} className={styles.boxes}>
              <Image
                src={box.src}
                width={60}
                height={40}
                alt={box.alt}
                loading="lazy"
              />
              <p>{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewChoose;
