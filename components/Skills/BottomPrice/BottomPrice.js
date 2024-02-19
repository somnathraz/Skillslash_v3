import React from "react";
import styles from "./BottomPrice.module.css";
import Link from "next/link";

const BottomPrice = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <p className={styles.ofPr}>₹ 5,999</p>
        <p className={styles.acPr}>₹ 11,999</p>
      </div>
      <div className={styles.right}>
        <Link href="#">
          <button>Start Learning</button>
        </Link>
      </div>
      <p className={styles.refund}>15 Days refundable</p>
    </div>
  );
};

export default BottomPrice;
