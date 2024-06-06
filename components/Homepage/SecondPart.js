import React from "react";
import dynamic from "next/dynamic";
import VideoTestimonial from "../VideoTestimonial/VideoTestimonial";
import Talk from "../DigitalMarketing/Talk/Talk";
import Reviews from "../DigitalMarketing/Reviews/Reviews";

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
<Reviews/>
      {/* <MiddlePageCta homePage={homePage} /> */}
      
      {/* <OurEvents /> */}
<Talk/>
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
};

export default SecondPart;
