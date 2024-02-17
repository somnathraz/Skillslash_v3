import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import {
  MdOutlineAccessAlarms,
  MdOutlinePlayCircleOutline,
} from "react-icons/md";
import Link from "next/link";
import {
  MdOutlineVideocam,
  MdLiveTv,
  MdOutlineWorkHistory,
  MdLockOpen,
} from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import VideoPlaylist from "../../Global/VideoPlaylist/VideoPlaylist";

const Header = ({
  title,
  desc,
  imgSrc,
  hrs,
  certification,
  offerPrice,
  actualPrice,
  discount,
  link,
  redirectDs,
  redirectFs,
  redirectDa,
}) => {
  const [show, setShow] = useState(false);
  const showVideo = (data) => {
    setShow(data);
  };
  const [idBtnO, setIdBtnO] = useState("org-slo");
  const [idBtnDV, setIdBtnDV] = useState("org-wdv");
  const [idBtnV, setIdBtnV] = useState("org-dv");
  console.log(redirectDs, redirectFs, redirectDa);
  return (
    <div className="grid grid-cols-[60%,39%] max-sm:flex max-sm:flex-col gap-5 max-sm:mb-[10px] bg-[#111621] w-full mt-[70px] min-[1600px]:mt-[70px] px-28 min-[1600px]:px-48 max-sm:px-5 py-[100px] min-[1600px]:py-[90px] pb-[70px] max-sm:pb-[30px] max-sm:py-4 relative">
      <div className="flex gap-3 text-[#F18350] font-bold items-center max-sm:mb-[-8px] ">
        <p className="text-[#F18350] font-semibold min-[1600px]:text-[20px] max-sm:text-[15px] max-sm:font-medium">
          Self-Paced
        </p>
        <MdKeyboardArrowRight className="text-white min-[1600px]:text-[20px]" />
        <p className="text-[#F18350] font-semibold max-sm:text-[15px] min-[1600px]:text-[20px] max-sm:font-medium">
          {title}
        </p>
        {/* <MdKeyboardArrowRight className="text-[white]" />
          <p>Data Science</p> */}
      </div>
      <div className="w-[110%] ml-[-19px] h-[280px] relative flex justify-center min-[482px]:hidden">
        <div onClick={() => showVideo(true)} id={idBtnV}>
          <Image
            src={imgSrc}
            alt="headerImg"
            fill
            priority
            quality={40}
            id={idBtnV}
          />
          <MdOutlinePlayCircleOutline
            className="absolute z-10 text-7xl text-white left-[42%] top-[41%] cursor-pointer "
            id={idBtnV}
          />
        </div>
      </div>
      {show && (
        <VideoPlaylist
          setShow={showVideo}
          show={show}
          redirectDs={redirectDs}
          redirectFs={redirectFs}
          redirectDa={redirectDa}
        />
      )}

      <div className="absolute gradient top-0 left-0 h-full w-[60%] max-sm:w-full z-0"></div>
      <div className="flex flex-col gap-2 relative z-[1]">
        {redirectDs && (
          <div className="px-4 py-[6px] mt-4 bg-white w-max rounded">
            {/* <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/powered-by-microsoft-(White).png" alt="PoweredByMicrosoft" width={200} height={22}/> */}

            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/Header/Powered+by+microsoft+tag+webp.webp"
              alt="PoweredByMicrosoft"
              width={255}
              height={28}
              priority
            />
          </div>
        )}
        {redirectFs && (
          <div className="relative w-[348px] max-sm:w-[310px] h-[32px] max-sm:h-[29px] mt-3 max-sm:mt-12 ">
            {/* <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/powered-by-microsoft-(White).png" alt="PoweredByMicrosoft" width={200} height={22}/> */}

            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/FAANG+Software+Developer+as+Trainers.png"
              alt="FAANG Operators"
              fill
              priority
            />
          </div>
        )}
        <h1 className="text-5xl text-white font-bold leading-[58px] max-[1281px]:text-3xl max-sm:leading-[45px]">
          {title}
        </h1>
        <p className="text-[#cccccc] w-[91%] min-[1600px]:w-[75%] text-[17px] max-sm:text-[16px] max-[1281px]:text-[16px] leading-[28px] max-sm:leading-[24px] font-light mt-2 max-sm:mt-0 min-[1600px]:text-[20px]">
          {desc}
        </p>
        <div className="grid grid-cols-3 gap-2 min-[1600px]:gap-0 border-[1px] mt-3 w-[75%] min-[1600px]:w-[60%] max-sm:w-[97%] rounded items-center px-4 py-1 justify-center">
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/googlereview-new.webp"
            alt="Goole_RReviews"
            width={150}
            height={23}
            priority
            className="mx-auto"
          />
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/Header/switch-up.webp"
            alt="switchup_RReviews"
            width={150}
            height={23}
            priority
            className="mx-auto"
          />
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/course-report.webp"
            alt="CR_RReviews"
            width={150}
            height={23}
            priority
            className="mx-auto"
          />
        </div>
        <div onClick={() => showVideo(true)}>
          <button
            className="bg-[#f18350] px-3 py-2 mt-4 max-sm:hidden"
            id={idBtnDV}
          >
            Watch Demo Videos
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-7 relative">
        <div className="bg-white px-11 py-3 max-sm:px-0 rounded shadow flex flex-col w-full min-[1600px]:w-[90%] z-[1] max-sm:hidden absolute mt-28">
          <div className="absolute w-[413px]  max-sm:w-[313px] h-[290px] max-sm:h-[220px] top-[-120px] max-sm:top-[-100px] left-12 min-[1600px]:left-20 max-sm:left-7 max-sm:flex max-sm:justify-center">
            <div onClick={() => showVideo(true)} id={idBtnV}>
              <Image
                src={imgSrc}
                alt="headerImg"
                fill
                priority
                quality={40}
                id={idBtnV}
              />
              <MdOutlinePlayCircleOutline
                className="absolute z-10 text-7xl text-white left-[42%] top-[41%] cursor-pointer "
                id={idBtnV}
              />
            </div>
          </div>
          <div className="flex gap-2 w-full items-center mt-[180px] max-sm:mt-[120px] max-sm:px-4">
            <p className="text-[#000000] flex gap-4 text-2xl font-bold items-center mr-3">
              {offerPrice}
              <span className="line-through text-lg font-normal text-[#646464]">
                {actualPrice}
              </span>
            </p>
            {/* <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/discount.png"
              alt="discount"
              width={20}
              height={20}
              priority
              style={{ height: "20px" }}
            />
            <p className="text-[#f18350] font-bold">({discount} Off)</p> */}
          </div>
          <div className="flex flex-col gap-5 max-sm:px-4">
            <p className="text-[#B32D0F] text-[14px] flex gap-2 items-center">
              <MdOutlineAccessAlarms />
              Limited Time <b>Offer</b>
            </p>
            <Link href={link}>
              <button
                className="w-full px-4 bg-[#f18350] text-white rounded py-3 font-bold text-xl flex justify-center items-center"
                id={idBtnO}
              >
                Start Learning
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-2 py-4">
            <h3 className="text-xl font-bold px-5 py-1">Course Content</h3>
            <hr />
            <div className="flex flex-col gap-2 px-7">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
