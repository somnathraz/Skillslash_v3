import React, { useState, useEffect } from "react";
import styles from "../Course/FirstSection/FirstSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiVideo } from "react-icons/bi";

const HomeFirstSection = ({ deskTopPara, backgroundImg }) => {
  // const [video, setVideo] = useState(false);
  const [courseTitles, setCourseTitles] = useState([
    {
      title: "Data Science & AI Bootcamp",
      img: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/header/ai-icon.webp",
    },
    {
      title: "Data Analytics Course",
      img: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/header/chat-gpt.webp",
    },
    {
      title: "DSA + SD (FAANG)",
      img: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/header/chat-icon.webp",
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
          <span className={styles.homeSpan}>
            Self paced learning platform with live doubt & project sessions
          </span>
        </h1>
        <p className={styles.pBotM}>
          Access In-Depth, Self-Paced Courses with Live Doubt-Clearing Sessions,
          and Real-world Projects for Job Readiness and Industry-Recognized
          Certification.
        </p>
        {/* <TextAnimation homePage={true} /> */}

        <div className={styles.btnWrapper}>
          <a href="https://courses.skillslash.com/learn">
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
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/Header/Powered+by+microsoft+tag+webp.webp"
            alt="PoweredByMicrosoft"
            width={230}
            height={24}
          />
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
