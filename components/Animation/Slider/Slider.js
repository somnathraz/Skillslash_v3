import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper";
import Image from "next/image";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, FreeMode } from "swiper";

const Slider = () => {
  const firstSlide = [
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/Makemmytrip.png",
      width: 234,
      height: 85,
      id: 1,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/Juspay.png",
      width: 237,
      height: 85,
      id: 2,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/IBM.png",
      width: 151,
      height: 85,
      id: 3,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/Google.png",
      width: 172,
      height: 85,
      id: 4,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/Flipkart.png",
      width: 206,
      height: 85,
      id: 5,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/facebool.png",
      width: 262,
      height: 85,
      id: 6,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/Dell.png",
      width: 186,
      height: 85,
      id: 7,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/curefit.png",
      width: 166,
      height: 85,
      id: 8,
    },
  ];
  const secondSlide = [
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/cred.png",
      width: 176,
      height: 85,
      id: 1,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/amazon.png",
      width: 183,
      height: 85,
      id: 2,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/paytm.png",
      width: 182,
      height: 85,
      id: 3,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/qualcomm.png",
      width: 264,
      height: 85,
      id: 4,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/samsung.png",
      width: 171,
      height: 85,
      id: 5,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/twitter.png",
      width: 271,
      height: 85,
      id: 6,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/zoho.png",
      width: 171,
      height: 85,
      id: 7,
    },
    {
      src: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/slider/apple.png",
      width: 171,
      height: 85,
      id: 8,
    },
  ];
  return (
    <div className="px-28 py-10 ">
      <h2 className="text-3xl font-semibold text-center mb-3">
        Our Trainers at top tech companies
      </h2>
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
        <div className="flex gap-4 slideAnimation">
          {firstSlide.map((image, i) => {
            return (
              <div
                key={i}
                style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
                className="my-8 w-[20%]"
              >
                <Image
                  src={image.src}
                  alt="Logo1"
                  height={image.height}
                  width={image.width}
                />
              </div>
            );
          })}
        </div>

        {/* <Swiper
          slidesPerView={3.7}
          spaceBetween={20}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          speed={4000}
          breakpoints={{
            1281: { slidesPerView: 5, spaceBetween: 20 },
            801: { slidesPerView: 2.5, spaceBetween: 30 },
            641: { slidesPerView: 1.6, spaceBetween: 10 },
            481: { slidesPerView: 1, spaceBetween: 10 },
            200: { slidesPerView: 1, spaceBetween: 10 },
          }}
          loop={true}
          style={{ "--swiper-theme-color": "#4f419a" }}
          loopFillGroupWithBlank={true}
          grabCursor={true}
          className="mySwiper"
        >
          {secondSlide.map((image, i) => {
            return (
              <SwiperSlide
                key={i}
                style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
                className="mb-8 w-[80%] relative"
              >
                <Image
                  src={image.src}
                  alt="Logo1"
                  fill={true}
                  // height={image.height}
                  // width={image.width}
                />
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </div>
      {/* <swiper
        slidesPerView={3.7}
        spaceBetween={20}
        // freeMode={true}
        // initialSlide="2"
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        // breakpoints={{
        //   1281: { slidesPerView: 3, spaceBetween: 40 },
        //   801: { slidesPerView: 2.5, spaceBetween: 30 },
        //   641: { slidesPerView: 1.6, spaceBetween: 10 },
        //   481: { slidesPerView: 1, spaceBetween: 10 },
        //   200: { slidesPerView: 1, spaceBetween: 10 },
        // }}
        loop={true}
        style={{ "--swiper-theme-color": "#4f419a" }}
        loopFillGroupWithBlank={true}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {firstSlide.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                src={image.src}
                alt="Logo1"
                height={image.height}
                width={image.width}
                style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
              />
            </SwiperSlide>
          );
        })}
      </swiper> */}
    </div>
  );
};

export default Slider;
