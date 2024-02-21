import React from "react";
import {
  MdOutlineVideocam,
  MdLiveTv,
  MdOutlineWorkHistory,
  MdLockOpen,
} from "react-icons/md";
import { PiCertificateBold, PiMedal } from "react-icons/pi";

const SkillsContent = ({ hrs, certification }) => {
  return (
    <div className="flex flex-col gap-2 py-4 px-5 bg-[#efefff] min-[642px]:hidden">
      <h3 className="text-xl font-bold px-5 py-1">Course Content</h3>
      <hr />
      <div className="flex flex-col gap-2 px-7 max-[741px]:px-3">
        <p className="flex gap-2 items-center justify-between py-2">
          <span className="flex gap-2 items-center">
            <MdOutlineVideocam className="text-xl" />
            Video Lessons
          </span>
          <span>
            <b>{hrs} Hrs</b>
          </span>
        </p>
        <hr />
        <p className="flex gap-2 items-center justify-between py-2">
          <span className="flex gap-2 items-center">
            <MdLiveTv className="text-xl" />
            Live Doubt Session
          </span>
          <span>
            <b>Weekly</b>
          </span>
        </p>
        <hr />
        <p className="flex gap-2 items-center justify-between py-2">
          <span className="flex gap-2 items-center">
            <MdLiveTv className="text-xl" />
            Live Project Sessions
          </span>
          <span>
            <b>Weekly</b>
          </span>
        </p>
        <hr />
        <p className="flex gap-2 items-center justify-between py-2">
          <span className="flex gap-2 items-center">
            <MdOutlineWorkHistory className="text-xl" />
            Career Support
          </span>
          <span>
            <b>Included</b>
          </span>
        </p>
        <hr />
        <p className="flex gap-2 items-center justify-between py-2">
          <span className="flex gap-2 items-center">
            <MdLockOpen className="text-xl" />
            Course Access
          </span>
          <span>
            <b>Lifetime</b>
          </span>
        </p>
        <hr />
        <p className="flex gap-2 items-center justify-between py-2">
          <span className="flex gap-2 items-center">
            <PiCertificateBold className="text-xl" />
            Certifications
          </span>
          <span>
            <b>{certification}</b>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SkillsContent;
