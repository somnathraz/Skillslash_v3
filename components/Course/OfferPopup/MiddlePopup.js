import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";

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
  const [showCross, setShowCross] = useState(false);
  const [data, setData] = useState({
    title: "Now get Data Science & AI Bootcamp @5,999",
    spanTitle: "Coupon code: RGHTTLNT50",
    link: "/selfpaced/data-science-&-aI-bootcamp",
  });
  const handelOpen = () => {
    setOpen(false);
    setOnetime(false);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCross(true);
    }, 8000);
    return () => clearTimeout(timeout);
  }, []);
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
        title: "Now get Data Science & AI Bootcamp @5,999",
        spanTitle: "Coupon code: RGHTTLNT50",
        link: "/selfpaced/data-science-&-aI-bootcamp",
      });
    }
    if (redirectBa) {
      setData({
        title: "Now get Data Analytics Bootcamp @3,999",
        spanTitle: "Coupon code: RGHTTLNT50",
        link: "/selfpaced/data-analytics-bootcamp",
      });
    }
    if (redirectFs) {
      setData({
        title: "Now get Data & System Design Bootcamp @3,999",
        spanTitle: "Coupon code: RGHTTLNT50",
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
        <div className="bg-white w-[50%] max-sm:w-[90%] h-max rounded-lg flex  flex-col items-center justify-center px-16 max-sm:px-8 py-10 gap-5 relative">
          {showCross && (
            <MdClose
              className="absolute right-[5px] top-[4px] text-xl text-black"
              onClick={handelOpen}
            />
          )}

          <h3 className="text-[27px] max-sm:text-[21px] font-medium text-center flex flex-col gap-2">
            {data.title}
            <br />
            <span className="text-[#4f419a] font-semibold text-3xl max-sm:text-2xl">
              {data.spanTitle}
            </span>
          </h3>

          <Link href={data.link}>
            <button
              className="bg-[#f18350] cursor-pointer"
              style={{ padding: "8px 17px" }}
            >
              Explore Course
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

export default MiddlePopup;
