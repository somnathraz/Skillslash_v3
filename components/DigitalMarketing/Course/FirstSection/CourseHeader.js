import React from "react";
import Styles from "./courseHeader.module.css";
import Image from "next/image";
import Form from "../../../Skills/Global/Form/Form";
import Popup from "../../../Skills/Global/Popup/Popup";
import { useState } from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import VideoPlaylist from "../../../Skills/Global/VideoPlaylist/VideoPlaylist";

const CourseHeader = ({
  title,
  deskTopPara,
  spanTitleText,
  changeHeading,
  redirectDs,
  redirectFs,
  redirectDa,
  redirectDM,
  subtitle,
  GenImg,
}) => {
  const [popups, setPopups] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setPopups(true);
  };
  const [show, setShow] = useState(false);
  const showVideo = (data) => {
    setShow(data);
  };

  return (
    <>
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
            redirectDM={redirectDM}
          />
        </div>
      </Popup>
      {show && (
        <VideoPlaylist
          setShow={showVideo}
          show={show}
          redirectDs={redirectDs}
          redirectFs={redirectFs}
          redirectDa={redirectDa}
          redirectDM={redirectDM}
        />
      )}
      <div className={Styles.main}>
        <div className={Styles.gridDiv}>
          <div className={Styles.leftdiv}>
            <div className={Styles.top}>
              <span> {deskTopPara}</span>
            </div>
            <div className={Styles.headline}>
              {" "}
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>

            <>
              <div className={Styles.EleCourse}>
                <p>with guaranteed internship </p>
                <Image src={GenImg} width={30} height={20} alt="Bard"quality={50} priority />
              </div>

              <p className={Styles.para}>{spanTitleText}</p>
            </>

            <div className={Styles.buttondiv}>
              <button
                id="clck-free-counselling"
                onClick={() => popupShow()}
                className={Styles.btn}
              >
                Apply for Counselling
              </button>
              <button
                id="clck-free-counselling"
                onClick={() => showVideo(true)}
                className={Styles.btnDemo}
              >
                DEMO
                <FaYoutube className={Styles.IconYou} />
              </button>
            </div>
          </div>

          <>
            <div className={Styles.formDiv}>
              <h2 className={Styles.formhead}>
                <p>Free Counselling</p> with Experts
              </h2>

              <Form
                redirectDs={redirectDs}
                redirectFs={redirectFs}
                redirectDa={redirectDa}
                redirectDM={redirectDM}
              />
            </div>
          </>
        </div>

        <div className={Styles.icons}>
          <div className={Styles.icondivs}>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/Ind_icon.webp"
              width={60}
              height={60}
              loading="lazy"
              alt="icons"
            />

            <p>Industry Certification</p>
          </div>

          <hr className={Styles.iconHr} />
          <div className={Styles.icondivs}>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/carr_icon.webp"
              width={60}
              height={60}
              loading="lazy"
              alt="icons"
            />
            <p>Career Support</p>
          </div>
          <hr className={Styles.iconHr} />
          <div className={`${Styles.icondivs} ${Styles.center}`}>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/live_icon.webp"
              width={60}
              height={60}
              loading="lazy"
              alt="icons"
           
            />
            <p>Live Doubt & Project Sessions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHeader;
