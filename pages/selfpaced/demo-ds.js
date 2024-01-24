import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Image from "next/image";
import VideoPopup from "../../components/VideoPopup/VideoPopup";

const demoDs = () => {
  const [video, setVideo] = useState(false);
  const [vId, setVId] = useState("");
  const videoShow = (id) => {
    setVideo(true);
    setVId(id);
  };
  const array = ["mvAWOD9zpWE", "hsqalsbALu0", "Nfu1HsXz5GQ"];
  const imgSrc = [
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/coin.jpeg",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/dynamic.jpeg",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/system_design.jpeg",
  ];
  return (
    <>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={vId} />
      <Navbar />
      <div className="grid grid-cols-[32%,32%,32%] mt-[190px] px-28 gap-3 max-sm:grid-cols-[100%] ">
        {array.map((data, i) => {
          return (
            <div className="flex flex-col shadow gap-8 rounded">
              <div className="relative rounded w-full h-[230px] cursor-pointer ">
                <Image src={imgSrc[i]} alt="image" fill />
              </div>
              <div className="flex mt-230px gap-6 mx-2 mb-4">
                <button onClick={() => videoShow(data)}>Watch Now</button>
                <a href="https://courses.skillslash.com/learn/DSA---System-Design-Bootcamp">
                  <button>View Course</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default demoDs;
