import React from "react";
import Image from "next/image";

const CourseSlider = () => {
  return (
    <div className="px-28 py-10 flex flex-col gap-4">
      <h3 className="text-4xl font-bold">Our Courses</h3>
      <div className="grid grid-cols-[45%,45%,45%] gap-8 overflow-scroll pb-4 pl-2">
        <div className="shadow rounded-lg bg-[#ede9ff] ">
          <div className="flex items-center gap-4 px-6 py-10">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/Dsa-course-icon.webp"
              alt="data science course"
              width={60}
              height={60}
              loading="lazy"
            />
            <h3 className="font-medium text-xl">
              DSA + System Design (FAANG interviews)
            </h3>
          </div>
          <div className="bg-white flex flex-wrap px-6 py-4 rounded-lg gap-4 text-xs items-center justify-between">
            <span>15+ hrs of lessons</span>
            <span>Live Projects</span>
            <span>Live Doubt Sessions</span>
            <button className="text-xs px-4 py-2">Start Learning</button>
          </div>
        </div>
        <div className="shadow rounded-lg bg-[#ede9ff] ">
          <div className="flex items-center gap-4 px-6 py-10">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/python-course-icon.webp"
              alt="data science course"
              width={60}
              height={60}
              loading="lazy"
            />
            <h3 className="font-medium text-xl">Python For Data Science</h3>
          </div>
          <div className="bg-white flex flex-wrap px-6 py-4 rounded-lg gap-4 text-xs items-center justify-between">
            <span>15+ hrs of lessons</span>
            <span>Live Projects</span>
            <span>Live Doubt Sessions</span>
            {/* <span>2 Live instructor-led projects</span>
            <span>Triple Certification</span> */}
            <button className="text-xs px-4 py-2">Start Learning</button>
          </div>
        </div>
        <div className="shadow rounded-lg bg-[#ede9ff] ">
          <div className="flex items-center gap-4 px-6 py-10">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Course_icon/Tableau-course-icon.webp"
              alt="data science course"
              width={60}
              height={60}
              loading="lazy"
            />
            <h3 className="font-medium text-xl">Tableau</h3>
          </div>
          <div className="bg-white flex flex-wrap px-6 py-4 rounded-lg gap-4 text-xs items-center justify-between">
            <span>15+ hrs of lessons</span>
            <span>Live Projects</span>
            <span>Live Doubt Sessions</span>
            {/* <span>2 Live instructor-led projects</span>
            <span>Triple Certification</span> */}
            <button className="text-xs px-4 py-2">Start Learning</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSlider;
