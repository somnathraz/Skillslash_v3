import React from "react";
import styles from "./WhatsappButton.module.css";
import { FaWhatsapp } from "react-icons/fa";
const WhatsappButton = () => {
  return (
    <div>
      <div className={styles.btnWhatsappPulse}>
        <a href="">
          <FaWhatsapp className="text-4xl text-white" />
        </a>
      </div>
    </div>
  );
};

export default WhatsappButton;
