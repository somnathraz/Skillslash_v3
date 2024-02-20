import React, { useRef } from "react";
import FirstFeature from "./FirstFeature";
import SecondFeature from "./SecondFeature";
import ThirdFeature from "./ThreeFeature";
import FourthFeature from "./FourthFeature";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const WhyUsAnimate = ({ redirectDa, redirectDs, home, redirectFs }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const imageSrc = [
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/Certificate+Of+Internship.webp",
    // Add other image URLs as needed
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/project-experience.webp",
    redirectDa
      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/microsoft-data-analytics.webp"
      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/microsft-data-science.webp",
  ];
  return (
    <>
      <div
        className="hidden max-sm:flex flex-col px-5 py-5 bg-[#111621] gap-5 mt-[40px]"
        ref={ref}
      >
        <h2 className="text-2xl font-bold text-white max-sm:text-3xl max-sm:mb-0 mt-[20px] max-[361px]:text-[24px]">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-[60%,38%] gap-8 max-sm:flex max-sm:flex-col">
          <div className="flex flex-col gap-8 relative mt-[20px] pb-[120px] ">
            <div className="flex flex-col relative z-10 gap-[50px] ml-2">
              <div>
                <FirstFeature />
              </div>
              <div>
                <SecondFeature />
              </div>
              {redirectFs ? (
                ""
              ) : (
                <div className="h-[160px]">
                  <ThirdFeature />
                </div>
              )}
              <div>
                <FourthFeature />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        {(redirectDs || home) && (
          <div className="hidden max-sm:flex flex-col relative px-28 max-sm:px-5  max-[1281px]:px-24  items-center gap-10 pb-[10px]  pt-10 ">
            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-3xl text-[#4f419a] font-bold">
                Triple Certification
              </h3>
              <div className="grid grid-cols-1 gap-3 items-center">
                <div className="bg-white shadow rounded-lg px-7 py-4 flex flex-col gap-3 min-[481px]:w-[75%]">
                  <div className="relative w-full h-[180px]  ">
                    <Image src={imageSrc[2]} fill alt="certificate image" />
                  </div>
                  <h3 className="font-bold">Microsoft Certificate</h3>
                  <p>
                    Enhance your resume and LinkedIn profile with the
                    certificate from global leader in this technology.
                  </p>
                </div>

                <div className="bg-white shadow rounded-lg px-7 py-4 flex flex-col gap-3 min-[481px]:w-[75%]">
                  <div className="relative w-full h-[180px]  ">
                    <Image src={imageSrc[1]} fill alt="certificate image" />
                  </div>
                  <h3 className="font-bold">Project Experience Certificate</h3>
                  <p>
                    Micro validation of your internship experience from
                    Skill-AI, showcase the hiring manager the list of real-life
                    projects you
                  </p>
                </div>
                <div className="bg-white shadow rounded-lg px-7 py-4 flex flex-col gap-3 min-[481px]:w-[75%]">
                  <div className="relative w-full h-[180px]  ">
                    <Image src={imageSrc[0]} fill alt="certificate image" />
                  </div>
                  <h3 className="font-bold"> Internship Certificate</h3>
                  <p>
                    Showcase experience to recruiters with internship
                    certificate from Skill-AI. Stand out of the crowd with
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhyUsAnimate;
