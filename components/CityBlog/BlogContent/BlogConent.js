import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp, FaTimes, FaArrowCircleRight } from "react-icons/fa";
import styles from "./blogContent.module.css";
import ShareButtons from "../ShareButton";
import Link from "next/link";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import ReactDOM from "react-dom";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const BlogContent = ({ contentHtml, lastUpdated, shareLink, publishDate, MumbaiData }) => {
  const [headingElements, setHeadingElements] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ads, setAds] = useState([
    {
      id: 1,
      show: false,
      url: "https://www.learnbay.co/submit-info",
      imgSrc: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/side_ad.webp",
    },
  ]);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const headings = Array.from(contentRef.current.querySelectorAll("h2"));
      headings.forEach((heading, index) => {
        heading.setAttribute("id", `heading-${index}`);
      });
      setHeadingElements(headings);

      // Function to replace placeholders with Next.js Image components
      const replacePlaceholders = (placeholderClass, center = false) => {
        const placeholders = contentRef.current.querySelectorAll(placeholderClass);
        placeholders.forEach((placeholder) => {
          const imgElement = document.createElement("div");
          imgElement.classList.add(styles.contentImg);
          if (center) {
            imgElement.classList.add(styles.centerImg);
          }

          ReactDOM.render(
            <Image
              src={placeholder.getAttribute("data-src")}
              alt={placeholder.getAttribute("data-alt")}
              width={parseInt(placeholder.getAttribute("data-width"))}
              height={parseInt(placeholder.getAttribute("data-height"))}
            />,
            imgElement
          );

          placeholder.replaceWith(imgElement);
        });
      };

      // Replace specific placeholders
      replacePlaceholders(".next-image-placeholder", true); // Center the image for this placeholder class
      replacePlaceholders(".blog-center-image", true); // Another class for centered images
      replacePlaceholders(".another-placeholder-class", true); // Non-centered images
    }
  }, [contentHtml]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAds((prevAds) =>
        prevAds.map((ad) => ({ ...ad, show: true }))
      );
    }, 3000); // 3 seconds delay for all ads

    return () => clearTimeout(timer);
  }, []);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAdClick = (url) => {
    window.open(url, "_blank");
  };

  const handleAdClose = (id) => {
    setAds((prevAds) =>
      prevAds.map((ad) => (ad.id === id ? { ...ad, show: false, closed: true } : ad))
    );
  };

  return (
    <>
      <div className={styles.metaInfo}>
        <div>
          <p className="text-[#F18350]">
            Publish Date: <span className="text-[#646464]">{publishDate}</span>
          </p>
          <p className="text-[#F18350]">
            Last Updated: <span className="text-[#646464]">{lastUpdated}</span>
          </p>
        </div>
        <ShareButtons url={shareLink} />
      </div>
      <div className={styles.maincontent}>
        <div className={styles.content}>
          <div className={styles.firstdiv}>
            <div className={styles.tableOfContents}>
              <div className={styles.insidetable}>
              <h3 onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Table of Contents
                <div className={`${styles.icon} ${isDropdownOpen ? styles.active : ""}`}>
                  {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </h3>
              <ul className={`${isDropdownOpen ? styles.open : ""}`}>
                {headingElements.map((heading, index) => (
                  <li key={index}>
                    <Link
                      href={`#heading-${index}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToElement(`heading-${index}`);
                      }}
                    >
                      {heading.textContent}
                    </Link>
                  </li>
                ))}
              </ul>
              </div>
            </div>
            <div className={styles.related}>
              <h3>Related blogs</h3>
              <Swiper
                direction={'vertical'} // Set direction to vertical
                spaceBetween={10}
                slidesPerView={3}
                // pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                mousewheel={true} // Enable mouse wheel scrolling
                className={styles.swiperContainer} // Add this class for styling purposes
              >
                {MumbaiData.Blogs.map((blog, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.bloglist}>
                      <Image src={blog.image} width={80} height={80} alt="blog" loading="lazy" />
                      <div className={styles.bloglistryt}>
                        <p>{blog.title}</p>
                        <Link href={blog.link}>
                          <button>read more</button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <article
            ref={contentRef}
            className={`${styles.markdown} markdown`}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          <div className={styles.adsContainer}>
            {ads.map((ad) =>
              ad.show ? (
                <div key={ad.id} className={styles.stickyAds}>
                  <Image
                    title="Sponsored by Learnbay"
                    src={ad.imgSrc}
                    width={300}
                    height={100}
                    loading="lazy"
                    alt="Loading Ads"
                    onClick={() => handleAdClick(ad.url)}
                  />
                </div>
              ) : (
                ad.closed && (
                  <div key={ad.id} className={`${styles.stickyAds} ${styles.adLink}`}>
                    <Link href={ad.url}>Click here to visit our sponsor <FaArrowCircleRight /></Link>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
