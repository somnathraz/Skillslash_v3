import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { BiSolidVideos } from "react-icons/bi";
import { MdQuestionMark } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import Image from "next/image";
function YourComponent() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <div
      className="h-[2200px] px-28 py-10 bg-[#fff7f3] flex flex-col max-sm:px-5 max-sm:py-5"
      ref={ref}
    >
      <h2 className="text-[#FDDACE] text-8xl max-sm:text-3xl font-bold uppercase text-left ml-7">
        our bootcamp
      </h2>
      <div className="w-full h-full relative max-w-[1000px] flex flex-col">
        <motion.svg
          className="absolute w-max h-max z-0 left-10 top-0 max-sm:hidden"
          preserveAspectRatio="xMidYMax meet"
        >
          <motion.path
            id="backgroundPath"
            fill="none"
            d="M 30 -30 V 100  M 20 100 H 190"
            stroke="black"
            strokeDasharray="5 5"
            strokeWidth="2"
            className="z-0"
            // style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            id="animatedPath"
            fill="none"
            pathLength={30000}
            d="M 30 -30 V 100 H 990 V 400"
            stroke="#f18350"
            strokeWidth="2"
            className="z-10"
            style={{ pathLength: scrollYProgress }}
          />
          <rect
            x="10"
            y="75"
            width="40"
            height="40"
            stroke="#f18350"
            strokeWidth="1"
            rx="4"
            fill="white"
          />
        </motion.svg>
        <div className="bg-white shadow rounded-2xl px-10  pt-24 pb-14 z-40 relative ml-56 max-sm:ml-0 mt-10 w-[74%] max-sm:w-[100%]">
          <div className="absolute bg-[#EEEBFF] top-10 left-0 font-medium px-4 py-1 rounded-r-2xl">
            For Professionals
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl max-sm:text-2xl font-bold text-[#f18350]">
              Data Science & AI
            </h3>
            <p className="text-black font-medium ">Why this bootcamp?</p>
            <div className="flex gap-8 max-sm:flex-col max-sm:gap-3">
              <div className="flex flex-col gap-7">
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <BiSolidVideos className="text-[#343434]" />
                  </span>
                  228+ hrs videos Lessons
                </p>
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <MdQuestionMark className="text-[#343434]" />
                  </span>
                  Live Doubt clearing session
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <FaChalkboardTeacher className="text-[#343434]" />
                  </span>
                  20 Live instructor-led projects
                </p>
                <p className="flex gap-3 items-center text-sm">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <PiCertificate className="text-[#343434]" />
                  </span>
                  Triple Certification
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div>
                <p className="font-semibold text-[#f18350] text-2xl mt-4">
                  ₹5,999
                </p>
              </div>
              <button className="bg-[#f18350] px-3 py-1 mt-4 ">
                Explore Bootcamp
              </button>
            </div>
          </div>
          <div className="absolute right-[-230px] top-12 max-sm:hidden">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/Data-science-ai-thumbnail.webp"
              alt="data-science-course"
              height={294}
              width={416}
            />
          </div>
        </div>
        <motion.svg
          className="absolute w-max h-[500px] z-0  top-[18.7%] right-[-17%] max-sm:hidden"
          preserveAspectRatio="xMidYMax meet"
        >
          <motion.path
            id="backgroundPath"
            fill="none"
            d="M 275 -30 V 250 M 275 250  H 140"
            stroke="black"
            strokeDasharray="5 5"
            strokeWidth="2"
            className="z-0"
            // style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            id="animatedPath"
            fill="none"
            pathLength={30000}
            d="M 275 -30 V 250 H 140"
            stroke="#f18350"
            strokeWidth="2"
            className="z-10"
            style={{ pathLength: scrollYProgress }}
          />
          <rect
            x="85%"
            y="230"
            width="40"
            height="40"
            stroke="#f18350"
            strokeWidth="1"
            rx="4"
            fill="white"
          />
        </motion.svg>
        <div className="bg-white shadow rounded-2xl px-10  pt-24 pb-14 z-40 relative ml-64 max-sm:ml-0 mt-32 w-[78%] max-sm:w-[100%] flex items-end justify-end">
          <div className="absolute bg-[#EEEBFF] top-10 right-0 font-medium px-4 py-1 rounded-l-2xl">
            For College Students
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold text-[#f18350] max-sm:text-2xl">
              Data Science & AI
            </h3>
            <p className="text-black font-medium ">Why this bootcamp?</p>
            <div className="flex gap-8 max-sm:flex-col max-sm:gap-3">
              <div className="flex flex-col gap-7">
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <BiSolidVideos className="text-[#343434]" />
                  </span>
                  246+ hrs self-paced videos
                </p>
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <MdQuestionMark className="text-[#343434]" />
                  </span>
                  Live Doubt clearing session
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <FaChalkboardTeacher className="text-[#343434]" />
                  </span>
                  10 Live instructor-led projects
                </p>
                <p className="flex gap-3 items-center text-sm">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <PiCertificate className="text-[#343434]" />
                  </span>
                  Triple Certification
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div>
                <p className="font-semibold text-[#f18350] text-2xl mt-4">
                  ₹4,999
                </p>
              </div>
              <button className="bg-[#f18350] px-3 py-1 mt-4 ">
                Explore Bootcamp
              </button>
            </div>
          </div>
          <div className="absolute left-[-230px] top-12 max-sm:hidden">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/Data-science-ai-thumbnail.webp"
              alt="data-science-course"
              height={294}
              width={416}
            />
          </div>
        </div>
        <motion.svg
          className="absolute w-max h-[470px] z-0 left-10 top-[45%] max-sm:hidden"
          preserveAspectRatio="xMidYMax meet"
        >
          <motion.path
            id="backgroundPath"
            fill="none"
            d="M 25 0 V 250 M 25 250 H 120"
            stroke="black"
            strokeDasharray="5 5"
            strokeWidth="2"
            className="z-0"
            // style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            id="animatedPath"
            fill="none"
            d="M 25 -30 V 250 H 120"
            stroke="#f18350"
            strokeWidth="2"
            className="z-10"
            style={{ pathLength: scrollYProgress }}
          />
          <rect
            x="5"
            y="230"
            width="40"
            height="40"
            stroke="#f18350"
            strokeWidth="1"
            rx="4"
            fill="white"
          />
        </motion.svg>
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/data-analytics-non-tech-pro.png"
          width="40"
          height="40"
          className="z-10 absolute left-[45px] top-[56.4%] max-sm:hidden"
          alt="data analytics"
        />
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/data-science-for-clg-icon.png"
          width="40"
          height="40"
          className="z-10 absolute top-[30.1%] right-[-16.7%] max-sm:hidden"
          alt="data analytics"
        />
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/job-icon.webp"
          width="40"
          height="40"
          className="z-10 absolute left-[49px] top-[75px] max-sm:hidden"
          alt="data analytics"
        />
        <div className="bg-white shadow rounded-2xl px-10  pt-24 pb-14 z-40 relative ml-36 max-sm:ml-0 mt-32 w-[78%] max-sm:w-[100%] ">
          <div className="absolute bg-[#EEEBFF] top-10 left-0 font-medium px-4 py-1 rounded-r-2xl">
            For Non-Tech Professionals
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold text-[#f18350] max-sm:text-2xl">
              Data Analytics course
            </h3>
            <p className="text-black font-medium ">Why this bootcamp?</p>
            <div className="flex gap-8 max-sm:flex-col max-sm:gap-3">
              <div className="flex flex-col gap-7">
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <BiSolidVideos className="text-[#343434]" />
                  </span>
                  206+ hrs videos Lessons
                </p>
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <MdQuestionMark className="text-[#343434]" />
                  </span>
                  Live Doubt clearing session
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <FaChalkboardTeacher className="text-[#343434]" />
                  </span>
                  10 Live instructor-led projects
                </p>
                <p className="flex gap-3 items-center text-sm">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <PiCertificate className="text-[#343434]" />
                  </span>
                  Triple Certification
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div>
                <p className="font-semibold text-[#f18350] text-2xl mt-4">
                  ₹3,999
                </p>
              </div>
              <button className="bg-[#f18350] px-3 py-1 mt-4 ">
                Explore Bootcamp
              </button>
            </div>
          </div>
          <div className="absolute right-[-230px] top-12 max-sm:hidden">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/Data-science-ai-thumbnail.webp"
              alt="data-science-course"
              height={294}
              width={416}
            />
          </div>
        </div>
        <motion.svg
          className="absolute w-max h-[500px] z-0  top-[68.4%] right-[-12%] max-sm:hidden"
          preserveAspectRatio="xMidYMax meet"
        >
          <motion.path
            id="backgroundPath"
            fill="none"
            d="M 275 -30 V 250 M 275 250  H 10"
            stroke="black"
            strokeDasharray="5 5"
            strokeWidth="2"
            className="z-0"
            // style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            id="animatedPath"
            fill="none"
            pathLength={30000}
            d="M 275 -30 V 250 H 10"
            stroke="#f18350"
            strokeWidth="2"
            className="z-10"
            style={{ pathLength: scrollYProgress }}
          />
          <rect
            x="85%"
            y="230"
            width="40"
            height="40"
            stroke="#f18350"
            strokeWidth="1"
            rx="4"
            fill="white"
          />
        </motion.svg>
        <div className="bg-white shadow rounded-2xl px-10  pt-24 pb-14 z-40 relative ml-64 max-sm:ml-0 mt-32 w-[78%] flex items-end justify-end max-sm:w-[100%]">
          <div className="absolute bg-[#EEEBFF] top-10 right-0 font-medium px-4 py-1 rounded-l-2xl">
            For Programmers
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-4xl max-sm:text-2xl font-bold text-[#f18350] ">
              DSA + SD (FAANG)
            </h3>
            <p className="text-black font-medium ">Why this bootcamp?</p>
            <div className="flex gap-8 max-sm:flex-col max-sm:gap-3">
              <div className="flex flex-col gap-7">
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <BiSolidVideos className="text-[#343434]" />
                  </span>
                  83+ hrs self-paced videos
                </p>
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <MdQuestionMark className="text-[#343434]" />
                  </span>
                  Live Doubt clearing session
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <FaChalkboardTeacher className="text-[#343434]" />
                  </span>
                  12 Live instructor-led projects
                </p>
                <p className="flex gap-3 items-center text-sm">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <PiCertificate className="text-[#343434]" />
                  </span>
                  FAANG Trainers
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div>
                <p className="font-semibold text-[#f18350] text-2xl mt-4">
                  ₹5,999
                </p>
              </div>
              <button className="bg-[#f18350] px-3 py-1 mt-4 ">
                Explore Bootcamp
              </button>
            </div>
          </div>
          <div className="absolute left-[-230px] top-12 max-sm:hidden">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/Data-science-ai-thumbnail.webp"
              alt="data-science-course"
              height={294}
              width={416}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourComponent;
