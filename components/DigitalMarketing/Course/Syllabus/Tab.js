import { useState } from "react";
import styles from "./Tab.module.css"; // Import CSS module
import { VscFileSubmodule } from "react-icons/vsc";
import Form from "../../../Skills/Global/Form/Form";
import Popup from "../../../Skills/Global/Popup/Popup";
import { MdDownload } from "react-icons/md";

const TabSection = ({ changeHeading, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

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
                <MdDownload />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabSection;
