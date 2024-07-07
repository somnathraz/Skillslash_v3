import React from "react";
import styles from "./RelatedInfo.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsCalendarCheck } from "react-icons/bs";

const RelatedInfo = ({ aboutCity, relatedArea, relatedBlog }) => {
  if (!aboutCity) {
    console.log("City data is not available.");
    return <p>City data not available.</p>;
  }

  return (
    <div className={styles.relatedWrap}>
      <div className={styles.pinCode}>
        <h3>{aboutCity.title}</h3>
        <p>{aboutCity.desc}</p>
        <div className={styles.viewPoint}>
          {aboutCity.pointView.map((data, i) => (
            <p key={i} style={{ color: "#646464" }}>
              {data}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.location}>
        <h2>{relatedArea.heading}</h2>
        {relatedArea.area.map((data, i) => (
          <span key={i}>{data},</span>
        ))}
      </div>

      <div className={styles.rBlog}>
        <h3>Related Blog</h3>
        <div className={styles.blogWrap}>
          {relatedBlog.map((data, i) => (
            <Link href={data.link} key={i}>
              <div className={styles.blog}>
                <div className={styles.blogImg}>
                  <div className="bgWrap">
                    <Image src={data.img} fill={true} alt={data.title} />
                  </div>
                </div>
                <h4>{data.title}</h4>
                <span>
                  <BsCalendarCheck />
                  {data.publishDate}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedInfo;
