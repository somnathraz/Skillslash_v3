import React from "react";
import styles from "./Slider.module.css";
import Image from "next/image";
const Slider = ({NoTitle}) => {
  const firstSlide = [
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/Makemmytrip.png",
      width: 234,
      height: 85,
      id: 1,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/Juspay.png",
      width: 237,
      height: 85,
      id: 2,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/IBM.png",
      width: 151,
      height: 85,
      id: 3,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/Google.png",
      width: 172,
      height: 85,
      id: 4,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/Flipkart.png",
      width: 206,
      height: 85,
      id: 5,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/facebool.png",
      width: 262,
      height: 85,
      id: 6,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/Dell.png",
      width: 186,
      height: 85,
      id: 7,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/curefit.png",
      width: 166,
      height: 85,
      id: 8,
    },
  ];
  const secondSlide = [
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/cred.png",
      width: 176,
      height: 85,
      id: 1,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/amazon.png",
      width: 183,
      height: 85,
      id: 2,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/paytm.png",
      width: 182,
      height: 85,
      id: 3,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/qualcomm.png",
      width: 264,
      height: 85,
      id: 4,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/samsung.png",
      width: 171,
      height: 85,
      id: 5,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/twitter.png",
      width: 271,
      height: 85,
      id: 6,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/zoho.png",
      width: 171,
      height: 85,
      id: 7,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/slider/apple.png",
      width: 171,
      height: 85,
      id: 8,
    },
  ];
  return (
<div className="px-28 py-10 max-sm:px-5 max-sm:w-full w-[1200px] m-auto mx-auto">
      {NoTitle ? (<></>):(<> <h2 className="text-3xl font-semibold text-center mb-3 max-sm:text-xl">
        Our Students at top tech companies
      </h2></>)}
     
      <div className="relative overflow-hidden">
        <div
          className="absolute h-full w-[30%] z-10"
          style={{
            background: "rgb(255,255,255)",
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 33%, rgba(255,255,255,0) 100%)",
          }}
        ></div>
        <div
          className="absolute h-full w-[30%] z-10 right-0"
          style={{
            background: "rgb(255,255,255)",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 67%)",
          }}
        ></div>
        <div className={styles.Marquee}>
          <div className={styles.MarqueeGroup}>
            {firstSlide.map((el, index) => (
              <div key={index}>
                <Image src={el.src} height={el.height} width={el.width} />
              </div>
            ))}
          </div>
          <div className={styles.MarqueeGroup}>
            {firstSlide.map((el, index) => (
              <div key={index}>
                <Image src={el.src} height={el.height} width={el.width} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.Marquee}>
          <div className={styles.MarqueeGroup2}>
            {secondSlide.map((el, index) => (
              <div key={index}>
                <Image src={el.src} height={el.height} width={el.width} />
              </div>
            ))}
          </div>
          <div className={styles.MarqueeGroup2}>
            {secondSlide.map((el, index) => (
              <div key={index}>
                <Image src={el.src} height={el.height} width={el.width} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
