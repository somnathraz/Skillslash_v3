/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import dynamic from "next/dynamic";
// const FirstSection = dynamic(() =>
//   import("../components/Course/FirstSection/FirstSection")
// );
import FirstSection from "../components/Course/FirstSection/FirstSection";
const ProgramInfo = dynamic(() =>
  import("../components/Course/ProgramInfo/ProgramInfo")
);
const Certificate = dynamic(() =>
  import("../components/Course/Certificate/Certificate")
);
const ToolsCovered = dynamic(() =>
  import("../components/Course/ToolsCovered/ToolsCovered")
);
const FAQ = dynamic(() => import("../components/Course/FAQ/FAQ"));
const Fee = dynamic(() => import("../components/Course/Fee/Fee"));
const BoxShape = dynamic(() =>
  import("../components/Course/Boxshape/BoxShape")
);
const MGetHired = dynamic(() =>
  import("../components/Course/MGetHired/MGetHired")
);
const TrainerSlider = dynamic(() =>
  import("../components/Course/TrainerSlider/TrainerSlider")
);
const Reviews = dynamic(() => import("../components/Review/Reviews"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const BottomBar = dynamic(() =>
  import("../components/Course/BottomBar/BottomBar")
);
const DataScienceSyllabus = dynamic(() =>
  import("../components/Course/Syllabus/DataScienceSyllabs")
);
// const Navbar = dynamic(() => import("../components/Navbar/Navbar"));
import Navbar from "../components/Navbar/Navbar";
const OfferPopup = dynamic(() =>
  import("../components/Course/OfferPopup/OfferPopup")
);
const Emi = dynamic(() => import("../components/Course/EMI/Emi"));
const BatchDates = dynamic(() => import("../components/Batch/BatchDates"));
const ProjectSlider = dynamic(() =>
  import("../components/Skills/Global/Project/ProjectSlider")
);
const CTA = dynamic(() => import("../components/CTA/CTA"));
const NewPricingTable = dynamic(() =>
  import("../components/Course/NewPricingTable/NewPricingTable")
);
const SeoAbout = dynamic(() =>
  import("../components/SeoComponents/SeoAbout/SeoAbout")
);
const SeoSyllabus = dynamic(() =>
  import("../components/SeoComponents/SeoSyllabus/SeoSyllabus")
);
const SeoCertificate = dynamic(() =>
  import("../components/SeoComponents/SeoCertificate/SeoCertificate")
);

const AboutCourses = dynamic(() =>
  import("../components/AboutCourse/AboutCourse")
);
const CustomPopup = dynamic(() =>
  import("../components/Course/OfferPopup/CustomPopup")
);
const InternalLinking = dynamic(() =>
  import("../components/InternalLinking/InternalLinking")
);
const AutoPopUp = dynamic(() => import("../components/AutoPopUp/AutoPopUp"));
// const SecondNavbar = dynamic(() => import("../components/Navbar/SecondNavbar"));
const FloatIcon = dynamic(() => import("../components/Floticon/FloatIcon"));
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { getAllPostIds, getPostData } from "../lib/page";
import BatchProfile from "../components/Course/BatchProfile/BatchProfile";
import RelatedInfo from "../components/SeoComponents/ReleteadInfo/RelatedInfo";
import MiddlePopup from "../components/Course/OfferPopup/MiddlePopup";
import Header from "../components/Skills/CoursePage/Header/Header";
import Learn from "../components/Skills/CoursePage/Learn/Learn";
import WhyUs from "../components/WhyUs/WhyUs";
import Slider from "../components/Animation/Slider/Slider";
import SkillsContent from "../components/Skills/CoursePage/SkillsContent/SkillsContent";
import PricingSection from "../components/Skills/CoursePage/PricingSection/PricingSection";
import BottomPrice from "../components/Skills/BottomPrice/BottomPrice";
// import Newsletter from "../components/Newsletter/Newsletter";
const VideoTestimonial = dynamic(() =>
  import("../components/VideoTestimonial/VideoTestimonial")
);
const MiddlePageCta = dynamic(() =>
  import("../components/MiddlePageCta/MiddlePageCta")
);

export default function Home({
  DataScienceCourseData,
  //   form,
  // firstSection,
  // programInfo,
  // DataScienceCourseData.data.metaInfo,
  // trainerSlider,
}) {
  // const [DataScienceCourseData, setDataScienceCourseData] = useState("");
  // const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  const redirectDs = DataScienceCourseData.data.form.dataScience;
  const redirectFs = DataScienceCourseData.data.form.FullStack;
  const redirectDSA = DataScienceCourseData.data.form.dsa;
  const redirectWeb = DataScienceCourseData.data.form.webDevelopment;
  const redirectBa = DataScienceCourseData.data.form.BusinessAnalytics;
  const redirectBl = DataScienceCourseData.data.form.blockchain;
  let pageName;
  const [popupData, setPopupData] = useState([]);
  const [batchDateData, setBatchDateData] = useState("");
  const [popupDate, setPopupDate] = useState({
    startDate: "",
    endDate: "",
  });

  // const getHired = useRef();
  // const trainer = useRef();
  // const benefits = useRef();
  // const certificate = useRef();
  // const syllabus = useRef();
  // const project = useRef();
  // const review = useRef();
  // const fee = useRef();
  // const batchDate = useRef();
  // const faq = useRef();
  // const cta = useRef();
  const today = new Date();

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

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width < 641) {
      setMobile(true);
      setTablet(true);
    }
    if (width > 641) {
      setMobile(false);
      setTablet(false);
    }
  }, []);
  //useEffect for fetch popup
  useEffect(() => {
    const fetchPopup = async () => {
      const data = await fetch("/api/v1/fetchPopup", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        if (popData == []) {
          setPopupData({ endDate: "", startDate: "" });
          setPopupData([]);
        }

        popData.map((data, i) => {
          data.page.map((popupData, i) => {
            if (popupData === "Adv Data Science and AI" && redirectDs) {
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
            if (
              popupData === "Blockchain program and certification" &&
              DataScienceCourseData.data.form.blockchain
            ) {
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
            if (
              popupData === "Full Stack Developer course with certification" &&
              redirectFs
            ) {
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });

              setPopupData(data);
              return;
            }
            if (
              popupData === "Business Analytics Program For Professionals" &&
              DataScienceCourseData.data.form.BusinessAnalytics
            ) {
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
            if (
              popupData === "Data Structures and Algorithms + System Design" &&
              redirectDSA
            ) {
              setPopupDate({
                endDate: new Date(data.endDate),
                startDate: new Date(data.startDate),
              });
              setPopupData(data);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);

  //for batch date
  useEffect(() => {
    if (redirectDs) {
      pageName = "Adv Data Science and AI";
    }
    if (redirectFs) {
      pageName = "Full Stack Developer course with certification";
    }
    if (redirectBl) {
      pageName = "Full Stack Developer course with certification";
    }
    if (redirectBa) {
      pageName = "Business Analytics Program For Professionals";
    }
    if (redirectDSA) {
      pageName = "Data Structures and Algorithms + System Design";
    }
    if (redirectWeb) {
      pageName = "Web Development Course";
    }

    const fetchBatch = async () => {
      const data = await fetch("/api/v1/getBatchDate", {
        method: "POST",
        body: JSON.stringify(pageName),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.status === 200) {
        const { batchDate } = await data.json();
        setBatchDateData(batchDate);
      }
    };
    fetchBatch();
  }, []);

  //for pageData
  // useEffect(() => {
  //   const getPageData = async () => {
  //     try {
  //       const data = await fetch("/api/v1/sendPage", {
  //         method: "POST",
  //         body: JSON.stringify(id),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       if (data.status === 200) {
  //         const { DataScienceCourseData } = await data.json();
  //         setDataScienceCourseData(DataScienceCourseData);
  //         // console.log(DataScienceCourseData, "in forntend");
  //       }
  //     } catch (error) {}
  //   };
  //   getPageData();
  // }, []);

  // console.log(DataScienceCourseData.data.SeoCertificate, "test");
  // console.log(
  //   DataScienceCourseData.data.ProjectsPara,
  //   "DataScienceCourseData.data.ProjectsPara11"
  // );

  return (
    <>
      <Head>
        <title>{DataScienceCourseData.data.metaInfo.title}</title>
        <meta
          name="description"
          content={DataScienceCourseData.data.metaInfo.desc}
        />
        <meta
          name="keywords"
          content={DataScienceCourseData.data.metaInfo.keyword}
        />
        <link
          rel="canonical"
          href={DataScienceCourseData.data.metaInfo.canonical}
        />

        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              DataScienceCourseData.data.metaInfo.ReviewSchema
            ),
          }}
        />

        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              DataScienceCourseData.data.metaInfo.ReviewSchema1
            ),
          }}
        />

        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              DataScienceCourseData.data.metaInfo.ReviewSchema2
            ),
          }}
        />

        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              DataScienceCourseData.data.metaInfo.ReviewSchema3
            ),
          }}
        />

        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              DataScienceCourseData.data.metaInfo.ReviewSchema4
            ),
          }}
        />
      </Head>
      <Navbar
        course={true}
        dataScience={false}
        redirectDs={redirectDs}
        redirectFs={redirectFs}
        redirectDe={DataScienceCourseData.data.form.DataEngineering}
        redirectWeb={DataScienceCourseData.data.form.webDevelopment}
        redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
        redirectDSA={DataScienceCourseData.data.form.dsa}
        seoPage={DataScienceCourseData.data.form.seoPage}
      />
      {/* {tablet ? (
        ""
      ) : (
        <SecondNavbar
          getHired={getHired}
          trainer={trainer}
          dataScience={false}
          benefits={benefits}
          certificate={certificate}
          syllabus={syllabus}
          project={project}
          review={review}
          fee={fee}
          course={true}
          batchDate={batchDate}
          faq={faq}
          cta={cta}
          redirectBa={   DataScienceCourseData.data.form.BusinessAnalytics}
          redirectDs={   DataScienceCourseData.data.form.dataScience}
          redirectFs={   DataScienceCourseData.data.form.FullStack}
          redirectDe={   DataScienceCourseData.data.form.DataEngineering}
          redirectWeb={   DataScienceCourseData.data.form.webDevelopment}
          redirectDSA={   DataScienceCourseData.data.form.dsa}
        />
      )} */}

      {popupData != [] ? (
        today >= popupDate.startDate && today <= popupDate.endDate ? (
          <OfferPopup popupData={popupData} />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      {/* {redirectDs || redirectBa ? (
        <CustomPopup
          dataScience={false}
          redirectDs={   DataScienceCourseData.data.form.dataScience}
          redirectFs={   DataScienceCourseData.data.form.FullStack}
          redirectDe={   DataScienceCourseData.data.form.DataEngineering}
          redirectBa={   DataScienceCourseData.data.form.BusinessAnalytics}
          redirectDSA={   DataScienceCourseData.data.form.dsa}
          redirectAI={   DataScienceCourseData.data.form.ai}
          redirectWeb={   DataScienceCourseData.data.form.webDevelopment}
        />
      ) : (
        ""
      )} */}
      <div className={styles.container}>
        <div className="WrapperDiv">
          <Header
            title={DataScienceCourseData.data.header.title}
            desc={DataScienceCourseData.data.header.desc}
            redirectFs={DataScienceCourseData.data.header.FullStack}
            imgSrc={DataScienceCourseData.data.header.imgSrc}
            hrs={DataScienceCourseData.data.header.hour}
            certification={DataScienceCourseData.data.header.certification}
            offerPrice={DataScienceCourseData.data.header.offerPrice}
            actualPrice={DataScienceCourseData.data.header.actualPrice}
            checkoutLink={DataScienceCourseData.data.header.link}
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

          {/* <AutoPopUp /> */}

          {/* <div className={styles.program}>
            <ProgramInfo
              BatchDate={DataScienceCourseData.data.ProgramInfo.BatchDate}
              BatchDuration={
                DataScienceCourseData.data.ProgramInfo.BatchDuration
              }
              redirectDSA={redirectDSA}
              redirectFs={redirectFs}
              Emi={DataScienceCourseData.data.header.usp3Span}
              redirectWeb={DataScienceCourseData.data.form.webDevelopment}
              Placement={DataScienceCourseData.data.ProgramInfo.Placement}
            />
          </div> */}

          <div
            id="trainer"
            style={{
              margin: "0",
              marginTop: "0",
              "@media only screen and (min-width: 768px)": {
                margin: "100px",
                marginTop: "100px",
              },
            }}
          >
            <TrainerSlider
              heading={DataScienceCourseData.data.TrainerHeading}
              dataScience={false}
              redirectDs={DataScienceCourseData.data.form.dataScience}
              redirectFs={DataScienceCourseData.data.form.FullStack}
              redirectDe={DataScienceCourseData.data.form.DataEngineering}
              redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
              redirectDSA={DataScienceCourseData.data.form.dsa}
              redirectAI={DataScienceCourseData.data.form.ai}
              redirectWeb={DataScienceCourseData.data.form.webDevelopment}
              seoPage={DataScienceCourseData.data.form.seoPage}
              trainerSlider={
                DataScienceCourseData.data.seoSection.trainerMentor
              }
              NoTitle={DataScienceCourseData.data.header.NoTitle}
            />
            {/* <Slider NoTitle={DataScienceCourseData.data.header.NoTitle}/> */}
          </div>
        </div>
        <div className="WrapperDiv">
          {DataScienceCourseData.data.form.seoPage ? (
            <SeoAbout
              redirectFs={DataScienceCourseData.data.header.FullStack}
              redirectDs={DataScienceCourseData.data.header.dataScience}
              redirectDa={DataScienceCourseData.data.header.dataAnalytics}
              dataScience={false}
              // redirectDs={DataScienceCourseData.data.form.dataScience}
              // redirectFs={DataScienceCourseData.data.form.FullStack}
              redirectDe={DataScienceCourseData.data.form.DataEngineering}
              redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
              redirectDSA={DataScienceCourseData.data.form.dsa}
              redirectWeb={DataScienceCourseData.data.form.webDevelopment}
              seoAbout={DataScienceCourseData.data.seoAbout}
              seoAboutDesc={DataScienceCourseData.data.seoAboutDesc}
              popupHead={DataScienceCourseData.data.popupHead}
              seoAboutHeading={
                DataScienceCourseData.data.seoSection.seoAboutHeading
              }
            />
          ) : (
            ""
          )}

          <div id="hired">
            {/* <MGetHired
              headingSection={DataScienceCourseData.data.AlumniHeading}
              heading1={DataScienceCourseData.data.GetHired.heading1}
              heading={DataScienceCourseData.data.GetHired.heading}
              dataScience={false}
              redirectDs={DataScienceCourseData.data.form.dataScience}
              redirectFs={DataScienceCourseData.data.form.FullStack}
              redirectDe={DataScienceCourseData.data.form.DataEngineering}
              redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
              redirectDSA={DataScienceCourseData.data.form.dsa}
              redirectWeb={DataScienceCourseData.data.form.webDevelopment}
              seoPage={DataScienceCourseData.data.form.seoPage}
              alumniPara={DataScienceCourseData.data.GetHired.alumniPara}
            /> */}
          </div>
        </div>
        <div className="WrapperDiv">
          {DataScienceCourseData.data.form.seoPage ? (
            ""
          ) : (
            <div className={styles.Feature} id="Feature">
              <BoxShape
                dataScience={false}
                redirectDs={DataScienceCourseData.data.form.dataScience}
                redirectFs={DataScienceCourseData.data.form.FullStack}
                redirectDe={DataScienceCourseData.data.form.DataEngineering}
                redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
                redirectDSA={DataScienceCourseData.data.form.dsa}
                redirectWeb={DataScienceCourseData.data.form.webDevelopment}
                title={DataScienceCourseData.data.BoxShape.title}
                Box1h5={DataScienceCourseData.data.BoxShape.Box1h5}
                box1desc={DataScienceCourseData.data.BoxShape.box1desc}
                Box2h5={DataScienceCourseData.data.BoxShape.Box2h5}
                box2desc={DataScienceCourseData.data.BoxShape.box2desc}
                Box3h5={DataScienceCourseData.data.BoxShape.Box3h5}
                box3desc={DataScienceCourseData.data.BoxShape.box3desc}
                Box4h5={DataScienceCourseData.data.BoxShape.Box4h5}
                box4desc={DataScienceCourseData.data.BoxShape.box4desc}
                alt1={DataScienceCourseData.data.BoxShape.alt1}
                alt2={DataScienceCourseData.data.BoxShape.alt2}
                alt3={DataScienceCourseData.data.BoxShape.alt3}
                alt4={DataScienceCourseData.data.BoxShape.alt4}
                seoPage={DataScienceCourseData.data.form.seoPage}
              />
            </div>
          )}

          {/* <MiddlePageCta
            homePage={false}
            redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
            redirectDs={DataScienceCourseData.data.form.dataScience}
            redirectFs={DataScienceCourseData.data.form.FullStack}
            redirectDe={DataScienceCourseData.data.form.DataEngineering}
            redirectWeb={DataScienceCourseData.data.form.webDevelopment}
            redirectDSA={DataScienceCourseData.data.form.dsa}
          /> */}
        </div>

        <div id="certificate">
          <WhyUs
            redirectDs={DataScienceCourseData.data.header.dataScience}
            redirectDa={DataScienceCourseData.data.header.dataAnalytics}
            nomicrosoft={DataScienceCourseData.data.header.nomicrosoft}
          />
        </div>
        {DataScienceCourseData.data.form.seoPage ? <></> : <></>}
        <div className="WrapperDiv">
          {DataScienceCourseData.data.form.seoPage ? (
            <SeoSyllabus
              dataScience={false}
              redirectDs={DataScienceCourseData.data.form.dataScience}
              redirectFs={DataScienceCourseData.data.form.FullStack}
              redirectDe={DataScienceCourseData.data.form.DataEngineering}
              redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
              redirectDSA={DataScienceCourseData.data.form.dsa}
              redirectWeb={DataScienceCourseData.data.form.webDevelopment}
              seoSyllabus={DataScienceCourseData.data.seoSyllabus}
              syllabusDesc={DataScienceCourseData.data.syllabusDesc}
              popupHead={DataScienceCourseData.data.popupHead}
              heading={DataScienceCourseData.data.seoSection.syllabusHead}
            />
          ) : (
            <div id="syllabus">
              <DataScienceSyllabus
                dataScience={false}
                redirectDs={DataScienceCourseData.data.form.dataScience}
                redirectFs={DataScienceCourseData.data.form.FullStack}
                redirectDe={DataScienceCourseData.data.form.DataEngineering}
                redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
                redirectDSA={DataScienceCourseData.data.form.dsa}
                redirectWeb={DataScienceCourseData.data.form.webDevelopment}
                syllabus={DataScienceCourseData.data.syllabus}
                syllabusDesc={DataScienceCourseData.data.syllabusDesc}
                popupHead={DataScienceCourseData.data.popupHead}
              />
            </div>
          )}

          {DataScienceCourseData.data.form.FullStack ? <ToolsCovered /> : ""}
        </div>
        <div id="projects">
          <ProjectSlider
            noProject={DataScienceCourseData.data.header.noProject}
            redirectBa={DataScienceCourseData.data.header.dataAnalytics}
            heading="Hands-on Projects"
            redirectDs={DataScienceCourseData.data.header.dataScience}
            redirectFs={DataScienceCourseData.data.header.FullStack}
          />
        </div>
        <div className="WrapperDiv">
          {redirectDs || redirectBa ? (
            <VideoTestimonial
              heading={DataScienceCourseData.data.ReviewHeading}
            />
          ) : (
            ""
          )}
          <div className="review" id="review">
            <Reviews
              changeReview={true}
              redirectDs={DataScienceCourseData.data.form.dataScience}
              redirectFs={DataScienceCourseData.data.form.FullStack}
              redirectDe={DataScienceCourseData.data.form.DataEngineering}
              redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
              redirectDSA={DataScienceCourseData.data.form.dsa}
              redirectWeb={DataScienceCourseData.data.form.webDevelopment}
            />
          </div>
        </div>

        <div id="fee">
          <Emi
            web={DataScienceCourseData.data.form.webDevelopment}
            price={DataScienceCourseData.data.Fee.ProPrice}
            emi={DataScienceCourseData.data.Fee.emi}
            redirectDs={DataScienceCourseData.data.form.dataScience}
            redirectFs={DataScienceCourseData.data.form.FullStack}
            redirectDe={DataScienceCourseData.data.form.DataEngineering}
            redirectWeb={DataScienceCourseData.data.form.webDevelopment}
            redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
            redirectDSA={DataScienceCourseData.data.form.dsa}
          />
        </div>

        <div id="date">
          {batchDateData === "" ? (
            ""
          ) : batchDateData === null ? (
            <BatchDates
              batchDetails=""
              redirectDs={DataScienceCourseData.data.form.dataScience}
              redirectFs={DataScienceCourseData.data.form.FullStack}
              redirectDe={DataScienceCourseData.data.form.DataEngineering}
              redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
              redirectDSA={DataScienceCourseData.data.form.dsa}
              redirectWeb={DataScienceCourseData.data.form.webDevelopment}
            />
          ) : (
            <BatchDates
              batchDetails={batchDateData.batchDetails}
              redirectDs={DataScienceCourseData.data.form.dataScience}
              redirectFs={DataScienceCourseData.data.form.FullStack}
              redirectDe={DataScienceCourseData.data.form.DataEngineering}
              redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
              redirectDSA={DataScienceCourseData.data.form.dsa}
              redirectWeb={DataScienceCourseData.data.form.webDevelopment}
            />
          )}
        </div>
        {redirectDs || redirectBa ? (
          <BatchProfile
          // seoPage={   DataScienceCourseData.data.form.seoPage}
          // BatchProfilePara={
          //   DataScienceCourseData.data.seoSection.BatchProfilePara
          // }
          />
        ) : (
          ""
        )}
        {DataScienceCourseData.data.form.AboutCourse ? (
          <AboutCourses
            content={DataScienceCourseData.data.AboutCourse}
            AboutCourseHeading={DataScienceCourseData.data.AboutCourseHeading}
          />
        ) : (
          ""
        )}
        <div className="WrapperDiv">
          <div className="faq" id="faq">
            <FAQ
              heading={DataScienceCourseData.data.FAQ.heading}
              FaqData={DataScienceCourseData.data.FaqDATA}
              desc={DataScienceCourseData.data.FAQ.desc}
            />
          </div>

          {/* <BottomBar changeBottom={true} /> */}
          {/* {mobile ? (
            ""
          ) : (
            <div className="cta" id="cta">
              <CTA redirectDSA={DataScienceCourseData.data.form.dsa} />
            </div>
          )} */}
        </div>
        {DataScienceCourseData.data.form.seoPage ? (
          <RelatedInfo
            aboutCity={DataScienceCourseData.data.seoSection.aboutCity}
            pinCode={DataScienceCourseData.data.seoSection.pinCode}
            relatedArea={DataScienceCourseData.data.seoSection.relatedArea}
            relatedBlog={DataScienceCourseData.data.seoSection.relatedBlog}
          />
        ) : (
          ""
        )}

        <InternalLinking
          redirectDs={DataScienceCourseData.data.form.dataScience}
          redirectFs={DataScienceCourseData.data.form.FullStack}
          redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
          redirectDSA={DataScienceCourseData.data.form.dsa}
          redirectWeb={DataScienceCourseData.data.form.webDevelopment}
        />
        <FloatIcon />
        {/* <Newsletter /> */}
        {/* <CustomPopup />*/}
        {/* <MiddlePopup
          redirectDs={DataScienceCourseData.data.form.dataScience}
          redirectFs={DataScienceCourseData.data.form.FullStack}
          redirectBa={DataScienceCourseData.data.form.BusinessAnalytics}
          redirectDSA={DataScienceCourseData.data.form.dsa}
          redirectWeb={DataScienceCourseData.data.form.webDevelopment}
        /> */}
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
        <Footer />
      </div>
    </>
  ); //9124848233
}
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
      // id: params.id,
      // DataScienceCourseData.data.metaInfo: DataScienceCourseData.data.DataScienceCourseData.data.metaInfo,
      //    DataScienceCourseData.data.form: DataScienceCourseData.data.   DataScienceCourseData.data.form,
      // firstSection: DataScienceCourseData.data.FirstSection,
      // programInfo: DataScienceCourseData.data.ProgramInfo,
      // trainerSlider: DataScienceCourseData.data.seoSection.trainerMentor,
    },
  };
}
