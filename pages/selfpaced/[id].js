import Header from "../../components/Skills/CoursePage/Header/Header";
import DataScienceSyllabus from "../../components/Skills/CoursePage/SeoSyllabus/SeoSyllabus";
import Navbar from "../../components/Navbar/Navbar";
import ProjectSlider from "../../components/Skills/Global/Project/ProjectSlider";
import Head from "next/head";
import React from "react";
import { getAllPostIds, getPostData } from "../../lib/newPages";
import FAQ from "../../components/Skills/Global/FAQ/FAQ";
import WhyUsAnimate from "../../components/Skills/CoursePage/WhyUsAnimate/WhyUsAnimate";
import WhyUs from "../../components/WhyUs/WhyUs";
import VideoTestimonial from "../../components/VideoTestimonial/VideoTestimonial";
import Reviews from "../../components/Review/Reviews";
import DetailTable from "../../components/Skills/CoursePage/DetailTable/DetailTable";
import Learn from "../../components/Skills/CoursePage/Learn/Learn";
import Footer from "../../components/Footer/Footer";
import WhatsappButton from "../../components/WhatsAppButton/WhatsappButton";
import CTA from "../../components/CTA/CTA";
import CustomPopup from "../../components/Course/OfferPopup/CustomPopup";
import MiddlePopup from "../../components/Course/OfferPopup/MiddlePopup";

const DataSciencePage = ({ DataScienceCourseData }) => {
  const FaqDATA = [
    {
      id: 1,
      ques: "Is this an Advanced level or beginner level course?",

      ans: " Our premium self-paced course leaves no stone unturned in covering all the topics from basic to advanced level. With each module taught in detail by industry experts, you can be confident in your ability to master the content. ",
      open: true,
    },
    {
      id: 2,
      ques: "Can a fresher do this course?",
      ans: "This course is designed to meet the needs of both seasoned professionals and college goers/fresh graduates, providing comprehensive coverage of topics across all levels - from basic to advanced. ",
      open: false,
    },
    {
      id: 3,
      ques: "How can I enroll in this course?",

      ans: "Select the course you are interested in. Navigate to the course page by clicking on 'View Details' for more information. Click on 'Buy Now' to make a purchase. Before buying, feel free to watch the preview and the first video of the course for free.",
      open: false,
    },
    {
      id: 7,
      ques: "What kind of Certification does the Data Science training in Bangalore provide?",

      ans: "Most importantly, by getting our Data science course training in Bangalore, you will not just obtain any ordinary type of certification or academic degree. Instead, we offer a globally recognized real work experience certificate from companies and Microsoft Certification for Data scientist for completing the Data Science training. The firm with which you completed your industrial project can also give you direct certifications. ",
      open: false,
    },
    {
      id: 4,
      ques: " How can I get my doubts cleared?",
      ans: "We host live interactive doubt-clearing sessions led by our instructor during weekends. Additionally, for instant replies to your questions, we offer a community forum where you can post your doubts throughout the day and receive instant clarification.",
      open: false,
    },
    {
      id: 5,
      ques: "Does this course have any live class features?",

      ans: "Yes, we do. The project sessions will be fully instructor-led live interactive sessions.  Additionally, the doubt-clearing sessions are live sessions scheduled to take place on weekends.",
      open: false,
    },
    {
      id: 6,
      ques: "What can I expect from this course?",

      ans: "Access self-paced sessions anytime, led by top faculty and industry experts. Also polish your skills by completing the assignments and tests at the end of each module. All-day doubt-clearing support. You will also get a live doubt-clearing session with the instructor on weekends. Get to work on instructor-led Live Projects during weekends. On completing the Live projects you will be eligible to get a shareable Live Project certification which you can showcase in your resume and LinkedIn profile. Also get an Internship certificate on completing two projects. We support your career by helping you build an impactful professional Resume/CV and LinkedIn profile.",
      open: false,
    },
    {
      id: 10,
      ques: "Is there a time limit to complete this course?",
      ans: "This course has a subscription of 2 years. We expect you to complete the entire course at least within 2 years",
      open: false,
    },
    {
      id: 8,
      ques: "Is there any refund policy?      ",
      ans: "Yes, this course has a refund policy. The refund can be claimed within 3 working days from the purchase of the product. The course should not been accessed by more than 10%.",
      open: false,
    },
    {
      id: 9,
      ques: "Can I access this course on mobile and tablet?",
      ans: "Absolutely! Our platform is designed to be mobile-responsive, allowing you to access and learn from our courses on various devices, including smartphones and tablets.",
      open: false,
    },
    {
      id: 12,
      ques: "How can I do the internship provided along with this bootcamp?",
      ans: "After enrolling, proceed through our self-paced video recordings, and complete quizzes, and assignments. Following that, you'll have access to live project sessions led by our instructors. Upon completion of three live projects, you will get an internship certificate.",
      open: false,
    },
  ];
  return (
    <div>
      <Head>
        <title>{DataScienceCourseData.data.header.title}</title>
        <meta
          name="description"
          content={DataScienceCourseData.data.header.desc}
        />
      </Head>
      <Navbar link={DataScienceCourseData.data.header.link} />
      <Header
        title={DataScienceCourseData.data.header.title}
        desc={DataScienceCourseData.data.header.desc}
        imgSrc={DataScienceCourseData.data.header.imgSrc}
        hrs={DataScienceCourseData.data.header.hour}
        certification={DataScienceCourseData.data.header.certification}
        offerPrice={DataScienceCourseData.data.header.offerPrice}
        actualPrice={DataScienceCourseData.data.header.actualPrice}
        discount={DataScienceCourseData.data.header.discount}
        link={DataScienceCourseData.data.header.link}
        redirectDs={DataScienceCourseData.data.header.dataScience}
      />
      <Learn
        firstPoint={DataScienceCourseData.data.header.firstPoint}
        secondPoint={DataScienceCourseData.data.header.secondPoint}
        thirdPoint={DataScienceCourseData.data.header.thirdPoint}
        fourthPoint={DataScienceCourseData.data.header.fourthPoint}
      />
      <div id="certificate">
        <WhyUs />
      </div>
      <div id="certificate">
        <WhyUsAnimate />
      </div>
      {DataScienceCourseData.data.header.FullStack ? (
        ""
      ) : (
        <VideoTestimonial
          redirectDa={DataScienceCourseData.data.header.dataAnalytics}
          redirectDs={DataScienceCourseData.data.header.dataScience}
          heading="What is it like to train with us?"
          spanText="our learners say it best."
        />
      )}

      <Reviews redirectFs={DataScienceCourseData.data.header.FullStack} />
      <DetailTable offerPrice={DataScienceCourseData.data.header.offerPrice} />
      <CTA />
      <div id="modules">
        <DataScienceSyllabus
          title={DataScienceCourseData.data.header.title}
          seoSyllabus={DataScienceCourseData.data.seoSyllabus}
          heading="Course Modules"
          hour={DataScienceCourseData.data.header.hour}
          redirectFs={DataScienceCourseData.data.header.FullStack}
          redirectDs={DataScienceCourseData.data.header.dataScience}
        />
      </div>
      {/* <WhyUsAnimate /> */}
      {/* <CourseDetails hour={DataScienceCourseData.data.header.hour} /> */}
      <div id="projects">
        <ProjectSlider
          heading="Hands-on Projects"
          redirectDs={DataScienceCourseData.data.header.dataScience}
          redirectFs={DataScienceCourseData.data.header.FullStack}
        />
      </div>
      <div id="faq">
        <FAQ heading="Frequently Asked Questions" FaqData={FaqDATA} />
      </div>
      <Footer />
      <WhatsappButton />
      <MiddlePopup />
    </div>
  );
};

export default DataSciencePage;
export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const DataScienceCourseData = getPostData(params.id);
  return {
    props: {
      DataScienceCourseData,
    },
  };
}
