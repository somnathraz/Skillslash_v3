import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Emi.module.css";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../../Popup/Popup"));
const Form = dynamic(() => import("../../Skills/Global/Form/Form"));

const Emi = ({
  redirectWeb,
  redirectDSA,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectDM,
  price,
}) => {
  const router = useRouter();
  const { id } = router.query;

  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [batches, setBatches] = useState([]);
  const [web, setWeb] = useState("");
  const [emi, setEmi] = useState("");

  const popupShow = () => {
    setPopups(true);
  };

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const data = {
          batches: [
            {
              type: "Weekday",
              date: "16th Aug",
              time: "8pm - 10pm",
              isFilled: true,
            },

            {
              type: "Weekday",
              date: "30th Aug",
              time: "8pm - 10pm",
              isFilled: false,
            },
            {
              type: "Weekend ",
              date: "31 Aug",
              time: "11am - 2pm",
              isFilled: true,
            },
            {
              type: "Weekday",
              date: "27th Sep",
              time: "8pm - 10pm",
              isFilled: false,
            },

            ,
          ],
          web: "web-value",
          emi: "emi-value",
        };

        setBatches(data.batches);
        setWeb(data.web);
        setEmi(data.emi);
      };

      fetchData();
    }
  }, [id]);

  return (
    <div className={styles.EmiWrapper}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            setTrigger={setPopups}
            dataScience={false}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectBa={redirectBa}
            redirectDe={redirectDe}
            redirectWeb={redirectWeb}
            redirectDSA={redirectDSA}
            redirectDM={redirectDM}
          />
        </div>
      </Popup>
      <div className={styles.leftEmi}>
        <h6>Batch Details</h6>
        <div className={styles.list}>
          {batches.map((batch, index) => (
            <div className={styles.gridbox} key={index}>
              <p className={styles.days}>{batch.type}</p>
              <p className={styles.datetag}>{batch.date}</p>
              <span>{batch.time}</span>
              <p className={batch.isFilled ? styles.filled : styles.aval}>
                {batch.isFilled ? "Filled" : "Open"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rightEmi}>
        <h5 className={styles.EmiHeading}>
          Prog<span>ram Fees</span>
        </h5>
        <p className={styles.pBot}>
          We are driven by the idea of program affordability. So, we give you
          several financial options to manage and budget the expenses of your
          course.
        </p>
        <div className={styles.top}>
          <div className={styles.topEmiLeft}>
            <h6>Course Fee {price} </h6>
          </div>
          <div className={styles.topEmiRight}>
            <button onClick={popupShow}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emi;
