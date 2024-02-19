import React, { useState } from "react";
import styles from "./SeoSyllabus.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineTool } from "react-icons/ai";
import { BiCheck, BiTimeFive } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

function DataScienceSyllabus({
  seoSyllabus,
  syllabusDesc,
  heading,
  hour,
  title,
  redirectDs,
  redirectFs,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [state, setState] = useState(seoSyllabus);

  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          faq.Module0.open = !faq.Module0.open;
        } else {
          faq.Module0.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section className={styles.Syllabus}>
      <div className={styles.syllabusLeft}>
        <div className={styles.Syllabusbutton}>
          <div>
            <h2>{heading}</h2>
          </div>
          <div></div>
        </div>
        <p>{syllabusDesc}</p>
        <ul>
          {state.map((syllabusData, i) => {
            const { Module0 } = syllabusData;

            return (
              <li className={styles.pointA} key={Module0.title}>
                <BsDot className={styles.dot} />
                <span className={styles.line}></span>
                <div className={styles.FaqWrapper} key={Module0.title}>
                  {/* {Module0.open ? ( */}

                  <div className={styles.ques} style={{ borderBottom: "0" }}>
                    <div className={styles.headWrap}>
                      <h3>{Module0.title}</h3>

                      <p className={styles.sTitle}>{Module0.title1}</p>
                      <p className={styles.sDesc}>{Module0.descS}</p>
                    </div>
                  </div>
                  {Module0.content.length === 0 ? (
                    ""
                  ) : (
                    <div className={styles.ans}>
                      <div
                        className={styles.innerAns}
                        onClick={() => {
                          let id = i;
                          handleChange(id);
                        }}
                      >
                        <p className={styles.accorDHead}>Module Content</p>
                        <span>
                          {Module0.open ? (
                            <MdKeyboardArrowUp className="icon" />
                          ) : (
                            <MdKeyboardArrowDown className="icon" />
                          )}
                        </span>
                      </div>
                      {Module0.open ? (
                        <div>
                          <p>{Module0.desc}</p>

                          {Module0.content.map((content, i) => {
                            return (
                              <div key={content.chap.title}>
                                <ul className={styles.syllabusHead}>
                                  <h4 className={styles.chapHead}>
                                    {content.chap.title}
                                  </h4>
                                  {content.chap.desc.map((desc, i) => {
                                    return (
                                      <div key={desc} className="max-sm:hidden">
                                        {desc === "" ? (
                                          ""
                                        ) : (
                                          <li key={i} className={styles.points}>
                                            {" "}
                                            <BiCheck
                                              className={styles.check}
                                            />{" "}
                                            {desc}
                                          </li>
                                        )}
                                      </div>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <div className={styles.syllabusRight}>
          <h5 className={styles.rightHeading}>
            {title} <span>Curriculum</span>
          </h5>
          <p className={styles.rightDesc}>
            {title} Syllabus are curated by leading faculties and industry
            leaders.
          </p>
          <div className={styles.feature}>
            <BiTimeFive className={styles.clockIcon} />
            <div className={styles.fContent}>
              <p className={styles.fHeading}>{hour} Hrs</p>
              <span className="text-sm">Recorded classes</span>
            </div>
          </div>
          <div className={styles.feature}>
            <AiOutlineTool className={styles.settingIcon} />
            <div className={styles.fContent}>
              <p className={styles.fHeading}>{redirectDs ? "30+" : "15+"}</p>
              <span>Live Project</span>
            </div>
          </div>
          <Link
            href="https://wa.me/+918391911911?text=ChatWithUs"
            className={styles.feature}
          >
            <div className="flex items-center justify-center">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/Header/chat-with-us.gif"
                width={50}
                height={50}
              />
              <div className={styles.fContent}>
                <p className="text-xl font-medium text-black ml-6">
                  Chat With Us
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DataScienceSyllabus;
