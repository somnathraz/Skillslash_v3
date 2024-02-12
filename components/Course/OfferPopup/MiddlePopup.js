import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";

const MiddlePopup = ({ redirectFs, redirectDs, redirectDa, newDsa }) => {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
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
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Error copying to clipboard:", err);
      });
  };
  useEffect(() => {
    if (redirectDs) {
      setData({
        title: "Now get Data Science & AI Bootcamp @5,999",
        spanTitle: "Coupon code: RGHTTLNT50",
        link: "/selfpaced/data-science-&-aI-bootcamp",
      });
      setCode("RGHTTLNT50");
    }
    if (redirectDa) {
      setData({
        title: "Now get Data Analytics Bootcamp @3,999",
        spanTitle: "Coupon code: RGHTTLNT50",
        link: "/selfpaced/data-analytics-bootcamp",
      });
      setCode("RGHTTLNT50");
    }
    if (newDsa) {
      setData({
        title: "Apply the coupon code",
        spanTitle: "HYPRDISCNT3499",
        link: "to get Data Analytics Bootcamp @3499 just for today",
      });
    }
    if (redirectFs) {
      setData({
        title: "Now get Data & System Design Bootcamp @3,999",
        spanTitle: "Coupon code: RGHTTLNT50",
        link: "/selfpaced/dsa-system-design-bootcamp",
      });
      setCode("RGHTTLNT50");
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

          {newDsa ? (
            <h3 className="text-[27px] text-[#4f419a] max-sm:text-[21px] font-medium text-center">
              {data.title}{" "}
              <span className="text-black font-bold">{data.spanTitle} </span>
              {data.link}
            </h3>
          ) : (
            <h3 className="text-[27px] max-sm:text-[21px] font-medium text-center flex flex-col gap-2">
              {data.title}
              <br />
              <span className="text-[#4f419a] font-semibold text-3xl max-sm:text-2xl">
                {data.spanTitle}
              </span>
            </h3>
          )}

          <button
            className="bg-[#f18350] cursor-pointer"
            style={{ padding: "8px 17px" }}
            onClick={handleCopyClick}
          >
            {isCopied ? "Copied!" : "Copy Coupon Code"}
          </button>
        </div>
      </div>
    )
  );
};

export default MiddlePopup;
