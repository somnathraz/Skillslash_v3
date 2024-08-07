import Header from "../../components/Skills/CoursePage/Header/Header";
import DataScienceSyllabus from "../../components/Skills/CoursePage/SeoSyllabus/SeoSyllabus";
import Navbar from "../../components/Navbar/Navbar";
import ProjectSlider from "../../components/Skills/Global/Project/ProjectSlider";
import Head from "next/head";
import React from "react";
import { useState, useEffect } from "react";
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
import BottomPrice from "../../components/Skills/BottomPrice/BottomPrice";
import SkillsContent from "../../components/Skills/CoursePage/SkillsContent/SkillsContent";
import PricingSection from "../../components/Skills/CoursePage/PricingSection/PricingSection"
import CareerSupport from "../../components/Skills/CoursePage/CareerSupport/CareerSupport"
import ToolsCovered from "../../components/Skills/CoursePage/ToolsCovered/ToolsCovered";
import PriceCompare from "../../components/Skills/CoursePage/PriceCompare/PriceCompare";

const DataSciencePage = ({ DataScienceCourseData, }) => {
  const [showNigeriaForm, setShowNigeriaForm] = useState(false);
  const [actualPrice, setActualPrice] = useState(
    DataScienceCourseData.data.header.actualPrice
  );
  const [offerPrice, setOfferPrice] = useState(
    DataScienceCourseData.data.header.offerPrice
  );
  const [link, setLink] = useState(
    DataScienceCourseData.data.header.indCheckout
  );

  // useEffect(() => {
  //   const fetchLocation = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://ipinfo.io/json?token=0fac06a7890a4e"
  //       );
  //       if (response.status === 429) {
  //         throw new Error("Rate limit exceeded. Too many requests.");
  //       }
  //       if (!response.ok) {
  //         throw new Error(
  //           `Failed to fetch location: ${response.status} ${response.statusText}`
  //         );
  //       }
  //       const data = await response.json();
  //       console.log("API Response:", data);
  //       const { country } = data;

  //       if (country === "NG") {
  //         setShowNigeriaForm(true);
  //         setActualPrice(DataScienceCourseData.data.header.NigeriaActualPrice);
  //         setOfferPrice(DataScienceCourseData.data.header.NigeriaOfferPrice);
  //         setLink(DataScienceCourseData.data.header.ngCheckout);

  //         console.log("User is in Nigeria. Prices updated.");
  //       }
  //       if (country === "IN") {
  //         setShowNigeriaForm(false);
  //         setActualPrice(DataScienceCourseData.data.header.actualPrice);
  //         setOfferPrice(DataScienceCourseData.data.header.offerPrice);
  //         setLink(DataScienceCourseData.data.header.indCheckout);

  //         console.log("User is in India. Prices updated.");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchLocation();
  // }, [link]);

  return (
    <div>
      <Head>
        <title>{DataScienceCourseData.data.header.title}</title>
        <meta
          name="description"
          content={DataScienceCourseData.data.header.desc}
        />
      </Head>
      <Navbar
        link={DataScienceCourseData.data.header.link}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        redirectFs={DataScienceCourseData.data.header.FullStack}
      />
      <Header
        title={DataScienceCourseData.data.header.title}
        desc={DataScienceCourseData.data.header.desc}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        imgSrc={DataScienceCourseData.data.header.imgSrc}
        hrs={DataScienceCourseData.data.header.hour}
        certification={DataScienceCourseData.data.header.certification}
        offerPrice={offerPrice}
        actualPrice={actualPrice}
        checkoutLink={link}
        discount={DataScienceCourseData.data.header.discount}
        link={DataScienceCourseData.data.header.link}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        nomicrosoft={DataScienceCourseData.data.header.nomicrosoft}
      />
      <Learn
        firstPoint={DataScienceCourseData.data.header.firstPoint}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        secondPoint={DataScienceCourseData.data.header.secondPoint}
        thirdPoint={DataScienceCourseData.data.header.thirdPoint}
        fourthPoint={DataScienceCourseData.data.header.fourthPoint}
      />
      <SkillsContent
        certification={DataScienceCourseData.data.header.certification}
        hrs={DataScienceCourseData.data.header.hour}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        nomicrosoft={DataScienceCourseData.data.header.nomicrosoft}

      /> 
      <PricingSection
        offerPrice={offerPrice}
        actualPrice={actualPrice}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        checkoutLink={DataScienceCourseData.data.header.indCheckout}
      />
      <CareerSupport />
      <div id="modules">
        <DataScienceSyllabus
          NigeriaForm={showNigeriaForm}
          title={DataScienceCourseData.data.header.title}
          seoSyllabus={DataScienceCourseData.data.seoSyllabus}
          heading="Syllabus"
          hour={DataScienceCourseData.data.header.hour}
          redirectFs={DataScienceCourseData.data.header.FullStack}
          redirectDs={DataScienceCourseData.data.header.dataScience}
          redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        />
      </div>
      <ToolsCovered />
      <WhyUsAnimate
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        nomicrosoft={DataScienceCourseData.data.header.nomicrosoft}
      />

      <div id="projects">
        <ProjectSlider
          noProject={DataScienceCourseData.data.header.noProject}
          redirectBa={DataScienceCourseData.data.header.dataAnalytics}
          heading="Hands-on Projects"
          redirectDs={DataScienceCourseData.data.header.dataScience}
          redirectFs={DataScienceCourseData.data.header.FullStack}
        />
      </div>
      <PriceCompare
        hrs={DataScienceCourseData.data.header.hour}
        offerPrice={offerPrice}
        otherHr={DataScienceCourseData.data.header.otherHr}
        liveHr={DataScienceCourseData.data.header.liveHr}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        nomicrosoft={DataScienceCourseData.data.header.nomicrosoft}
      />
      <div id="certificate">
        <WhyUs
          redirectDs={DataScienceCourseData.data.header.dataScience}
          redirectDa={DataScienceCourseData.data.header.dataAnalytics}
          nomicrosoft={DataScienceCourseData.data.header.nomicrosoft}
        />
      </div>
      {/* <div id="certificate">
        <WhyUsAnimate
          redirectDa={DataScienceCourseData.data.header.dataAnalytics}
          redirectDs={DataScienceCourseData.data.header.dataScience}
          redirectFs={DataScienceCourseData.data.header.FullStack}
        />
      </div> */}
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

      <DetailTable
        offerPrice={actualPrice}
        hrs={DataScienceCourseData.data.header.hour}
        otherHr={DataScienceCourseData.data.header.otherHr}
        liveHr={DataScienceCourseData.data.header.liveHr}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        nomicrosoft={DataScienceCourseData.data.header.nomicrosoft}
      />

      {/* <WhyUsAnimate /> */}
      {/* <CourseDetails hour={DataScienceCourseData.data.header.hour} /> */}

      <div id="faq">
        <FAQ
          heading="Frequently Asked Questions"
          FaqData={DataScienceCourseData.data.FaqDATA}
        />
      </div>
      <Footer />
      <WhatsappButton
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        redirectFs={DataScienceCourseData.data.header.FullStack}
      />
      <BottomPrice
        checkoutLink={DataScienceCourseData.data.header.indCheckout}
        offerPrice={offerPrice}
        actualPrice={actualPrice}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        link={DataScienceCourseData.data.header.link}
        nomicrosoft={DataScienceCourseData.data.header.nomicrosoft}
      />
      {/* <MiddlePopup
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        newDsa={DataScienceCourseData.data.header.newDsa}
        newDs={DataScienceCourseData.data.header.newDs}
      /> */}
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
