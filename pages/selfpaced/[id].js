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

const DataSciencePage = ({ DataScienceCourseData, country }) => {
  const [showNigeriaForm, setShowNigeriaForm] = useState(false);
  const [actualPrice, setActualPrice] = useState("loading");
  const [offerPrice, setOfferPrice] = useState("loading");

  useEffect(() => {
    if (country === "NG") {
      setShowNigeriaForm(true);
      setActualPrice(DataScienceCourseData.data.header.NigeriaActualPrice);
      setOfferPrice(DataScienceCourseData.data.header.NigeriaOfferPrice);
      console.log("User is in Nigeria. Prices updated.");
    }
    if (country === "IN") {
      setShowNigeriaForm(false);
      setActualPrice(DataScienceCourseData.data.header.actualPrice);
      setOfferPrice(DataScienceCourseData.data.header.offerPrice);
      console.log("User is in India. Prices updated.");
    } else {
      setActualPrice(DataScienceCourseData.data.header.USDActualPrice);
      setOfferPrice(DataScienceCourseData.data.header.USDOfferPrice);
    }
  }, []);

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
        checkoutLink={DataScienceCourseData.data.header.checkoutLink}
        discount={DataScienceCourseData.data.header.discount}
        link={DataScienceCourseData.data.header.link}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
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
      />
      <div id="certificate">
        <WhyUs
          redirectDs={DataScienceCourseData.data.header.dataScience}
          redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        />
      </div>
      <div id="certificate">
        <WhyUsAnimate
          redirectDa={DataScienceCourseData.data.header.dataAnalytics}
          redirectDs={DataScienceCourseData.data.header.dataScience}
          redirectFs={DataScienceCourseData.data.header.FullStack}
        />
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
      <DetailTable
        offerPrice={actualPrice}
        hrs={DataScienceCourseData.data.header.hour}
        otherHr={DataScienceCourseData.data.header.otherHr}
        liveHr={DataScienceCourseData.data.header.liveHr}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectFs={DataScienceCourseData.data.header.FullStack}
      />
      <CTA />
      <div id="modules">
        <DataScienceSyllabus
          NigeriaForm={showNigeriaForm}
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
          noProject={DataScienceCourseData.data.header.noProject}
          redirectBa={DataScienceCourseData.data.header.dataAnalytics}
          heading="Hands-on Projects"
          redirectDs={DataScienceCourseData.data.header.dataScience}
          redirectFs={DataScienceCourseData.data.header.FullStack}
        />
      </div>
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
        checkoutLink={DataScienceCourseData.data.header.checkoutLink}
        offerPrice={offerPrice}
        actualPrice={actualPrice}
        link={DataScienceCourseData.data.header.link}
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
  const fetchLocation = async () => {
    try {
      const response = await fetch(
        "https://ipinfo.io/json?token=0fac06a7890a4e"
      );
      if (response.status === 429) {
        throw new Error("Rate limit exceeded. Too many requests.");
      }
      if (!response.ok) {
        throw new Error(
          `Failed to fetch location: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();

      const { country } = data;

      return country;
    } catch (error) {
      console.log(error);
    }
  };

  const country = await fetchLocation();
  console.log(country, "before");
  return {
    props: {
      DataScienceCourseData,
      country,
    },
  };
}
