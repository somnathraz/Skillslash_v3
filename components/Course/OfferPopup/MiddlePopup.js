import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

const MiddlePopup = () => {
  const [open, setOpen] = useState(false);
  const [popups, setPopups] = useState(false);
  const [onetime, setOnetime] = useState(true);

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
            <span className="text-[#f18350] font-bold">50% OFF </span>ON ALL OUR
            COURSES
          </h3>
          <p className="font-semibold text-black text-center">
            Limited Period Offer. Grab The Deal
          </p>
          <a href="https://wa.me/+918391911911?text=ChatWithUs">
            <button className="bg-[#f18350] cursor-pointer">
              RECEIVE 50% OFF COUPON
            </button>
          </a>
        </div>
      </div>
    )
  );
};

export default MiddlePopup;
