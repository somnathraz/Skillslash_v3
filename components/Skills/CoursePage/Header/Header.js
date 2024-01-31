import React from "react";
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
}) => {
  return (
    <div className="grid grid-cols-[60%,39%] max-sm:flex max-sm:flex-col gap-5 max-sm:mb-[750px] bg-[#111621] w-full mt-[70px] px-28 max-sm:px-5 py-[100px] pb-[70px] max-sm:py-14 relative">
      <div className="absolute gradient top-0 left-0 h-full w-[60%] max-sm:w-full z-0"></div>
      <div className="flex flex-col gap-2 relative z-[1]">
        <div className="flex gap-3 text-[#F18350] font-bold items-center max-sm:hidden">
          <p className="text-[#F18350] font-semibold max-sm:text-[15px] max-sm:font-medium">
            Self-Paced
          </p>
          <MdKeyboardArrowRight className="text-white" />
          <p className="text-[#F18350] font-semibold max-sm:text-[15px] max-sm:font-medium">
            {title}
          </p>
          {/* <MdKeyboardArrowRight className="text-[white]" />
          <p>Data Science</p> */}
        </div>
        {redirectDs && (
          <div className="px-4 py-[6px] mt-4 bg-white w-max rounded">
            {/* <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/powered-by-microsoft-(White).png" alt="PoweredByMicrosoft" width={200} height={22}/> */}

            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/powered+by+microsoft.png"
              alt="PoweredByMicrosoft"
              width={200}
              height={22}
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
        <p className="text-[#cccccc] w-[91%] text-[17px] max-sm:text-[16px] max-[1281px]:text-[16px] leading-[28px] max-sm:leading-[24px] font-light mt-2 max-sm:mt-0">
          {desc}
        </p>
        <div className="grid grid-cols-3 gap-2 border-[1px] mt-3 w-[75%] max-sm:w-[97%] rounded items-center px-4 py-1 justify-center">
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/Header/Google_review.png"
            alt="Goole_RReviews"
            width={150}
            height={23}
            priority
            className="mx-auto"
          />
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/Header/switchup_review.png"
            alt="switchup_RReviews"
            width={150}
            height={23}
            priority
            className="mx-auto"
          />
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/CR_review.png"
            alt="CR_RReviews"
            width={150}
            height={23}
            priority
            className="mx-auto"
          />
        </div>
        <Link href={link}>
          <button className="bg-[#f18350] px-3 py-2 mt-4">
            Watch Demo Videos
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-7 relative">
        <div className="bg-white px-11 py-3 max-sm:px-0 rounded shadow flex flex-col w-full z-[1] absolute mt-28">
          <div className="absolute w-[413px]  max-sm:w-[313px] h-[290px] max-sm:h-[220px] top-[-120px] max-sm:top-[-100px] left-12 min-[1440px]:left-8 max-sm:left-7 max-sm:flex max-sm:justify-center">
            <Link href={link}>
              <Image src={imgSrc} alt="headerImg" fill priority quality={40} />
              <MdOutlinePlayCircleOutline className="absolute z-10 text-7xl text-white left-[42%] top-[41%] cursor-pointer " />
            </Link>
          </div>
          <div className="flex gap-2 w-full items-center mt-[180px] max-sm:mt-[120px] max-sm:px-4">
            <p className="text-[#000000] flex gap-4 text-2xl font-bold items-center mr-3">
              {offerPrice}
              <span className="line-through text-lg font-normal text-[#646464]">
                {actualPrice}
              </span>
            </p>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/discount.png"
              alt="discount"
              width={20}
              height={20}
              priority
              style={{ height: "20px" }}
            />
            <p className="text-[#f18350] font-bold">({discount} Off)</p>
          </div>
          <div className="flex flex-col gap-5 max-sm:px-4">
            <p className="text-[#B32D0F] text-[14px] flex gap-2 items-center">
              <MdOutlineAccessAlarms />
              Valid Till <b>Today</b>
            </p>
            <Link href={link}>
              <button className="w-full px-4 bg-[#f18350] text-white rounded py-3 font-bold text-xl flex justify-center items-center">
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
