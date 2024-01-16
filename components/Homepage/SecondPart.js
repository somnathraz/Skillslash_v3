import React from "react";
import dynamic from "next/dynamic";
import VideoTestimonial from "../VideoTestimonial/VideoTestimonial";
const Reviews = dynamic(() => import("../Review/Reviews"));
const Footer = dynamic(() => import("../Footer/Footer"));

// const Newsletter = dynamic(() => import("../Newsletter/Newsletter"));
const OurEvents = dynamic(() => import("../OurEvents/OurEvents"));

const SecondPart = ({ homePage }) => {
  return (
    <>
      {/* <div className={styles.advantage}>
        <Hiring />
      </div> */}
      <VideoTestimonial
        heading="What is it like to train with us?
"
        spanText="Our learners say it best"
      />
      <Reviews
        home={homePage}
        title="Our Mission Is To Provide World-Class Education"
        desc="Our courses are designed for both students and working professionals. Hear from our students to know more."
      />
      {/* <MiddlePageCta homePage={homePage} /> */}
      <OurEvents />

      {/* <Newsletter /> */}
      <Footer />
    </>
  );
};

export default SecondPart;
