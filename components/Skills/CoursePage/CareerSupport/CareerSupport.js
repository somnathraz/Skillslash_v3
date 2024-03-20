import React from "react";
import styles from "./CareerSupport.module.css";
import { BiSupport } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const CareerSupport = () => {
  return (
    <div className={styles.headWrap}>
      <h2>Career Support</h2>
      <div className={styles.contentWrap}>
        <div className={styles.contentDiv}>
          <BiSupport className={styles.iconsWrap} />
          <h3>Interview Calls</h3>
        </div>
        <div className={styles.contentDiv}>
          <FiUsers className={styles.iconsWrap} />
          <h3>Mock Interview Sessions</h3>
        </div>
        <div className={styles.contentDiv}>
          <IoDocumentTextOutline className={styles.iconsWrap} />
          <h3>Resume Building Session</h3>
        </div>
        <div className={styles.contentDiv}>
          <FaLinkedinIn className={styles.iconsWrap} />
          <h3>
            LinkedIn Profile <br />
            Review
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CareerSupport;
