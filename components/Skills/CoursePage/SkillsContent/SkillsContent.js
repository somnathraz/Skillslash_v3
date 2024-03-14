import React, { useState } from "react";
import {
  MdOutlineVideocam,
  MdLiveTv,
  MdOutlineWorkHistory,
  MdLockOpen,
} from "react-icons/md";
import styles from "../../BottomPrice/BottomPrice.module.css";
import Form from "../../Global/Form/Form";
import Popup from "../../Global/Popup/Popup";
import { PiCertificateBold, PiMedal } from "react-icons/pi";

const SkillsContent = ({
  hrs,
  certification,
  offerPrice,
  actualPrice,
  changeHeading,
  redirectDs,
  redirectFs,
  redirectDa,
  newDataScience,
}) => {
  const [idBtnO, setIdBtnO] = useState("program-slo");
  const [popups, setPopups] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setPopups(true);
  };
  return (
    <div className="flex flex-col min-[642px]:hidden ">
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="RightPopup">
          {changeHeading ? (
            <h5>Download Program Handbook</h5>
          ) : (
            <h5>
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
      <div className="flex flex-col gap-2 py-4 px-5 bg-[#efefff] mx-4 shadow ">
        <h3 className="text-xl font-bold px-5 py-1">Course Content</h3>
        <hr />
        <div className="flex flex-col gap-2 px-7 max-[741px]:px-3">
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <MdOutlineVideocam className="text-xl" />
              Video Lessons
            </span>
            <span>
              <b>{hrs} Hrs</b>
            </span>
          </p>
          <hr />
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <MdLiveTv className="text-xl" />
              Live Doubt Session
            </span>
            <span>
              <b>Weekly</b>
            </span>
          </p>
          <hr />
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <MdLiveTv className="text-xl" />
              Live Project Sessions
            </span>
            <span>
              <b>Weekly</b>
            </span>
          </p>
          <hr />
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <MdOutlineWorkHistory className="text-xl" />
              Career Support
            </span>
            <span>
              <b>Included</b>
            </span>
          </p>
          <hr />
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <MdLockOpen className="text-xl" />
              Course Access
            </span>
            <span>
              <b>Lifetime</b>
            </span>
          </p>
          <hr />
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <PiCertificateBold className="text-xl" />
              Certifications
            </span>
            <span>
              <b>{certification}</b>
            </span>
          </p>
        </div>
      </div>
      {newDataScience ? (
        ""
      ) : (
        <div className="flex flex-col px-5 mt-[20px] gap-4">
          <div className={styles.right} id={idBtnO}>
            <button id={idBtnO} onClick={() => popupShow()}>
              Free Counselling
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsContent;
