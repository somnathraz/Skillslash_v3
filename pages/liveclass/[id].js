import Header from "../../components/Skills/CoursePage/Header/Header";
import DataScienceSyllabus from "../../components/Skills/CoursePage/SeoSyllabus/SeoSyllabus";
import Navbar from "../../components/Navbar/Navbar";
import ProjectSlider from "../../components/Skills/Global/Project/ProjectSlider";
import Head from "next/head";
import React from "react";
import { useState, useEffect } from "react";
import { getAllPostIds, getPostData } from "../../lib/dmnewpage";
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
import PricingSection from "../../components/Skills/CoursePage/PricingSection/PricingSection";
import CareerSupport from "../../components/Skills/CoursePage/CareerSupport/CareerSupport";
import ToolsCovered from "../../components/Skills/CoursePage/ToolsCovered/ToolsCovered";
import PriceCompare from "../../components/Skills/CoursePage/PriceCompare/PriceCompare";
import HomeFirstSection from "../../components/FirstSection/HomeFirstSection";
import NewChoose from "../../components/DigitalMarketing/Course/newChoose/NewChoose";
import Tools from "../../components/DigitalMarketing/Course/Tools/Tools";
import Talk from "../../components/DigitalMarketing/Talk/Talk";
import Emi from "../../components/Course/EMI/Emi";

const DataSciencePage = ({ DataScienceCourseData }) => {
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
        redirectDM={DataScienceCourseData.data.header.digitalmarketing}
      />
      {/* <Header
        title={DataScienceCourseData.data.header.title}
        titletwo={DataScienceCourseData.data.header.titletwo}
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
        dmPage={DataScienceCourseData.data.header.dmPage}
        redirectDM={DataScienceCourseData.data.header.digitalmarketing}
        gst={DataScienceCourseData.data.header.gst}
      /> */}
      <HomeFirstSection title={DataScienceCourseData.data.header.title}
      dmPage={DataScienceCourseData.data.header.dmPage}
      spanTitleText={DataScienceCourseData.data.header.spanTitleText}
      redirectDM={DataScienceCourseData.data.header.digitalmarketing}
      />
     
      {/* <Learn
        firstPoint={DataScienceCourseData.data.header.firstPoint}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        secondPoint={DataScienceCourseData.data.header.secondPoint}
        thirdPoint={DataScienceCourseData.data.header.thirdPoint}
        fourthPoint={DataScienceCourseData.data.header.fourthPoint}
        dmPage={DataScienceCourseData.data.header.dmPage}
      /> */}
      <SkillsContent
        certification={DataScienceCourseData.data.header.certification}
        hrs={DataScienceCourseData.data.header.hour}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        redirectDM={DataScienceCourseData.data.header.digitalmarketing}
        nomicrosoft={DataScienceCourseData.data.header.nomicrosoft}
        dmPage={DataScienceCourseData.data.header.dmPage}
      />
      <PricingSection
        offerPrice={offerPrice}
        actualPrice={actualPrice}
        redirectDs={DataScienceCourseData.data.header.dataScience}
        redirectFs={DataScienceCourseData.data.header.FullStack}
        redirectDa={DataScienceCourseData.data.header.dataAnalytics}
        redirectDM={DataScienceCourseData.data.header.digitalmarketing}
        checkoutLink={DataScienceCourseData.data.header.indCheckout}
        dmPage={DataScienceCourseData.data.header.dmPage}
      />
       <NewChoose/>

      <Tools/>
      
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
          redirectDM={DataScienceCourseData.data.header.digitalmarketing}
        />
      </div>
      <div id="fee">
          <Emi
     
            price={DataScienceCourseData.data.Fee.ProPrice}
            emi={DataScienceCourseData.data.Fee.emi}
            redirectDM={DataScienceCourseData.data.header.digitalmarketing}
         
           
       
          />
        </div>
      <div id="projects">
        <ProjectSlider
          noProject={DataScienceCourseData.data.header.noProject}
          redirectBa={DataScienceCourseData.data.header.dataAnalytics}
          heading="Hands-on Projects"
          // redirectDs={DataScienceCourseData.data.header.dataScience}
          redirectFs={DataScienceCourseData.data.header.FullStack}
          redirectDM={DataScienceCourseData.data.header.digitalmarketing}
        />
      </div>

      <div id="certificate">
        <WhyUs
          redirectDs={DataScienceCourseData.data.header.dataScience}
          redirectDa={DataScienceCourseData.data.header.dataAnalytics}
          nomicrosoft={DataScienceCourseData.data.header.nomicrosoft}
          redirectDM={DataScienceCourseData.data.header.digitalmarketing}
          dmPage={DataScienceCourseData.data.header.dmPage}
        />
      </div>
      <div id="certificate">
        <WhyUsAnimate
          redirectDa={DataScienceCourseData.data.header.dataAnalytics}
          redirectDs={DataScienceCourseData.data.header.dataScience}
          redirectFs={DataScienceCourseData.data.header.FullStack}
          dmPage={DataScienceCourseData.data.header.dmPage}
          redirectDM={DataScienceCourseData.data.header.digitalmarketing}
        />
      </div>
      {DataScienceCourseData.data.header.FullStack ? (
        ""
      ) : (
        <VideoTestimonial
          dmPage={DataScienceCourseData.data.header.dmPage}
          redirectDa={DataScienceCourseData.data.header.dataAnalytics}
          redirectDs={DataScienceCourseData.data.header.dataScience}
          heading="What is it like to train with us?"
          spanText="our learners say it best."
        />
      )}
      <div id="faq">
        <FAQ
          heading="Frequently Asked Questions"
          FaqData={DataScienceCourseData.data.FaqDATA}
        />
      </div>
      <Talk/>
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
        dmPage={DataScienceCourseData.data.header.dmPage}
        redirectDM={DataScienceCourseData.data.header.digitalmarketing}
        gst={DataScienceCourseData.data.header.gst}
      />
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
