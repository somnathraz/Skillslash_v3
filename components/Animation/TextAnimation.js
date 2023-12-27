import React, { useState, useEffect, memo } from "react";
import { useInterval } from "react-use";
import styles from "./TextAnimation.module.css";

const TextAnimation = memo(
  ({ homePage, redirectWeb, redirectFs, redirectDSA }) => {
    const reactArray =
      homePage || redirectWeb || redirectFs || redirectDSA
        ? "Real Work Experience"
        : "Dual Certification";
    const swiftArray = "Guaranteed job referral";

    const [items, setItems] = useState(reactArray);
    const [count, setCount] = useState(0);
    const [play, setPlay] = useState(false);
    useInterval(
      () => {
        setItems(reactArray);
        setCount(count + 1);

        if (count == 1) {
          setCount(0);
          setItems(swiftArray);
        }
      },
      play ? 6000 : null
    );

    useEffect(() => {
      const timer = setTimeout(() => {
        setItems(swiftArray);
        setPlay(true);
      }, 4000);
    }, []);

    return (
      <span className={styles.span}>
        <span>{items}</span>
      </span>
    );
  }
);

export default TextAnimation;
