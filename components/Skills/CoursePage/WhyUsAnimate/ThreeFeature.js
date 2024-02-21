import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
const ThirdFeature = () => {
  const [ref, inView] = useInView();
  console.log(inView);
  return (
    <motion.div className="grid grid-cols-[100%] item-center gap-7 ">
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
        className="flex text-3xl h-[40px] w-[40px] rounded-full text-white font-semibold bg-transparent border-[1px] border-[#f18350] items-center justify-center"
      >
        3
      </motion.span> */}
      <motion.div
        className="flex flex-col justify-center gap-7"
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
        transition={{ duration: 1, delay: 1, type: "spring" }}
      >
        <h3 className="text-5xl text-white font-semibold max-sm:text-[27px] mt-1">
          Triple <span className="text-[#f18350]">Certification</span>
        </h3>
        <div className="flex flex-col gap-3 ml-2">
          <p className="grid grid-cols-[10%,89%] gap-3 text-[16px] text-white ">
            <FaCircleCheck className="text-[#10c168] text-[16px]" /> Microsoft
            course completion certificate
          </p>
          <p className="grid grid-cols-[10%,89%] gap-3 text-[16px] text-white ">
            <FaCircleCheck className="text-[#10c168] text-[16px]" /> Project
            experience certificate
          </p>
          <p className="grid grid-cols-[10%,89%] gap-3 text-[16px] text-white ">
            <FaCircleCheck className="text-[#10c168] text-[16px]" />
            Internship certificate
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThirdFeature;
