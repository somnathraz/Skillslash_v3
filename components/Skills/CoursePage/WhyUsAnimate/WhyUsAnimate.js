import React, { useRef } from "react";
import FirstFeature from "./FirstFeature";
import SecondFeature from "./SecondFeature";
import ThirdFeature from "./ThreeFeature";
import FourthFeature from "./FourthFeature";
import FifthFeature from "./FifthFeature";
import SixthFeature from "./SixthFeature";
import Image from "next/image";

import { motion, useScroll } from "framer-motion";

const WhyUsAnimate = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <div
      className="flex flex-col px-28 py-10  bg-[#111621] gap-5 mt-[300px]"
      ref={ref}
    >
      <h2 className="text-5xl font-bold text-white">Why Choose Us?</h2>
      <div className="grid grid-cols-[60%,38%] gap-8">
        <div className="flex flex-col gap-8 relative mt-[60px]">
          <div className="absolute h-[92%] w-[4px] b left-5 z-0">
            <motion.svg height="100%" width="100%">
              <motion.path
                d="M 0 0 V 1900"
                strokeWidth="4"
                pathLength={1}
                stroke="#ffffff"
                style={{ pathLength: scrollYProgress }}
              />
            </motion.svg>
          </div>
          <div className="flex flex-col relative z-10 gap-[170px]">
            <div className="h-[250px]">
              <FirstFeature />
            </div>
            <div className="h-[180px]">
              <SecondFeature />
            </div>
            <div className="h-[180px]">
              <ThirdFeature />
            </div>
            <div className="h-[180px]">
              <FourthFeature />
            </div>
            <div className="h-[180px]">
              <FifthFeature />
            </div>
            <div className="h-[180px]">
              <SixthFeature />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/Header/CoursePage_header.png"
            width={384}
            height={222}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUsAnimate;
