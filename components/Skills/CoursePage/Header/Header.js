import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { MdOutlineAccessAlarms } from "react-icons/md";
import {
  MdOutlineVideocam,
  MdLiveTv,
  MdOutlineWorkHistory,
  MdLockOpen,
} from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className="grid grid-cols-[60%,39%] gap-5 bg-[#111621] w-full mt-[70px] px-28 py-28 relative max-[1281px]:px-20 max-[1281px]:py-24">
      <div className="absolute gradient top-0 left-0 h-full w-[60%] z-0"></div>
      <div className="flex flex-col gap-2 relative z-[1]">
        <div className="flex gap-3 text-[#F18350] font-bold items-center">
          <p>Development</p>
          <MdKeyboardArrowRight className="text-white" />
          <p>Data Science</p>
          <MdKeyboardArrowRight className="text-white" />
          <p>Data Science</p>
        </div>
        <h1 className="text-5xl text-white font-bold leading-[58px] max-[1281px]:text-3xl">
          Data Science & AI Bootcamp For Professionals
        </h1>
        <p className="text-[#cccccc] w-[91%] text-[18px] max-[1281px]:text-[16px] leading-[28px] font-light mt-2">
          Update your data analytics skills through our comprehensive program
          that includes Case-based learning, Projects & certification, Domain
          Specialized Tracks and much more.
        </p>
        <div className="grid grid-cols-3 gap-2 border-[1px] mt-3 w-[75%] rounded items-center px-4 py-1 justify-center">
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/Header/Google_review.png"
            alt="Goole_RReviews"
            width={150}
            height={23}
            className="mx-auto"
          />
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/Header/switchup_review.png"
            alt="Goole_RReviews"
            width={150}
            height={23}
            className="mx-auto"
          />
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/Header/cr_review.png"
            alt="Goole_RReviews"
            width={150}
            height={23}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col gap-7 relative">
        <div className="bg-white px-11 py-3 rounded shadow flex flex-col w-full z-[1] absolute mt-28">
          <div className="absolute w-[451px] h-[288px] top-[-120px] left-[12px] max-[1281px]:w-[360px] max-[1281px]:h-[220px] max-[1281px]:left-[20px] ">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/Header/CoursePage_header.png"
              alt="headerImg"
              fill
            />
          </div>
          <div className="flex gap-2 w-full items-center mt-[180px] max-[1281px]:mt-[100px]">
            <p className="text-[#000000] flex gap-4 text-2xl font-bold items-center mr-3">
              ₹5,999
              <span className="line-through text-lg font-normal text-[#646464]">
                ₹11,999
              </span>
            </p>
            <Image
              src="/images/discount.png"
              alt="discount"
              width={20}
              height={20}
              style={{ height: "20px" }}
            />
            <p className="text-[#f18350] font-bold">(50% Off)</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[#B32D0F] text-[14px] flex gap-2 items-center">
              <MdOutlineAccessAlarms />
              <b>6 days</b> left at this price!
            </p>
            <button className="w-full px-4 bg-[#f18350] text-white rounded py-3 font-bold text-xl max-[1281px]:px-2 max-[1281px]:py-2 max-[1281px]:text-lg">
              Enroll Now
            </button>
          </div>
          <div className="flex flex-col gap-2 py-4">
            <h3 className="text-xl font-bold px-5 py-1 max-[1281px]:px-3 max-[1281px]:text-lg">
              Course Content
            </h3>
            <hr />
            <div className="flex flex-col gap-2 px-7  max-[1281px]:px-2">
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdOutlineVideocam className="text-xl" />
                  Video Lessons
                </span>
                <span>
                  <b>246+ Hrs</b>
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
                  <b>3</b>
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
