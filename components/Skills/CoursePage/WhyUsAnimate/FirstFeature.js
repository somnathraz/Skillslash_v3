import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const FirstFeature = () => {
  const [ref, inView] = useInView();
  return (
    <motion.div className="grid grid-cols-[100%] item-center gap-7  ">
      {/* <motion.span
        initial={{
          scale: 1,
          height: "20px",
          width: "20px",
          fontSize: "0",
          background: "transparent",
          border: "1px solid #f18350",
        }}
        animate={
          inView
            ? {
                scale: 1.1,
                height: "30px",
                width: "30px",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid white",
              }
            : {
                scale: 1,
                height: "20px",
                width: "20px",
                fontSize: "0",
                background: "transparent",
                border: "1px solid #f18350",
              }
        }
        transition={{
          duration: 1,
          delay: 1,
          type: "spring",
          damping: 50,
          stiffness: 100,
        }}
        className="flex text-2xl h-[40px] w-[40px] rounded-full text-white font-semibold bg-transparent border-[1px] px-2 py-2 items-center justify-center"
      >
        1
      </motion.span> */}
      <motion.div
        className="flex flex-col justify-center gap-6 overflow-hidden"
        ref={ref}
        initial={{ y: 160, opacity: 0 }}
        animate={
          inView
            ? {
                y: 0,
                opacity: 1,
              }
            : { y: 160, opacity: 0 }
        }
        transition={{ duration: 1, delay: 0, type: "spring" }}
      >
        <h3 className="text-5xl text-white font-semibold max-sm:text-[27px] mt-1  ">
          Live Project <span className="text-[#f18350]"> Sessions</span>
        </h3>
        <div className="flex flex-col gap-3 ml-2">
          <p className="grid grid-cols-[8%,89%] gap-3 text-[20px] item-center text-white max-[361px]:text-[16px]">
            <FaCircleCheck className="text-[#10c168] text-[18px] max-[361px]:text-[16px]" />{" "}
            Live interactive sessions
          </p>
          <p className="grid grid-cols-[8%,89%] items-center gap-3 text-[20px] text-white max-[361px]:text-[16px]">
            <FaCircleCheck className="text-[#10c168] text-[18px] max-[361px]:text-[16px]" />{" "}
            Multi-domain projects
          </p>
          <p className="grid grid-cols-[8%,89%] items-center gap-3 text-[20px] text-white max-[361px]:text-[16px]">
            <FaCircleCheck className="text-[#10c168] text-[18px] max-[361px]:text-[16px]" />
            Weekly sessions
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FirstFeature;
