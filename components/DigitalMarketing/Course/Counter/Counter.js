import { useEffect, useState } from 'react';
import styles from "./Counter.module.css"

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 10149;
    const duration = 10000; 
    const increment = target / (duration / 10); 

    if (count < target) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= target) {
            clearInterval(timer);
            return target;
          }
          return prevCount + increment;
        });
      }, 10); 

      return () => clearInterval(timer);
    }
  }, [count]);

  return (
    <div>

      <h6 className={styles.text}>Students Trained -<p>{Math.round(count)}</p></h6>
    </div>
  );
}
