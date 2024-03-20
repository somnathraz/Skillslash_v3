import React from "react";
import Image from "next/image";
import { imgArray } from "./ToolsCoveredData";

const ToolsCovered = () => {
  return (
    <div className="flex flex-col justify-center items-center min-[642px]:hidden">
      <h2 className="mb-0 mt-5 font-bold text-3xl">Tools Covered</h2>
      <div className=" grid grid-cols-3 gap-3 justify-center items-center min-[642px]:hidden bg-[#F9F8FE] mx-5 my-5 rounded px-4 py-4">
        {imgArray.map((data, index) => {
          return (
            <div key={index} className="mb-1">
              <Image src={data.src} width={data.width} height={data.height} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToolsCovered;
