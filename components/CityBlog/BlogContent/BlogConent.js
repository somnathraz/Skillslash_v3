import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "./blogContent.module.css";
import ShareButtons from "../ShareButton";
import Link from "next/link";

const BlogContent = ({ contentHtml, lastUpdated, shareLink, publishDate }) => {
  const [headingElements, setHeadingElements] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const headings = Array.from(contentRef.current.querySelectorAll("h2"));
      setHeadingElements(headings);
    }
  }, [contentHtml]);

  const scrollToHeading = (index) => {
    if (headingElements[index]) {
      headingElements[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    console.log("Server rendered HTML:", contentHtml);
  }, []);

  return (
    <div className={styles.maincontent}>
      <div className={styles.metaInfo}>
        <div>
          <p className="text-[#F18350]">
            publish Date : <span className="text-[#646464]">{publishDate}</span>
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
              className={`${styles.icon} ${
                isDropdownOpen ? styles.active : ""
              }`}
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
      </div>
    </div>
  );
};

export default BlogContent;
