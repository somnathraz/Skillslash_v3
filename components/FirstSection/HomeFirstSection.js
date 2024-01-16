import React, { useState, useEffect } from "react";
import styles from "../Course/FirstSection/FirstSection.module.css";
import Image from "next/image";
import { BiVideo } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import Typed from "../Animation/TypedText/Typed";

const HomeFirstSection = ({
  deskTopPara,
  backgroundImg,
  usp1,
  usp2,
  usp3,
  usp4,
  usp1Span,
  usp2Span,
  usp3Span,
  usp4Span,
}) => {
  // const [video, setVideo] = useState(false);
  const [courseTitles, setCourseTitles] = useState([
    {
      title: "Data Science & AI Bootcamp - Professionals",
      img: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Ai-icon-first-header.webp",
    },
    {
      title: "Data Analytics- Non Tech Professionals",
      img: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course+Header/data-science-chat.png",
    },
    {
      title: "Data Science & AI Bootcamp - Final Year Student",
      img: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course+Header/data-science-course-chat.png",
    },

    // Add more course titles as needed
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current index, and loop back to 0 if it exceeds the array length
      setCurrentIndex((prevIndex) => (prevIndex + 1) % courseTitles.length);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [courseTitles]);

  // const videoSHow = () => {
  //   setVideo(true);
  // };
  return (
    <section className={styles.wrapper}>
      {/* <VideoPopup triggers={video} setTriggers={setVideo} ids="76M0jhQ8Svo" /> */}

      <div className={styles.bgImg}>
        <Image
          priority={true}
          src={backgroundImg}
          fill={true}
          alt="background"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.left}>
        <div className={styles.paraWrap}>
          <p className={styles.pTop}>{deskTopPara}</p>
        </div>
        <h1 className={styles.homeH1}>
          <span className={styles.homeSpan}>Self-paced Live Project-Based Learning Platform</span>
        </h1>
        <p className={styles.pBotM}>
          Access comprehensive lessons with live doubt-clearing classes. Work on
          Live Projects & acquire Project and Internship certifications.
        </p>
        {/* <TextAnimation homePage={true} /> */}

        <div className={styles.btnWrapper}>
          <a href="/selfpaced">
            <button>
              Explore Courses
              {/* <BsArrowRightShort className="bIconS" /> */}
            </button>
          </a>
        </div>
      </div>
      <div className={styles.right}>
        {/* <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/header-img-home-page.png" /> */}
        <span className={styles.typeText}>
        <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/powered+by+microsoft.png" alt="PoweredByMicrosoft" width={230} height={24}/>
          {/* <Typed text="Prompt engineering for beginners...." speed={50} /> */}
        </span>
        <div className={styles.animateBox}>
          <div className={styles.animateTag}>
            <BiVideo className="text-lg" />
            Course
          </div>
          <div className={styles.animateIconWrapper}>
            <Image
              src={courseTitles[currentIndex].img}
              alt="data science and AI"
              width={40}
              height={40}
              priority
            />
          </div>
          <h3>{courseTitles[currentIndex].title}</h3>
        </div>
      </div>
    </section>
  );
};

export default HomeFirstSection;
