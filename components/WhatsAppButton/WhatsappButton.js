import React from "react";
import styles from "./WhatsAppButtons.module.css";
import { FaWhatsapp } from "react-icons/fa";
const WhatsappButton = () => {
  return (
    <div>
      <div className={styles.btnWhatsappPulse}>
        <a href="https://wa.me/+918391911911?text=ChatWithUs">
          <FaWhatsapp className="text-4xl text-white" />
        </a>
      </div>
    </div>
  );
};

export default WhatsappButton;
