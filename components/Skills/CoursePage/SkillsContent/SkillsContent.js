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
  redirectDM,
  newDataScience,
  nomicrosoft,
  dmPage,
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
            redirectDM={redirectDM}
          />
        </div>
      </Popup>
      <div className="flex flex-col gap-[2px] py-4 px-5 bg-[#fff9f7] mx-4 max-sm:bg-white max-sm:border-[0px] rounded-2xl border-[1px] border-solid border-[#f18350]">
        <h3 className="text-xl max-sm:text-[28px] font-bold text-left py-1 w-max max-sm:mb-4">
          Course Content
        </h3>
        {/* <hr className="border-b-4 border-b-[#f18350] rounded-2xl w-[130px]" /> */}
        {dmPage ? (
          <>
            <div className="flex flex-col gap-2 px-7 max-[741px]:px-3">
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdOutlineVideocam className="text-xl" />
                  Learning Mode
                </span>

                <span>
                  <b>Live</b>
                </span>
              </p>

              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdLiveTv className="text-xl" />
                  Tools
                </span>
                <span>
                  <b>100+</b>
                </span>
              </p>

              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdLiveTv className="text-xl" />
                  Certificates
                </span>
                <span>
                  <b>10+</b>
                </span>
              </p>

              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdLockOpen className="text-xl" />
                  Branded Case-Studies
                </span>
                <span>
                  <b>30+</b>
                </span>
              </p>
              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <PiCertificateBold className="text-xl" />
                  1:1 Doubt Session-
                </span>
                <span>
                  <b>Daily</b>
                </span>
              </p>

              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <PiCertificateBold className="text-xl" />
                  Premium Career Support
                </span>
                <span>
                  <b>Included</b>
                </span>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2 px-7 max-[741px]:px-3 max-sm:px-0">
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdOutlineVideocam className="text-2xl text-[#4f419a]" />
                  Learning Mode
                </span>
                {nomicrosoft ? (
                  <span>
                    <b>Self-paced</b>
                  </span>
                ) : (
                  <span>
                    <b>Blended</b>
                  </span>
                )}
              </p>
              {nomicrosoft ? (
                <></>
              ) : (
                <>
                  <hr />
                  <p className="flex gap-2 items-center justify-between py-2">
                    <span className="flex gap-2 items-center">
                      <MdLiveTv className="text-xl" />
                      1:1 Doubt Session
                    </span>
                    <span>
                      <b>Daily</b>
                    </span>
                  </p>
                </>
              )}{" "}
              {nomicrosoft ? (
                <></>
              ) : (
                <>
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
                  <p className="flex gap-2 items-center justify-between py-2">
                    <span className="flex gap-2 items-center">
                      <MdOutlineWorkHistory className="text-2xl text-[#4f419a]" />
                      Career Support
                    </span>
                    <span>
                      <b>Included</b>
                    </span>
                  </p>
                </>
              )}
              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdLockOpen className="text-2xl text-[#4f419a]" />
                  Course Access
                </span>
                <span>
                  <b>Lifetime</b>
                </span>
              </p>
              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <PiCertificateBold className="text-2xl text-[#4f419a]" />
                  Certifications
                </span>
                {nomicrosoft ? (
                  <>
                    <span>
                      <b>1</b>
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      <b>{certification}</b>
                    </span>
                  </>
                )}
              </p>
            </div>
          </>
        )}
      </div>
      {/* {newDataScience ? (
      ""
    ) : (
      
    )} */}
    </div>
  );
};

export default SkillsContent;
