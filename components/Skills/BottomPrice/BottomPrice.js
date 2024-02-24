import React, { useState, useEffect } from "react";
import styles from "./BottomPrice.module.css";
import Link from "next/link";
import { MdOutlineAccessAlarms } from "react-icons/md";

const BottomPrice = ({ offerPrice, actualPrice, link }) => {
  const [idBtnO, setIdBtnO] = useState("org-slo");
  return (
    <div className={styles.bottomBar}>
      <div className={styles.wrap}>
        <div className={styles.left}>
          <p className={styles.ofPr}>{offerPrice}</p>
          <p className={styles.acPr}>{actualPrice}</p>
        </div>
        <div className={styles.right} id={idBtnO}>
          <Link href={link} id={idBtnO}>
            <button id={idBtnO}>Start Learning</button>
          </Link>
        </div>
      </div>
      <p className={styles.refund}>15 Days refundable**</p>
      {/* <div className={styles.info}>
        <p className="text-[#B32D0F] text-[14px] flex gap-2 items-center">
          <MdOutlineAccessAlarms />6 hours left at <b>this prices</b>
        </p>
       
      </div> */}
    </div>
  );
};

export default BottomPrice;
