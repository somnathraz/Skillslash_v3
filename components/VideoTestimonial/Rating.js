import React from "react";
import styles from "./VideoTestimonial.module.css";
import Image from "next/image";
const Rating = ({ ratingData }) => {
  return (
    <div className={styles.siteReview}>
      <div className={styles.ratingText}>
        <h2>
          Top Sites That <span className="text-[#f18350]">Ranked Us</span>
        </h2>
      </div>
      <div className={styles.rightImg}>
        {ratingData.map((imgData) => {
          return (
            <div key={imgData.src}>
              <Image
                src={imgData.src}
                width={imgData.width}
                height={imgData.height}
                alt="rating background"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
