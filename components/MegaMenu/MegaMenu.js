import React, { useState, useEffect } from "react";
import styles from "./MegaMenu.module.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import {
  MdOutlineLocalFireDepartment,
  MdDataSaverOff,
  MdOutlineLiveTv,
} from "react-icons/md";
import { BsDot } from "react-icons/bs";

const MegaMenu = ({ handleIcon }) => {
  const [popular, setPopular] = useState(true);
  const [DataScience, setDataScience] = useState(false);
  const [software, setSoftware] = useState(false);

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });
  return (
    <div className={styles.MegaMenu}>
      <div className={styles.leftSideMenu}>
        <h6>Browse by Domain</h6>
        {mobile ? (
          <>
            <span
              className={popular ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(true);
                setDataScience(false);
                setSoftware(false);
              }}
            >
              <div className={styles.innerSpan}>
                <MdOutlineLocalFireDepartment className={styles.MenuIcon} />
                Popular Courses
              </div>
              <IoIosArrowDown />
            </span>
            {popular ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <a href="/selfpaced/data-science-&-aI-bootcamp">
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Science & AI Bootcamp</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </a>
                </div>
                <a href="/selfpaced/dsa-system-design-bootcamp">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>DSA & System Design Bootcamp</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </div>
                </a>
                <a href="/selfpaced/data-analytics-bootcamp">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Analytics Bootcamp</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={popular ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(true);
              setDataScience(false);
              setSoftware(false);
            }}
          >
            <div className={styles.innerSpan}>
              <MdOutlineLocalFireDepartment className={styles.MenuIcon} />
              Popular Courses
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={DataScience ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setDataScience(true);
                setSoftware(false);
              }}
            >
              <div className={styles.innerSpan}>
                <MdDataSaverOff className={styles.MenuIcon} />
                <div>Self Paced</div>
              </div>
              <IoIosArrowDown />
            </span>
            {DataScience ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <a href="/selfpaced/data-science-&-ai-selfpaced">
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Science & AI  self-paced</h5>
                      <span>
                        
                     
                      </span>
                    </div>
                  </a>
                </div>
                <a href="/selfpaced/data-science-&-ai-selfpaced">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Analytics Self-paced</h5>
                      <span>
              
                      
                      </span>
                    </div>
                  </div>
                </a>
                <a href="/selfpaced/data-analytics-selfpaced">
              
                </a>

            
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={DataScience ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setDataScience(true);
              setSoftware(false);
            }}
          >
            <div className={styles.innerSpan}>
              <MdDataSaverOff className={styles.MenuIcon} />
              <div>Self Paced</div>
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={software ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setDataScience(false);
                setSoftware(true);
              }}
            >
              <div className={styles.innerSpan}>
                <MdOutlineLiveTv className={styles.MenuIcon} />
                <div>Blended</div>
              </div>
              <IoIosArrowDown />
            </span>
            {software ? (
              <div className={styles.gridPanel}>
               
                <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <a href="/selfpaced/data-science-&-aI-bootcamp">
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Science & AI Bootcamp</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </a>
                </div>
                <a href="/selfpaced/dsa-system-design-bootcamp">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>DSA & System Design Bootcamp</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </div>
                </a>
                <a href="/selfpaced/data-analytics-bootcamp">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Data Analytics Bootcamp</h5>
                      <span>
                        <div>2 Live Projects</div>
                        <BsDot className={styles.dot} />
                        <div>self-paced videos</div>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={software ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setDataScience(false);
              setSoftware(true);
            }}
          >
            <div className={styles.innerSpan}>
              <MdOutlineLiveTv className={styles.MenuIcon} />
              <div>Blended</div>
            </div>
            <IoIosArrowForward />
          </span>
        )}
      </div>
      <div className={styles.MiddleMenu}>
        <h6>Learn from top experts</h6>
        {popular ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <a href="/selfpaced/data-science-&-aI-bootcamp">
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Science & AI Bootcamp</h5>
                  <span>
                    <div>Live Doubt Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Project Sessions</div>
                  </span>
                </div>
              </a>
            </div>
            <a href="/selfpaced/dsa-system-design-bootcamp">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>DSA & System Design Bootcamp</h5>
                  <span>
                    <div>Live Doubt Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Project Sessions</div>
                  </span>
                </div>
              </div>
            </a>
            <a href="/selfpaced/data-analytics-bootcamp">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Analytics Bootcamp</h5>
                  <span>
                    <div>Live Doubt Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Project Sessions</div>
                  </span>
                </div>
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
        {DataScience ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <a href="/selfpaced/data-science-&-ai-selfpaced">
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Science & AI Self-paced</h5>

                </div>
              </a>
            </div>
            <a href="/selfpaced/data-analytics-selfpaced">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Analytics Self-paced</h5>

                </div>
              </div>
            </a>

          </div>
        ) : (
          ""
        )}
        {software ? (
          <div className={styles.gridPanel}>
            <div className={styles.mInnerBox} onClick={() => handleIcon(false)}>
              <a href="/selfpaced/data-science-&-aI-bootcamp">
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Science & AI Bootcamp</h5>
                  <span>
                    <div>Live Doubt Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Project Sessions</div>
                  </span>
                </div>
              </a>
            </div>
            <a href="/selfpaced/dsa-system-design-bootcamp">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>DSA & System Design Bootcamp</h5>
                  <span>
                    <div>Live Doubt Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Project Sessions</div>
                  </span>
                </div>
              </div>
            </a>
            <a href="/selfpaced/data-analytics-bootcamp">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Data Analytics Bootcamp</h5>
                  <span>
                    <div>Live Doubt Sessions</div>
                    <BsDot className={styles.dot} />
                    <div>Live Project Sessions</div>
                  </span>
                </div>
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
