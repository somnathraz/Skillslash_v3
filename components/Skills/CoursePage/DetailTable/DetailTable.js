import React from "react";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";

const DetailTable = () => {
  return (
    <div className="px-40 py-10 flex flex-col gap-5 max-[1281px]:px-24 relative">
      <Image
        src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course+Header/table-data-science.png"
        fill
        alt="table data science"
        className="z-[-1]"
      />
      <h2 className="text-white font-bold text-4xl text-center">
        Skillslash Bootcamp
      </h2>
      <div className="border-[1px] border-[#ffffff] rounded-lg grid  grid-cols-[35%,16%,16%,16%] max-[1281px]:gird-cols-[35%,17%,17%,19%] gap-10 px-14 py-10 justify-center">
        <div className="flex flex-col gap-3 mt-14 ml-5">
          <p className="text-white">Lesson</p>
          <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">In-depth Lesson</p>
          <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">Live Doubt Clearing</p>
          <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">Live Projects</p>
          <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">Course Completion Certificate</p>
          <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">Project Experience Certificate</p>
          <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">Internship Certificate</p>
          <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">Final Year Project Assistance</p>
          <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">Resume Building Session</p>
          <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">Average Pricing</p>
        </div>
        <div className="flex flex-col gap-[15px] items-center ">
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Skillslash-New-Logo-(white)1.webp"
            width={40}
            height={40}
            alt="skillslash-logo"
          />
          <p className="text-white">Recorded</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">7000</p>
        </div>
        <div className="flex flex-col gap-[15px] items-center">
          <p className="mb-[20px] text-white">Others-Recorded</p>
          <p className="text-white">Recorded</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">500-6,500</p>
        </div>
        <div className="flex flex-col gap-[15px]  items-center">
          <p className="mb-[20px] text-white">Others-Live</p>
          <p className="text-white">Live</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">80,000-5,00,000</p>
        </div>
      </div>
    </div>
  );
};

export default DetailTable;
