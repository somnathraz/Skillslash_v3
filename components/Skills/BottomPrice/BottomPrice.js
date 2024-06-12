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
  nomicrosoft,
  dmPage,
  redirectDM,
  gst,
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
          {/* <p>Fill the below Details to get started</p> */}
          <Form
            popup={true}
            setTrigger={setPopups}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectDa={redirectDa}
            redirectDM={redirectDM}
          />
        </div>
      </Popup>
      
    
     
            <div id={idBtnO} className={styles.BottomPricebutton} onClick={popupShow}>
              Apply Counselling
            </div>
 
     
      


    
    </div>
  );
};

export default BottomPrice;
