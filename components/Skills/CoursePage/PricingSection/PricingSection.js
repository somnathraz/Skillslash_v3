import React, { useState } from "react";
import Popup from "../../Global/Popup/Popup";
import Form from "../../Global/Form/Form";
import Link from "next/link";

const PricingSection = ({
  actualPrice,
  redirectDs,
  redirectDa,
  redirectFs,
  redirectDM,
  checkoutLink,
  dmPage,
}) => {
  const [popups, setPopups] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setPopups(true);
  };
  return (
    <div className="flex flex-col items-center min-[642px]:hidden">
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="RightPopup">
          <h5>Download Program Handbook</h5>
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            setTrigger={setPopups}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectDa={redirectDa}
            redirectDM={redirectDM}
          />
        </div>
      </Popup>
      <div className="flex flex-col py-4 px-5 bg-[#212121]  rounded w-[90%] relative">
        <h3 className="text-[16px]  text-[#fff] font-bold text-left py-1 w-max mb-2">
          Course Fees
        </h3>
        <h3 className="text-[32px] flex gap-7 font-bold w-max text-[#fff]">
          {actualPrice}{" "}
          <span className="text-[16px] font-medium text-[#fff]">
            including
            <br />+ GST
          </span>
        </h3>

       {dmPage ? (<>
       
        <div className="flex flex-col mt-[20px] gap-4 w-full">
          <div>
          
            <button
              className="flex flex-col justify-center items-center bg-[#f18350] py-2 w-full"
              onClick={() => popupShow()}
              id="clck-apply-now-fees"
            >
             Download Brochure
            </button>
       
            {/* <hr className="border-b-2 border-b-[#2e2e2e] rounded-2xl w-full" /> */}
          </div>
        </div></>):(<> <div className="flex flex-col mt-[20px] gap-4 w-full">
          <div>
          <Link href={`${checkoutLink}`}>
            <button
              className="flex flex-col justify-center items-center bg-[#f18350] py-2 w-full"
              // onClick={() => popupShow()}
              id="clck-apply-now-fees"
            >
             Buy Now
            </button>
            </Link>
            {/* <hr className="border-b-2 border-b-[#2e2e2e] rounded-2xl w-full" /> */}
          </div>
        </div></>)}
      </div>
    </div>
  );
};

export default PricingSection;
