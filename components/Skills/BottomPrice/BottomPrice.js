import React, { useState, useEffect } from "react";
import styles from "./BottomPrice.module.css";
import Link from "next/link";
import Popup from "../Global/Popup/Popup";
import Form from "../Global/Form/Form";

const BottomPrice = ({
  offerPrice,
  actualPrice,
  link,
  checkoutLink,
  redirectDs,
  redirectFs,
  redirectDa,
  changeHeading,
  newDataScience,
}) => {
  const [idBtnO, setIdBtnO] = useState("org-slo");
  const [popups, setPopups] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setPopups(true);
  };
  return (
    <div className={styles.wrap}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="RightPopup">
          {changeHeading ? (
            <h5>Download Program Handbook</h5>
          ) : (
            <h5 className="text-center">
              Get a chance to understand this course in detail from our
              counsellors
            </h5>
          )}
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            setTrigger={setPopups}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectDa={redirectDa}
          />
        </div>
      </Popup>
      <div className={styles.left}>
        <p className={styles.ofPr}>{offerPrice}</p>
        {/* {newDataScience && <p className={styles.acPr}>{actualPrice}</p>} */}
      </div>
      <div className={styles.right} id={idBtnO}>
        {newDataScience ? (
          <Link href={checkoutLink} id={idBtnO}>
            <button id={idBtnO}>Buy Now</button>
          </Link>
        ) : (
          <button id={idBtnO} onClick={() => popupShow()}>
            Free Counselling
          </button>
        )}
      </div>
      <p className={styles.refund}>15-Days Money-Back Guarantee</p>
    </div>
  );
};

export default BottomPrice;
