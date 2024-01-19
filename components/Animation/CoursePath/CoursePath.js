import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { BiSolidVideos } from "react-icons/bi";
import { MdQuestionMark } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
function YourComponent() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <div
      className="h-[1800px] max-sm:h-[2320px] px-28 py-10 bg-[#fff7f3] flex flex-col max-sm:px-5 max-sm:py-5"
      ref={ref}
    >
      <h2 className="text-[#FDDACE] text-8xl max-sm:text-3xl font-bold uppercase text-left ml-7 max-sm:ml-0 max-sm:text-center">
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
        <div className="bg-white shadow rounded-2xl px-14 pt-14 max-sm:pt-[180px] pb-14 max-sm:pb-10 z-40 relative ml-48 max-sm:ml-0 mt-10 max-sm:mt-16 w-[85%] max-sm:w-[100%]">
          {/* <div className="absolute bg-[#EEEBFF] top-10 max-sm:top-[160px] left-0 font-medium px-4 py-1 rounded-r-2xl">
            For Professionals
          </div> */}
          <div className="flex flex-col gap-4">
            <div className="px-3 py-2 bg-[#EEEBFF] rounded w-[31%] max-sm:w-[70%]">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/powered+by+microsoft.png"
                alt="PoweredByMicrosoft"
                width={mobile ? 180 : 230}
                height={mobile ? 19 : 24}
              />
            </div>
            <h3 className="text-4xl max-sm:text-2xl font-bold text-[#f18350] w-[70%] max-sm:w-[100%]">
              Data Science & AI Bootcamp
            </h3>
            <p className="text-black font-medium ">Why this bootcamp?</p>
            <div className="flex gap-8 max-sm:flex-col max-sm:gap-3">
              <div className="flex flex-col gap-7 max-sm:gap-3">
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
              <div className="flex flex-col gap-7 max-sm:gap-3">
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
            <div className="flex max-sm:flex-col gap-5 max-sm:gap-3 items-center max-sm:items-start">
              <div>
                <p className="font-semibold flex gap-4 items-center text-[#f18350] text-2xl mt-4 max-sm:mt-3">
                  ₹5,999{" "}
                  <span className=" text-[#4D4D4D] line-through text-lg max-sm:text-[16px] max-sm:font-">
                    ₹11,999
                  </span>
                </p>
              </div>
              <Link href="/selfpaced/data-science-&-aI-bootcamp">
                <button className="bg-[#f18350] px-3 py-1 mt-4 max-sm:mt-0 max-sm:w-full max-sm:justify-center max-sm:py-2">
                  Explore Bootcamp
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute right-[-150px] top-[50px] max-sm:left-[10px] max-sm:top-[-60px] max-sm:right-[10px] max-sm:flex max-sm:items-center max-sm:justify-center ">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/data-science-header.png"
              alt="data-science-course"
              height={294}
              width={mobile ? 290 : 416}
            />
          </div>
        </div>
        <motion.svg
          className="absolute w-max h-[500px] z-0  top-[23.4%] right-[-17%] max-sm:hidden"
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
        <div className="bg-white shadow rounded-2xl px-14 pt-14 max-sm:pt-[180px] pb-14 max-sm:pb-10 z-40 relative ml-56 max-sm:ml-0 mt-32  w-[85%] flex items-end justify-end max-sm:justify-start max-sm:w-[100%]">
          {/* <div className="absolute bg-[#EEEBFF] top-10 max-sm:top-[160px] right-0 font-medium px-4 py-1 rounded-l-2xl">
            For Non-Tech Professionals
          </div> */}
          <div className="flex flex-col gap-4">
            <div className="px-3 py-2 bg-[#EEEBFF] rounded w-[47%] max-sm:w-[80%]">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/powered+by+microsoft.png"
                alt="PoweredByMicrosoft"
                width={mobile ? 180 : 230}
                height={mobile ? 19 : 24}
              />
            </div>
            <h3 className="text-4xl font-bold text-[#f18350]  max-sm:text-2xl ">
              Data Analytics Bootcamp
            </h3>
            <p className="text-black font-medium ">Why this bootcamp?</p>
            <div className="flex gap-8 max-sm:flex-col max-sm:gap-3">
              <div className="flex flex-col gap-7 max-sm:gap-3">
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
              <div className="flex flex-col gap-7 max-sm:gap-3">
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
            <div className="flex max-sm:flex-col gap-5 max-sm:gap-3 items-center max-sm:items-start">
              <div>
                <p className="font-semibold flex gap-4 items-center text-[#f18350] text-2xl mt-4 max-sm:mt-3">
                  ₹3,999{" "}
                  <span className=" text-[#4D4D4D] line-through text-lg max-sm:text-[16px] max-sm:font-">
                    ₹7,999
                  </span>
                </p>
              </div>
              <Link href="/selfpaced/data-analytics-bootcamp">
                <button className="bg-[#f18350] px-3 py-1 mt-4 max-sm:mt-0 max-sm:w-full max-sm:justify-center max-sm:py-2">
                  Explore Bootcamp
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute left-[-165px] top-[52px] max-sm:left-[10px] max-sm:top-[-60px] max-sm:right-[10px] max-sm:flex max-sm:items-center max-sm:justify-center">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/data-analytics-header.png"
              alt="data-science-course"
              height={294}
              width={mobile ? 290 : 416}
            />
          </div>
        </div>
        <motion.svg
          className="absolute w-max h-[470px] z-0 left-20 top-[56%] max-sm:hidden"
          preserveAspectRatio="xMidYMax meet"
        >
          <motion.path
            id="backgroundPath"
            fill="none"
            d="M 25 0 V 230 M 25 230 H 170"
            stroke="black"
            strokeDasharray="5 5"
            strokeWidth="2"
            className="z-0"
            // style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            id="animatedPath"
            fill="none"
            d="M 25 -30 V 230 H 170"
            stroke="#f18350"
            strokeWidth="2"
            className="z-10"
            style={{ pathLength: scrollYProgress }}
          />
          <rect
            x="5"
            y="210"
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
          className="z-10 absolute left-[85px] top-[69%] max-sm:hidden"
          alt="data analytics"
        />
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/data-science-for-clg-icon.png"
          width="40"
          height="40"
          className="z-10 absolute top-[37.8%] right-[-16.7%] max-sm:hidden"
          alt="data analytics"
        />
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/job-icon.webp"
          width="40"
          height="40"
          className="z-10 absolute left-[49px] top-[75px] max-sm:hidden"
          alt="data analytics"
        />

        <div className="bg-white shadow rounded-2xl px-14 pt-14 max-sm:pt-[180px] pb-14 max-sm:pb-10 z-40 relative ml-48 max-sm:ml-0 mt-32 max-sm:mt-32 w-[85%] max-sm:w-[100%]">
          {/* <div className="absolute bg-[#EEEBFF] top-10  max-sm:top-[160px] left-0 font-medium px-4 py-1 rounded-r-2xl">
            For Programmers
          </div> */}

          <div className="flex flex-col gap-4">
            <div className="w-[32%] max-sm:w-[100%]">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/FAANG+Software+Developer+as+Trainers.png"
                alt="PoweredByMicrosoft"
                width={230}
                height={24}
              />
            </div>
            <h3 className="text-4xl max-sm:text-2xl font-bold text-[#f18350] w-[70%] max-sm:w-[100%] ">
              DSA & System Design Bootcamp
            </h3>
            <p className="text-black font-medium ">Why this bootcamp?</p>
            <div className="flex gap-8 max-sm:flex-col max-sm:gap-3">
              <div className="flex flex-col gap-7 max-sm:gap-3">
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <BiSolidVideos className="text-[#343434]" />
                  </span>
                  83+ hrs self-pased videos
                </p>
                <p className="flex gap-3 items-center text-sm ">
                  <span className="bg-[#eff1ff] px-1 py-1 rounded-sm">
                    <MdQuestionMark className="text-[#343434]" />
                  </span>
                  Live Doubt clearing session
                </p>
              </div>
              <div className="flex flex-col gap-7 max-sm:gap-3">
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
                  FAANG trainers
                </p>
              </div>
            </div>
            <div className="flex max-sm:flex-col gap-5 max-sm:gap-3 items-center max-sm:items-start">
              <div>
                <p className="font-semibold flex gap-4 items-center text-[#f18350] text-2xl mt-4 max-sm:mt-3">
                  ₹3,999
                  <span className=" text-[#4D4D4D] line-through text-lg max-sm:text-[16px] max-sm:font-">
                    ₹7,999
                  </span>
                </p>
              </div>
              <Link href="/selfpaced/dsa-system-design-bootcamp">
                <button className="bg-[#f18350] px-3 py-1 mt-4 max-sm:mt-0 max-sm:w-full max-sm:justify-center max-sm:py-2">
                  Explore Bootcamp
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute right-[-150px] top-[52px] max-sm:left-[10px] max-sm:top-[-60px] max-sm:right-[10px] max-sm:flex max-sm:items-center max-sm:justify-center">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/dsa+header.png"
              alt="data-science-course"
              height={294}
              width={mobile ? 290 : 416}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourComponent;
