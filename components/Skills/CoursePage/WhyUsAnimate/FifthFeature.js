import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
const FifthFeature = () => {
  const [ref, inView] = useInView();
  console.log(inView);
  return (
    <motion.div className="grid grid-cols-[8%,81%] item-center gap-7 ">
      <motion.span
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
                scale: 1.3,
                height: "30px",
                width: "30px",
                fontSize: "25px",
                background: "#f18359",
                border: "0",
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
        5
      </motion.span>
      <motion.div
        className="flex flex-col justify-center gap-3"
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
        <h3 className="text-5xl text-white font-semibold max-sm:text-2xl">
          High learner <span className="text-[#f18350]">satisfication</span>
        </h3>
        <div className="flex flex-col gap-3 ">
          <p className="grid grid-cols-[10%,89%] gap-3 text-[20px] text-white ">
            <FaCircleCheck className="text-[#10c168] text-[18px]" /> 4.9/5
            rating in Course Report
          </p>
          <p className="grid grid-cols-[10%,89%] gap-3 text-[20px] text-white ">
            <FaCircleCheck className="text-[#10c168] text-[18px]" /> 4.8/5
            rating in switchup
          </p>
          <p className="grid grid-cols-[10%,89%] gap-3 text-[20px] text-white ">
            <FaCircleCheck className="text-[#10c168] text-[18px]" />
            4.7/5 rating in google
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FifthFeature;
