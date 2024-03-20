import React from "react";
import styles from "./PriceCompare.module.css";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";

const PriceCompare = ({
  redirectDa,
  hrs,
  redirectDs,
  otherHr,
  liveHr,
  offerPrice,
}) => {
  return (
    <>
      <h2 className={styles.heading}>Skillslash Bootcamp</h2>
      <div className={styles.priceWrap}>
        <div className={styles.priceBox}>
          <div className={styles.priceHeader}>
            <h3>Skillslash</h3>
          </div>
          <div className={styles.priceContent}>
            <div className={styles.priceRow}>
              <p>Lesson</p>
              <p>Recorded</p>
            </div>
            <div className={styles.priceRow}>
              <p>Duration</p>
              <p>{hrs} Hrs</p>
            </div>
            <div className={styles.priceRow}>
              <p>Live Projects</p>
              <p>{redirectDa ? "18" : "30"}</p>
            </div>
            {redirectDs && (
              <>
                <div className={styles.priceRow}>
                  <p>Microsoft Course Certificate</p>
                  <p>
                    <FaCircleCheck className="text-[#12c168] " />
                  </p>
                </div>
                <div className={styles.priceRow}>
                  <p>Project Experience Certificate</p>
                  <p>
                    <FaCircleCheck className="text-[#12c168] " />
                  </p>
                </div>
                <div className={styles.priceRow}>
                  <p>Internship Certificate</p>
                  <p>
                    <FaCircleCheck className="text-[#12c168] " />
                  </p>
                </div>
                <div className={styles.priceRow}>
                  <p>Final Year Project Assistance</p>
                  <p>
                    <FaCircleCheck className="text-[#12c168] " />
                  </p>
                </div>
              </>
            )}
            <div className={styles.priceRow}>
              <p>Career Support</p>
              <p>
                <FaCircleCheck className="text-[#12c168] " />
              </p>
            </div>
            <div className={styles.priceRow}>
              <p>Average Pricing</p>
              <p>{offerPrice}</p>
            </div>
          </div>
        </div>
        <div className={styles.priceBox}>
          <div className={styles.priceHeader}>
            <h3>Others Recorded</h3>
          </div>
          <div className={styles.priceContent}>
            <div className={styles.priceRow}>
              <p>Lesson</p>
              <p>Recorded</p>
            </div>
            <div className={styles.priceRow}>
              <p>Duration</p>
              <p>{otherHr} Hrs</p>
            </div>
            <div className={styles.priceRow}>
              <p>Live Projects</p>
              <p>30+</p>
            </div>
            {redirectDs && (
              <>
                <div className={styles.priceRow}>
                  <p>Microsoft Course Certificate</p>
                  <p>
                    <MdOutlineClear className="text-[#ff5252] " />
                  </p>
                </div>
                <div className={styles.priceRow}>
                  <p>Project Experience Certificate</p>
                  <p>
                    <MdOutlineClear className="text-[#ff5252] " />
                  </p>
                </div>
                <div className={styles.priceRow}>
                  <p>Internship Certificate</p>
                  <p>
                    <MdOutlineClear className="text-[#ff5252] " />
                  </p>
                </div>
                <div className={styles.priceRow}>
                  <p>Final Year Project Assistance</p>
                  <p>
                    <MdOutlineClear className="text-[#ff5252] " />
                  </p>
                </div>
              </>
            )}

            <div className={styles.priceRow}>
              <p>Career Support</p>
              <p>
                <MdOutlineClear className="text-[#ff5252] " />
              </p>
            </div>
            <div className={styles.priceRow}>
              <p>Average Pricing</p>
              <p>₹500 - ₹6,500</p>
            </div>
          </div>
        </div>
        <div className={styles.priceBox}>
          <div className={styles.priceHeader}>
            <h3>Others Live</h3>
          </div>
          <div className={styles.priceContent}>
            <div className={styles.priceRow}>
              <p>Lesson</p>
              <p>Recorded</p>
            </div>
            <div className={styles.priceRow}>
              <p>Duration</p>
              <p>{liveHr} Hrs</p>
            </div>
            <div className={styles.priceRow}>
              <p>Live Projects</p>
              <p>30+</p>
            </div>
            {redirectDs && (
              <>
                <div className={styles.priceRow}>
                  <p>Microsoft Course Certificate</p>
                  <p>
                    <FaCircleCheck className="text-[#12c168] " />
                  </p>
                </div>
                <div className={styles.priceRow}>
                  <p>Project Experience Certificate</p>
                  <p>
                    <FaCircleCheck className="text-[#12c168] " />
                  </p>
                </div>
                <div className={styles.priceRow}>
                  <p>Internship Certificate</p>
                  <p>
                    <FaCircleCheck className="text-[#12c168] " />
                  </p>
                </div>
                <div className={styles.priceRow}>
                  <p>Final Year Project Assistance</p>
                  <p>
                    <FaCircleCheck className="text-[#12c168] " />
                  </p>
                </div>
              </>
            )}

            <div className={styles.priceRow}>
              <p>Career Support</p>
              <p>
                <FaCircleCheck className="text-[#12c168] " />
              </p>
            </div>
            <div className={styles.priceRow}>
              <p>Average Pricing</p>
              <p>₹80,000-₹5,00,000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCompare;
