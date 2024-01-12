import React, { useEffect, useState, useRef } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { motion, useScroll } from "framer-motion";

const WhyUs = () => {
  const certRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: certRef.current,
  });
  const intervalIdRef = useRef(null);
  const parentIdRef = useRef(null);
  const imageSrc = [
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Certificate/Certificate+Of+Internship.webp",
    // Add other image URLs as needed
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Certificate/theorax-project-certificate.webp",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Certificate/course-certificate.webp",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateState, setAnimateState] = useState(true);
  const variants = {
    initial: { width: "130px" },
    animate: {
      width: "100%",
      scaleX: "100%",
      transition: {
        type: "spring",
        duration: 2,
        delay: 1,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 0,
      },
    },
  };

  useEffect(() => {
    let intervalId;

    if (animateState) {
      intervalId = setInterval(() => {
        // Increment index to change the image
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
      }, 3500);
    } else {
      clearInterval(intervalId);
    }

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, imageSrc]);

  return (
    <div className="py-14 flex flex-col gap-11">
      <h2 className="px-28 text-3xl">Why Choose Us?</h2>
      <div className="px-28 bg-gradient-to-t from-[#f3f1fffe] from-8 0% to-white w-full to-20% flex flex-col h-max">
        <div className="bg-black h-[330px] rounded grid grid-cols-[48%,48.5%] gap-10 pl-16 relative">
          <div className="absolute bottom-0 h-[190px] bg-gradient-to-t from-[#000000] from-10% to-transparent w-[55%] to-70% z-20"></div>
          <div className="relative overflow-x-scroll hideScroll w-[87vw]">
            {/* <div className="absolute top-[-96px] left-5 z-0 h-[800px]">
              <hr className=" w-[1px] bg-white z-[0] h-[800px]" />
            </div> */}
            <div className="absolute top-[0px] h-[666px] left-5 z-10">
              <motion.svg
                preserveAspectRatio="xMidYMax meet"
                className="h-[100%] w-[1px]"
                viewBox="0 0 1 666"
              >
                <motion.path
                  id="animatedPath1"
                  fill="none"
                  d="M 0 0 V 667"
                  stroke="white"
                  strokeWidth="4"
                  className="z-10"
                />
                <motion.path
                  id="animatedPath1"
                  fill="none"
                  d="M 0 0 V 667"
                  stroke="#f1830"
                  strokeWidth="4"
                  className="z-10"
                  pathLength={1}
                  style={{ pathLength: scrollYProgress }}
                />
              </motion.svg>
            </div>
            <motion.div className="relative h-[130px]">
              <div className="flex gap-10  z-10 relative mt-[50px]">
                <div className="flex h-max items-center">
                  <div className="border-[1px] border-white bg-black rounded-full h-[40px] w-[40px] flex items-center justify-center ">
                    <FaRegCirclePlay className="text-white text-3xl" />
                  </div>
                  <div className="flex text-white gap-2 h-max items-center">
                    <hr className="bg-white w-[30px] ml-2" />
                    <span>::</span>
                  </div>
                </div>
                <div className="text-[#e1e1e1] flex flex-col gap-2">
                  <h3 className="text-white text-[28px] font-bold">
                    <span className="text-[#f18350]">Live Doubt </span> Clearing
                    Session
                  </h3>
                  <li>350+ hours of Live class recorded sessions</li>
                  <li>Get advanced level knowledge of all the concepts</li>
                  <li>Learn all the modules from the industry-experts</li>
                </div>
              </div>
            </motion.div>
            <motion.div className="relative ">
              <div className="flex gap-10 mt-8 z-10 relative">
                <div className="flex h-max items-center">
                  <div className="border-[1px] border-white bg-black rounded-full h-[40px] w-[40px] flex items-center justify-center ">
                    <FaRegCirclePlay className="text-white text-3xl" />
                  </div>
                  <div className="flex text-white gap-2 h-max items-center">
                    <hr className="bg-white w-[30px] ml-2" />
                    <span>::</span>
                  </div>
                </div>
                <div className="text-[#e1e1e1]">
                  <h3 className="text-white text-[28px] font-bold">
                    <span className="text-[#f18350]">Recorded</span> Sessions
                  </h3>
                  <li>350+ hours of Live class recorded sessions</li>
                  <li>Get advanced level knowledge of all the concepts</li>
                  <li>Learn all the modules from the industry-experts</li>
                </div>
              </div>
            </motion.div>
            <motion.div className="relative ">
              <div className="flex gap-10 mt-8 z-10 relative">
                <div className="flex h-max items-center">
                  <div className="border-[1px] border-white bg-black rounded-full h-[40px] w-[40px] flex items-center justify-center ">
                    <FaRegCirclePlay className="text-white text-3xl" />
                  </div>
                  <div className="flex text-white gap-2 h-max items-center">
                    <hr className="bg-white w-[30px] ml-2" />
                    <span>::</span>
                  </div>
                </div>
                <div className="text-[#e1e1e1]">
                  <h3 className="text-white text-[28px] font-bold">
                    <span className="text-[#f18350]">Mock Tests </span> and
                    Assignment
                  </h3>
                  <li>350+ hours of Live class recorded sessions</li>
                  <li>Get advanced level knowledge of all the concepts</li>
                  <li>Learn all the modules from the industry-experts</li>
                </div>
              </div>
            </motion.div>
            <motion.div className="relative h-[160px] ">
              <div className="flex gap-10 mt-8 z-10 relative">
                <div className="flex h-max items-center">
                  <div className="border-[1px] border-white bg-black rounded-full h-[40px] w-[40px] flex items-center justify-center ">
                    <FaRegCirclePlay className="text-white text-3xl" />
                  </div>
                  <div className="flex text-white gap-2 h-max items-center">
                    <hr className="bg-white w-[30px] ml-2" />
                    <span>::</span>
                  </div>
                </div>
                <div className="text-[#e1e1e1]">
                  <h3 className="text-white text-[28px] font-bold">
                    <span className="text-[#f18350]">Live Project </span>
                    Session
                  </h3>
                  <li>350+ hours of Live class recorded sessions</li>
                  <li>Get advanced level knowledge of all the concepts</li>
                  <li>Learn all the modules from the industry-experts</li>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="relative h-[415px] mt-[-85px]">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/why-us-image.webp"
              alt="why choose"
              fill
            />
          </div>
        </div>
        <div
          className="grid grid-cols-[40%,57%] relative px-36 h-[350px] items-center gap-10 pb-[60px] pt-10"
          ref={certRef}
        >
          <div className="absolute top-[0px] h-[666px] left-[80px] z-10">
            <motion.svg
              preserveAspectRatio="xMidYMax meet"
              className="h-[470px] w-[650px]"
            >
              <motion.path
                id="animatedPath1"
                fill="none"
                d="M 5 0 V 367  Q 5 380, 20 380 H 520 Q 540 380, 540 390 V 440"
                stroke="black"
                strokeWidth="2"
                className="z-10"
              />
              <motion.path
                id="animatedPath1"
                fill="none"
                d="M 5 0 V 367  Q 5 380, 20 380 H 520 Q 540 380, 540 390 V 440"
                stroke="#f18350"
                strokeWidth="2"
                className="z-10"
                pathLength={1}
                style={{ pathLength: scrollYProgress }}
              />
              <circle
                cx="540"
                cy="450"
                r="10"
                fill="none"
                stroke="black"
                strokeWidth={1}
              />
              <motion.circle
                cx="540"
                cy="450"
                r="10"
                fill="none"
                stroke="#f18350"
                strokeWidth={1}
                pathLength={1}
                className="z-10"
                style={{ pathLength: scrollYProgress }}
              />
            </motion.svg>
          </div>
          <div
            onMouseEnter={() => setAnimateState(false)}
            onMouseLeave={() => setAnimateState(true)}
            className="absolute top-0  z-10 h-full w-full flex items-end justify-end"
          >
            {animateState ? (
              <motion.div
                ref={intervalIdRef}
                id="slide"
                variants={variants}
                initial="initial"
                animate="animate"
                onMouseEnter={() => setAnimateState(false)}
                onMouseOver={() => setAnimateState(false)}
                onMouseLeave={() => setAnimateState(true)}
                className="bg-[#0000005e] h-full border-l-8 border-black relative z-10"
              >
                <div className="h-[40px] w-10 bg-black flex items-center justify-center z-20 absolute top-[41%] left-[-25px] rounded-full">
                  <IoIosArrowBack className="text-3xl text-white" />
                </div>
              </motion.div>
            ) : (
              <div className="bg-[#0000005e] w-[130px] h-full border-l-8 border-black relative z-10">
                <div className="h-[40px] w-10 bg-black flex items-center justify-center z-20 absolute top-[41%] left-[-25px] rounded-full">
                  <IoIosArrowBack className="text-3xl text-white" />
                </div>
              </div>
            )}
          </div>

          <div className="relative w-full h-full">
            <Image src={imageSrc[currentIndex]} fill alt="certificate image" />
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-4xl text-[#4f419a] font-bold">
              Triple Certification
            </h3>
            <div className="flex flex-col gap-2">
              <p>Internship certification from Analytics Consulting Firm.</p>
              <p>
                Project experience certifications from Analytics Consulting
                Firm.
              </p>
              <p>Course Completion certification.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
