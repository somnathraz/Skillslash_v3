import dynamic from "next/dynamic";
import styles from "./VideoTestimonial.module.css";
import { dsReview, fsReview } from "./VideoTestimonialData";
import Rating from "./Rating";
import { useEffect, useState } from "react";
const VideoTestimonialSwiper = dynamic(() =>
  import("./VideoTestimonialSwiper")
);
import { ratingData } from "./ratingData";

const VideoTestimonial = ({
  event,
  heading,
  spanText,
  redirectDs,
  redirectDa,
}) => {
  const [review, setReview] = useState(dsReview);

  useEffect(() => {
    if (redirectDa) {
      setReview(fsReview);
    }
  }, [redirectDs]);
  // const [video, setVideo] = useState(false);
  // const videoSHow = () => {
  //   setVideo(true);
  // };
  return (
    <>
      {/* <VideoPopup triggers={video} setTriggers={setVideo} ids="iT54dOHPQpU" /> */}

      <div className={styles.ReviewSlider}>
        <div className={styles.headings}>
          <h2 className="text-center flex flex-col  mb-10 max-[1281px]:text-[42px] gap-3">
            {heading}
            <span className="text-[#f18350]">{spanText}</span>
          </h2>
        </div>
        <VideoTestimonialSwiper review={review} />
        <Rating ratingData={ratingData} />
      </div>
    </>
  );
};

export default VideoTestimonial;
