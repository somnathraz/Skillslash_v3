import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import styles from './BlogContent.module.css';
import ShareButtons from '../ShareButton';

const BlogContent = ({ contentHtml, lastUpdated, shareLink }) => {
  const [headingElements, setHeadingElements] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const headings = Array.from(contentRef.current.querySelectorAll('h2'));
      setHeadingElements(headings);
    }
  }, [contentHtml]);

  const scrollToHeading = (index) => {
    if (headingElements[index]) {
      headingElements[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.maincontent}>
      <div className={styles.metaInfo}>
        <p className='text-[#F18350]'>Last Updated: <span className='text-[#646464]'>{lastUpdated}</span></p>
        <ShareButtons url={shareLink} />
      </div>

      <div className={styles.content}>
        <div className={styles.tableOfContents}>
          <h3 onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Table of Contents
            <span className={`${styles.icon} ${isDropdownOpen ? styles.active : ''}`}>
              {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </span>
          </h3>
          <ul className={`${isDropdownOpen ? styles.open : ''}`}>
            {headingElements.map((heading, index) => (
              <li key={index}>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToHeading(index); }}>
                  {heading.textContent}
                </a>
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
