import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

// Function to track link clicks
const trackLinkClick = (content) => {
  console.log(`Link clicked: ${content}`);
  // Add any other tracking code here (e.g., Google Analytics, etc.)
};

const OnlyContent = ({ content }) => {
  return (
    <div className="grid grid-cols-[70%,30%] justify-between p-10 gap-20 mx-[160px]">
      <div className="flex flex-col gap-4">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <div className="relative">
        <div className="bg-gray-400 p-8 h-fit items-center text-center rounded-md sticky bottom-0 top-0 my-5">
          <h3 className="font-bold text-[20px]">Table Of Contents</h3>
          <div className="text-[#fff]">
            <ul className="text-left my-2 flex flex-col gap-3">
              <li className="hover:text-[#4f419a]">
                <Link href="#part-of-course" onClick={() => trackLinkClick('What will you learn as a part of the data science course?')}>
                  What will you learn as a part of the data science course?
                </Link>
              </li>
              <hr />
              <li className="hover:text-[#4f419a]">
                <Link href="#tools-covered" onClick={() => trackLinkClick('Tools Covered')}>
                  Tools Covered
                </Link>
              </li>
              <hr />
              <li className="hover:text-[#4f419a]">
                <Link href="#what-career" onClick={() => trackLinkClick('What career-driven benefits can you gain with data science training?')}>
                  What career-driven benefits can you gain with data science training?
                </Link>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyContent;
