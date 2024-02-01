import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";

const MiddlePopup = ({
  redirectFs,
  redirectDs,
  redirectBa,
  redirectWeb,
  redirectDSA,
}) => {
  const [open, setOpen] = useState(false);
  const [popups, setPopups] = useState(false);
  const [onetime, setOnetime] = useState(true);
  const [data, setData] = useState({
    title: "Explore our top selling ",
    spanTitle: "Data Science course",
    link: "/selfpaced/data-science-&-aI-bootcamp",
  });
  const handelOpen = () => {
    setOpen(false);
    setOnetime(false);
  };
  useEffect(() => {
    if (open) {
      // Add a class to disable scrolling on the body
      document.body.style.overflow = "hidden";

      // Remove the class when the modal is closed
      return () => {
        document.body.style.overflow = "visible";
      };
    }
  }, [open]);
  useEffect(() => {
    if (redirectDs) {
      setData({
        title: "Explore our top selling ",
        spanTitle: "Data Science course",
        link: "/selfpaced/data-science-&-aI-bootcamp",
      });
    }
    if (redirectBa) {
      setData({
        title: "Explore our top selling",
        spanTitle: "Data Analytics course",
        link: "/selfpaced/data-analytics-bootcamp",
      });
    }
    if (redirectFs) {
      setData({
        title: "Explore our top selling",
        spanTitle: "DSA & System Design course",
        link: "/selfpaced/dsa-system-design-bootcamp",
      });
    }
    let timeOut;
    if (onetime)
      timeOut = setTimeout(() => {
        setOpen(true);
      }, 3000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    open && (
      <div className="fixed overflow-hidden h-screen w-screen bg-[#00000062] left-0 top-0 z-[1001] flex items-center justify-center">
        <div className="bg-white w-[50%] max-sm:w-[90%] h-max rounded-lg flex  flex-col items-center justify-center px-16 py-10 gap-5 relative">
          <AiFillCloseCircle
            className="absolute right-0 top-0 text-2xl text-black"
            onClick={handelOpen}
          />

          <h3 className="text-5xl max-sm:text-2xl font-semibold  text-center">
            {data.title}
            <span className="text-[#f18350] font-bold">{data.spanTitle}</span>
          </h3>

          <Link href={data.link}>
            <button className="bg-[#f18350] cursor-pointer">
              Explore Course
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

export default MiddlePopup;
