import React from "react";
import { MdCheck } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Learn = ({ firstPoint, secondPoint, thirdPoint, fourthPoint }) => {
  return (
    <div>
      <div className="grid grid-cols-[60%,39%] gap-5 px-28 max-sm:px-6 py-7 max-sm:py-4 max-sm:flex">
        <div className="flex flex-col gap-5 max-sm:gap-0">
          <div className="flex gap-3 max-sm:hidden">
            <Link href="#features">
              <span className="border-[#f18350] text-[#f18350] border-2 px-5 py-1 w-max rounded">
                Features
              </span>
            </Link>
            <Link href="#modules">
              <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
                Modules
              </span>
            </Link>
            <Link href="#projects">
              <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
                Project
              </span>
            </Link>
            <Link href="#certificate">
              <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
                Certification
              </span>
            </Link>
            <Link href="#faq">
              <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
                FAQ
              </span>
            </Link>
          </div>
          <h2 className="text-4xl font-bold max-[1281px]:text-3xl">
            What will you learn?
          </h2>
          <div>
            <p className="grid max-sm:grid-cols-[8%,88%] grid-cols-[3%,97%] gap-2 items-center max-sm:items-start max-sm:text-[15px] max-sm:w-[98%]">
              <MdCheck className="text-[#10C168] max-sm:text-[25px]" />
              {firstPoint}
            </p>
            <p className="grid max-sm:grid-cols-[8%,88%] grid-cols-[3%,97%] gap-2 items-center  max-sm:items-start max-sm:text-[15px]  max-sm:w-[98%]">
              <MdCheck className="text-[#10C168] max-sm:text-[25px]" />
              {secondPoint}
            </p>
            <p className="grid max-sm:grid-cols-[8%,88%] grid-cols-[3%,97%] gap-2 items-center  max-sm:items-start max-sm:text-[15px] max-sm:w-[98%]">
              <MdCheck className="text-[#10C168] max-sm:text-[25px]" />
              {thirdPoint}
            </p>
            <p className="grid max-sm:grid-cols-[8%,88%] grid-cols-[3%,97%] gap-2 items-center  max-sm:items-start max-sm:text-[15px] max-sm:w-[98%]">
              <MdCheck className="text-[#10C168] max-sm:text-[25px]" />
              {fourthPoint}
            </p>
          </div>
          <h2 className="text-4xl font-bold mt-3 max-[1281px]:text-2xl">
            Courses based on Topics
          </h2>
          <div className="grid grid-cols-[14%,14%,14%,14%,14%,14%] gap-2">
            <div className="bg-[#f18350] rounded flex items-center justify-center py-2">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/sql-icon.png"
                alt="headerImg"
                width={24}
                height={34}
              />
            </div>
            <div className="bg-[#EEEAFF] rounded flex items-center justify-center py-2">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/python-icon.png"
                alt="headerImg"
                width={34}
                height={34}
              />
            </div>
            <div className="bg-[#EEEAFF] rounded flex items-center justify-center py-2">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/tabluae-icon.png"
                alt="headerImg"
                width={59}
                height={58}
              />
            </div>
            <div className="bg-[#EEEAFF] rounded flex items-center justify-center py-2">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/powerbi-icon.png"
                alt="headerImg"
                width={54}
                height={58}
              />
            </div>
            <div className="bg-[#EEEAFF] rounded flex items-center justify-center py-2">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/mongoDb-icon.png"
                alt="headerImg"
                width={21}
                height={38}
              />
            </div>
            <div className="bg-[#EEEAFF] rounded flex items-center justify-center py-2">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/git-icon.png"
                alt="headerImg"
                width={33}
                height={33}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
