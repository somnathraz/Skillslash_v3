import React, { useRef } from "react";
import FirstFeature from "./FirstFeature";
import SecondFeature from "./SecondFeature";
import ThirdFeature from "./ThreeFeature";
import FourthFeature from "./FourthFeature";
import { motion, useScroll } from "framer-motion";

const WhyUsAnimate = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <div
      className="hidden max-sm:flex flex-col px-5 py-5 bg-[#111621] gap-5 mt-[40px]"
      ref={ref}
    >
      <h2 className="text-2xl font-bold text-white max-sm:text-3xl max-sm:mb-0 mt-[20px]">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-[60%,38%] gap-8 max-sm:flex max-sm:flex-col">
        <div className="flex flex-col gap-8 relative mt-[20px] pb-[120px] ">
          <div className="absolute h-[100%] w-[4px] b left-5 z-0">
            <motion.svg height="100%" width="100%">
              <motion.path
                d="M 0 0 V 1400"
                strokeWidth="4"
                pathLength={1}
                stroke="#ffffff"
                style={{ pathLength: scrollYProgress }}
              />
            </motion.svg>
          </div>
          <div className="flex flex-col relative z-10 gap-[120px] ml-2">
            <div className="h-[130px]">
              <FirstFeature />
            </div>
            <div className="h-[130px]">
              <SecondFeature />
            </div>
            <div className="h-[160px]">
              <ThirdFeature />
            </div>
            <div className="h-[130px]">
              <FourthFeature />
            </div>
            {/* <div className="h-[180px]">
              <FifthFeature />
            </div>
            <div className="h-[180px]">
              <SixthFeature />
            </div> */}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default WhyUsAnimate;
