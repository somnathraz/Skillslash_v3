import React from "react";
import Styles from "./courseHeader.module.css";
import Image from "next/image";
import Form from "../../../Skills/Global/Form/Form";
import Popup from "../../../Skills/Global/Popup/Popup";
import { useState } from "react";
import Link from "next/link";

const CourseHeader = ({
  title,
  deskTopPara,
  spanTitleText,
  homePage,
  dmPage,
  changeHeading,
  redirectDs,
  redirectFs,
  redirectDa,
  redirectDM,
  subtitle,
  gst,
}) => {
  const [popups, setPopups] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setPopups(true);
  };
  const GenImg =
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/Internship_course.webp";
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
      <div className={Styles.main}>
        <div className={Styles.gridDiv}>
          <div className={Styles.leftdiv}>
            <div className={Styles.top}>
              <span> {deskTopPara}</span>

               
            </div>
<div className={Styles.headline}>  <h1>{title}</h1>
            <h2>{subtitle}</h2></div>
          
         
              <>
                <div className={Styles.EleCourse}>
                  <p>with guaranteed internship </p>
                  <Image src={GenImg} width={30} height={20} alt="Bard" />
                </div>

                <p className={Styles.para}>{spanTitleText}</p>
              </>
          
            {dmPage ? (
              <>
                {" "}
                <button
                  id="clck-free-counselling"
                  onClick={() => popupShow()}
                  className={Styles.btn}
                >
                  Apply for Counselling
                </button>
              </>
            ) : (
              <>
                {" "}
                <Link href="/liveclass/digital-marketing-master-course">
                <button className={Styles.btn}>Explore course</button>
                </Link>
              </>
            )}
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
