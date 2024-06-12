import React, { useRef } from "react";
import FirstFeature from "./FirstFeature";
import SecondFeature from "./SecondFeature";
import ThirdFeature from "./ThreeFeature";
import FourthFeature from "./FourthFeature";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const WhyUsAnimate = ({ redirectDa, redirectDs, home, redirectFs, nomicrosoft , redirectDM, dmPage}) => {
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
  const imageSrcselfpaced= [
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/certificate/VISHANT-VERMAWed-Jan-31-2024-12-36-01-GMT-0000--Coordinated-Universal-Time--325722i0gu.pdf.png",
    // Add other image URLs as needed
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/certificate/VISHANT-VERMAWed-Jan-31-2024-12-36-01-GMT-0000--Coordinated-Universal-Time--325722i0gu.pdf.png",
    redirectDa
      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/certificate/VISHANT-VERMAWed-Jan-31-2024-12-36-01-GMT-0000--Coordinated-Universal-Time--325722i0gu.pdf.png"
      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/certificate/VISHANT-VERMAWed-Jan-31-2024-12-36-01-GMT-0000--Coordinated-Universal-Time--325722i0gu.pdf.png",
  ];
  const imageSrcDM = [
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Google-Ads-Display.webp",
    // Add other image URLs as needed
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/meta.jpeg",
    redirectDM
      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/semrush-cer.png"
      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/meta.jpeg",
  ];
  return (
    <>
    {/* <div
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
    </div> */}
    <div className="mb-10">
      {(redirectDs || redirectDM || home) && (
        <div className="hidden max-sm:flex flex-col relative px-28 max-sm:px-5  max-[1281px]:px-24  items-start gap-10 pb-[10px]  pt-10 overflow-scroll">
          <div className="flex flex-col gap-4 items-start">
          {nomicrosoft ?(<>
            <h3 className="text-3xl  font-bold">Course completion Certification</h3>
            <div className="flex grid-cols-[70%,70%,70%] max-[321px]:grid-cols-[60%,60%,60%] gap-2 items-center">
              <div className="bg-black shadow rounded-lg px-7 py-4 flex flex-col gap-3 min-[481px]:w-[75%]">
                <div className="relative w-full h-[180px]  border-[1px] border-white">
                  <Image src={imageSrcselfpaced[2]} fill alt="certificate image"
                   loading="lazy" />
                </div>
                <h3 className="font-bold text-[#f18350]">
                  skillslash Certificate
                </h3>
                <p className="text-white">
                  Enhance your resume and LinkedIn profile with the
                  certificate from globally recognized institute.
                </p>
              </div>

         
            </div></>):(<> 
              <h3 className="text-3xl  font-bold">10+ Certificates</h3>
            <div className="grid grid-cols-[70%,70%,70%] max-[321px]:grid-cols-[60%,60%,60%] gap-2 items-center">
              {dmPage ? (<> 
                   <div className="bg-black shadow rounded-lg px-7 py-4 flex flex-col gap-3 min-[481px]:w-[75%]">
                      <div className="relative w-full h-[180px] border-[1px] border-white   ">
                        <Image
                          src={imageSrcDM[1]}
                          fill
                          alt="certificate image"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="font-bold text-[#f18350]">Meta Certificate</h3>
                      <p className="text-white">
                      Upgrade your resume and LinkedIn with a Meta-certified digital marketing course. Elevate your career with a globally recognized certification.
                      </p>
                    </div></>):(<>  <div className="bg-black shadow rounded-lg px-7 py-4 flex flex-col gap-3 min-[481px]:w-[75%]">
                <div className="relative w-full h-[180px]  border-[1px] border-white">
                  <Image src={imageSrc[2]} fill alt="certificate image"  loading="lazy" />
                </div>
                <h3 className="font-bold text-[#f18350]">
                  Microsoft Certificate
                </h3>
                <p className="text-white">
                  Enhance your resume and LinkedIn profile with the
                  certificate from global leader in this technology.
                </p>
              </div></>)}
            

            {dmPage ? (<><div className="bg-black shadow rounded-lg px-7 py-4 flex flex-col gap-3 min-[481px]:w-[75%]">
                      <div className="relative w-full h-[180px] border-[1px] border-white  ">
                        <Image
                          src={imageSrcDM[0]}
                          fill
                          alt="certificate image"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="font-bold text-[#f18350]">
                      Google Ads Certification
                      </h3>
                      <p className="text-white">
                        Micro validation of your internship experience from
                        Skill-AI, showcase the hiring manager the list of
                        real-life projects you
                      </p>
                    </div></>):(<>  <div className="bg-black shadow rounded-lg px-7 py-4 flex flex-col gap-3 min-[481px]:w-[75%]">
                <div className="relative w-full h-[180px] border-[1px] border-white ">
                  <Image src={imageSrc[1]} fill alt="certificate image"  loading="lazy" />
                </div>
                <h3 className="font-bold text-[#f18350]">
                  Project Experience Certificate
                </h3>
                <p className="text-white">
                  Micro validation of your internship experience from
                  Skill-AI, showcase the hiring manager the list of real-life
                  projects you
                </p>
              </div></>)}
        {dmPage ? (<><div className="bg-black shadow rounded-lg px-7 py-4 flex flex-col gap-3 min-[481px]:w-[75%]">
                      <div className="relative w-full h-[180px]  border-[1px] border-white ">
                        <Image
                          src={imageSrcDM[2]}
                          fill
                          alt="certificate image"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="font-bold text-[#f18350]"> Semrush Certification</h3>
                      <p className="text-white">
                        Showcase experience to recruiters with internship
                        certificate from Skill-AI. Stand out of the crowd with
                        experience.
                      </p>
                    </div></>):(<>      <div className="bg-black shadow rounded-lg px-7 py-4 flex flex-col gap-3 min-[481px]:w-[75%]">
                <div className="relative w-full h-[180px]  border-[1px] border-white">
                  <Image src={imageSrc[1]} fill alt="certificate image"  loading="lazy"/>
                </div>
                <h3 className="font-bold text-[#f18350]">
                  {" "}
                  Internship Certificate
                </h3>
                <p className="text-white">
                  Showcase experience to recruiters with internship
                  certificate from Skill-AI. Stand out of the crowd with
                  experience.
                </p>
              </div></>)}
            </div></>)}
           
          </div>
        </div>
      )}
    </div>
  </>
  );
};

export default WhyUsAnimate;
