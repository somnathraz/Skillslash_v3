import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp, FaTimes, FaArrowCircleRight } from "react-icons/fa";
import styles from "./blogContent.module.css";
import ShareButtons from "../ShareButton";
import Link from "next/link";
import Image from "next/image";

const BlogContent = ({ contentHtml, lastUpdated, shareLink, publishDate }) => {
  const [headingElements, setHeadingElements] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ads, setAds] = useState([
    {
      id: 1,
      show: false,
      url: "https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program",
      imgSrc: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/one_ads.jpeg",
    },
    {
      id: 2,
      show: false,
      url: "https://www.learnbay.co/",
      imgSrc: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/ads_insta.jpeg",
    }
  ]);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const headings = Array.from(contentRef.current.querySelectorAll("h2"));
      setHeadingElements(headings);
    }
  }, [contentHtml]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAds((prevAds) =>
        prevAds.map((ad) => ({ ...ad, show: true }))
      );
    }, 3000); // 4 seconds delay for all ads

    return () => clearTimeout(timer);
  }, []);

  const scrollToHeading = (index) => {
    if (headingElements[index]) {
      headingElements[index].scrollIntoView({ behavior: "smooth" });
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
    <div className={styles.maincontent}>
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
      <div className={styles.content}>
        <div className={styles.tableOfContents}>
          <h3 onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Table of Contents
            <div
              className={`${styles.icon} ${isDropdownOpen ? styles.active : ""}`}
            >
              {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
          </h3>
          <ul className={`${isDropdownOpen ? styles.open : ""}`}>
            {headingElements.map((heading, index) => (
              <li key={index}>
                <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHeading(index);
                  }}
                >
                  {heading.textContent}
                </Link>
              </li>
            ))}
          </ul>
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
                <div className={styles.adContainer}>
                  <FaTimes
                    className={styles.closeButton}
                    onClick={() => handleAdClose(ad.id)}
                  />
                  <Image
                    title="Sponsored by Learnbay"
                    src={ad.imgSrc}
                    width={400}
                    height={100}
                    loading="lazy"
                    alt="Loading Ads"
                    onClick={() => handleAdClick(ad.url)}
                  />
                </div>
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
  );
};

export default BlogContent;
