import React, { useEffect, useState } from "react";
import styles from "./WhatsAppButtons.module.css";
import { FaWhatsapp } from "react-icons/fa";
const WhatsappButton = ({ redirectDs, redirectFs, redirectDa }) => {
  const [idBtnW, setIdBtnW] = useState("org-wa");

  return (
    <div id={idBtnW}>
      <div className={styles.btnWhatsappPulse} id={idBtnW}>
        <a href="https://wa.me/+918391911911?text=ChatWithUs" id={idBtnW}>
          <FaWhatsapp className="text-4xl text-white" id={idBtnW} />
        </a>
      </div>
    </div>
  );
};

export default WhatsappButton;
