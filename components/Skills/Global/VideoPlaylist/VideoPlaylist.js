import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import TabData from "./VideoData";
import { FaYoutube } from "react-icons/fa";
const VideoPlaylist = ({
  setShow,
  show,
  redirectDs,
  redirectFs,
  redirectDa,
}) => {
  const [changeArray, setChangeArray] = useState(0);
  const [activeVideo, setActiveVideo] = useState(
    TabData[changeArray].desc[0].link
  );

  const handelOpen = () => {
    setShow(false);
  };
  useEffect(() => {
    if (redirectDs) {
      console.log("ds");
      setChangeArray(2);
      setActiveVideo(TabData[2].desc[0].link);
    }
    if (redirectDa) {
      console.log("da");
      setChangeArray(0);
      setActiveVideo(TabData[0].desc[0].link);
    }
    if (redirectFs) {
      console.log("fs");
      setChangeArray(1);
      setActiveVideo(TabData[1].desc[0].link);
    }
  }, [redirectDs, redirectFs, redirectDa]);
  useEffect(() => {
    if (show) {
      // Add a class to disable scrolling on the body
      document.body.style.overflow = "hidden";

      // Remove the class when the modal is closed
      return () => {
        document.body.style.overflow = "visible";
      };
    }
  }, [show]);
  return (
    <div className="fixed h-screen w-screen bg-[#00000047] z-[999] overflow-hidden flex items-center justify-center left-0 top-0">
      <div className="bg-black w-[60%] h-[100vh] relative  px-10 py-10 max-sm:w-[90%] max-sm:px-5 max-sm:py-5 max-sm:mt-[130px]">
        <AiFillCloseCircle
          className="absolute text-white text-2xl right-[-5px] top-[-5px] cursor-pointer"
          onClick={handelOpen}
        />
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-[420px] max-sm:h-[220px]"
          style={{
            border: "4px solid white",
            borderRadius: "4px",
          }}
        ></iframe>
        <div className="flex flex-col overflow-y-scroll mt-8  ">
          <div className="w-full h-max flex flex-col">
            <h3 className="text-white font-bold">Sample Videos</h3>
            {TabData[changeArray].desc.map((data, i) => {
              const src = `https://www.youtube-nocookie.com/embed/${data.link}`;
              return (
                <div
                  className={`py-5 w-full px-5 flex items-center gap-3 justify-between ${
                    data.link === activeVideo ? "bg-[#505050]" : "bg-black"
                  } rounded `}
                  key={i}
                  onClick={() => setActiveVideo(data.link)}
                >
                  <div className="flex items-center gap-3 cursor-pointer">
                    <FaYoutube className="text-[#CD201F] text-2xl" />
                    <h3 className="text-white font-bold capitalize">
                      {data.name}
                    </h3>
                  </div>
                  <p className="text-white">{data.time}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;
