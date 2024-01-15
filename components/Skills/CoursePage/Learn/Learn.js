import React from "react";
import { MdCheck } from "react-icons/md";
import Image from "next/image";

const Learn = () => {
  return (
    <div>
      <div className="grid grid-cols-[60%,39%] gap-5 px-28 max-sm:px-6 py-7 max-sm:py-4 max-sm:flex">
        <div className="flex flex-col gap-5 max-sm:gap-0">
          <div className="flex gap-3 max-sm:hidden">
            <span className="border-[#f18350] text-[#f18350] border-2 px-5 py-1 w-max rounded">
              Features
            </span>
            <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
              Modules
            </span>
            <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
              Project
            </span>
            <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
              Certification
            </span>
            <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
              Tool
            </span>
            <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl font-bold">What will you learn?</h2>
          <div>
            <p className="flex gap-2 items-center max-sm:items-start max-sm:text-[15px] max-sm:w-[98%]">
              <MdCheck className="text-[#10C168] max-sm:text-[30px]" />
              Neque sodales ut etiam sit amet nisl purus non tellus orci ac
              auctor
            </p>
            <p className="flex gap-2 items-center  max-sm:items-start max-sm:text-[15px]  max-sm:w-[98%]">
              <MdCheck className="text-[#10C168] max-sm:text-[30px]" />
              Neque sodales ut etiam sit amet nisl purus non tellus orci ac
              auctor
            </p>
            <p className="flex gap-2 items-center  max-sm:items-start max-sm:text-[15px] max-sm:w-[98%]">
              <MdCheck className="text-[#10C168] max-sm:text-[30px]" />
              Neque sodales ut etiam sit amet nisl purus non tellus orci ac
              auctor
            </p>
            <p className="flex gap-2 items-center  max-sm:items-start max-sm:text-[15px] max-sm:w-[98%]">
              <MdCheck className="text-[#10C168] max-sm:text-[30px]" />
              Neque sodales ut etiam sit amet nisl purus non tellus orci ac
              auctor
            </p>
          </div>
          <h2 className="text-4xl font-bold mt-3">Courses based on Topics</h2>
          <div className="grid grid-cols-[14%,14%,14%,14%,14%,14%] gap-4">
            <div className="bg-[#f18350] rounded flex items-center justify-center py-2">
              <Image
                src="/images/sql_icon.png"
                alt="headerImg"
                width={44}
                height={54}
              />
            </div>
            <div className="bg-[#EEEAFF] rounded flex items-center justify-center py-2">
              <Image
                src="/images/python_icon.png"
                alt="headerImg"
                width={48}
                height={48}
              />
            </div>
            <div className="bg-[#EEEAFF] rounded flex items-center justify-center py-2">
              <Image
                src="/images/tableau_icon.png"
                alt="headerImg"
                width={49}
                height={48}
              />
            </div>
            <div className="bg-[#EEEAFF] rounded flex items-center justify-center py-2">
              <Image
                src="/images/PowerBI_icon.png"
                alt="headerImg"
                width={44}
                height={48}
              />
            </div>
            <div className="bg-[#EEEAFF] rounded flex items-center justify-center py-2">
              <Image
                src="/images/MongoDB_icon.png"
                alt="headerImg"
                width={21}
                height={48}
              />
            </div>
            <div className="bg-[#EEEAFF] rounded flex items-center justify-center py-2">
              <Image
                src="/images/Git_icon.png"
                alt="headerImg"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
