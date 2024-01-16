import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Typed = ({ text, speed = 50, loop = true }) => {
  const [displayText, setDisplayText] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      for (let i = 0; i <= text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, speed));
        setDisplayText(text.slice(0, i));
      }

      await new Promise((resolve) => setTimeout(resolve, 500)); // Pause before fading out

      controls.start({
        opacity: 0,
        transition: { duration: 0.5 },
      });

      await new Promise((resolve) => setTimeout(resolve, 500)); // Pause before resetting

      setDisplayText("");
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });
    };

    const runAnimation = async () => {
      while (loop) {
        await animateText();
      }
    };

    runAnimation();

    return () => {
      // Cleanup on component unmount
      loop = true;
    };
  }, [loop, controls, text, speed]);

  return (
    <motion.div initial={{ opacity: 1 }} animate={controls}>
      {displayText}
    </motion.div>
  );
};

export default Typed;
