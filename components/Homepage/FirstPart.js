import dynamic from "next/dynamic";
import HomeFirstSection from "../FirstSection/HomeFirstSection";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import WhyUs from "../WhyUs/WhyUs";
import CoursePath from "../Animation/CoursePath/CoursePath";
import CourseSlider from "../CourseSlider/CourseSlider";
import Slider from "../Animation/Slider/Slider";
import WhyUsAnimate from "../Skills/CoursePage/WhyUsAnimate/WhyUsAnimate";
const ProgramInfo = dynamic(() => import("../Course/ProgramInfo/ProgramInfo"));
// const BoxAnimation = dynamic(() => import("../BoxAnimation/BoxAnimation"));

const FirstPart = ({ homePage }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <>
      <HomeFirstSection
        deskTopPara="India’s 1st"
        mTopPara="India’s 1st"
        title="Project Based Experiential Learning Platform"
        spanTitleText=""
        homePage={homePage}
        desc="Get real work experience and certifications. Learn from industry experts and get placed in top product companies!"
        backgroundImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/header-home-page-skillslash.webp"
        rightImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/skillslash-first-header-side.webp"
        iconImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/HomepageDataCollection.webp"
        usp1=" Live Interactive "
        usp2=" Company "
        usp3=" Microsoft"
        usp4=" 100% Interview"
        usp1Span="Classroom"
        usp2Span="Exp Certifications"
        usp3Span="Certification"
        usp4Span="Guarantee"
        width="405"
        height="404"
      />

      <ProgramInfo homePage={homePage} />
      <Slider />
      <CoursePath />
      <CourseSlider />
      <div ref={ref}>
        <WhyUs scrollYProgress={scrollYProgress} home={true} />
      </div>
      <WhyUsAnimate home={true} />
      {/* <BoxAnimation /> */}
    </>
  );
};

export default FirstPart;
