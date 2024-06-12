import { useState } from "react";
import styles from "./Tab.module.css"; // Import CSS module
import { VscFileSubmodule } from "react-icons/vsc";
import Form from "../../../Skills/Global/Form/Form";
import Popup from "../../../Skills/Global/Popup/Popup";
import { MdDownload } from "react-icons/md";


const TabSection = ({ changeHeading }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Growth",
      content: [
        "Growth Marketing",
        "Email Marketing 1.1",
        "Online Reputation Management",
        "Social Media Ads 1.1",
        "Google Tag Manager",
        "Search Engine Marketing 1.1",
        "Search Engine Optimization 1.1",
        "Content Writing 1.1",
        "Voice Search Optimization",
        "Influencer marketing",
        "Video Marketing",
        "Social Commerce",
        "E-commerce Optimization",
        "Content Personalization",
        "Mobile Marketing",
        "Voice and Audio Marketing",
        "Affiliate Marketing",
      ],
      para: ["Growth marketing Specialization"],
      redirect: { redirectgrowth: true }
    },
    {
      title: "Performance & SEO",
      content: [
        "Social Media Ads 1.1",
        "Google Tag Manager",
        "Search Engine Marketing 1.1",
        "Media Buying",
        "Programmatic Marketing",
        "Advance Performace Marketing",
        "Search Engine Optimization 1.1",
        "Content Writing 1.1",
        "Voice Search Optimization",
        "E-commerce Optimization",
        "Mobile Marketing",
        "Voice and Audio Marketing",
      ],
      para: ["Performance & SEO marketing Specialization"],
      redirect: { redirectPSeo: true }
    },
    {
      title: "Performance & Social Media",
      content: [
        "Social Media Ads 1.1",
        "Google Tag Manager",
        "Search Engine Marketing 1.1",
        "Media Buying",
        "Programmatic Marketing",
        "Advance Performace Marketing",
        "Influencer marketing",
        "Video Marketing",
        "Social Commerce",
        "E-commerce Optimization",
        "Content Personalization",
        "Mobile Marketing",
        "Voice and Audio Marketing",
      ],
      para: ["Performance & Social Media marketing Specialization"],
      redirect: { redirectPerforSocia: true }
    },
    {
      title: "SEO & Social Media",
      content: [
        "Search Engine Optimization 1.1",
        "Content Writing 1.1",
        "Voice Search Optimization",
        "Social Media Ads 1.1",
        "Influencer marketing",
        "Video Marketing",
        "Social Commerce",
        "E-commerce Optimization",
        "Content Personalization",
        "Mobile Marketing",
        "Voice and Audio Marketing",
        "Affiliate Marketing",
      ],
      para: ["SEO & Social Media marketing Specialization"],
      redirect: { redirectsocialSeo: true }
    },
  ];

  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.container}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="RightPopup">
          {changeHeading ? (
            <h5>Download Program Handbook</h5>
          ) : (
            <h5>
              Get a chance to understand this course in detail from our
              counsellors
            </h5>
          )}
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            setTrigger={setPopups}
            {...tabs[activeTab].redirect} // Pass the redirect prop based on the active tab
          />
        </div>
      </Popup>
      <div className={styles.tab}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${
              index === activeTab ? styles.active : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        <ul className={styles.pointsul}>
          {tabs[activeTab].content.map((point, index) => (
            <li key={index}>
              <VscFileSubmodule className={styles.liveicon} />
              {point}
            </li>
          ))}
          {tabs[activeTab].para.map((para, index) => (
            <div className="flex flex-row gap-1" key={index}>
              <p>{para}</p>
              <button
                id="clck-free-counselling"
                onClick={() => popupShow()}
                className={styles.syllbtn}
              >
                Syllabus
                <MdDownload/>
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabSection;
