// components/CityBlog/BlogHeader/BlogHeader.js

import Link from "next/link";
import Image from 'next/image';
import styles from './blogHeader.module.css';
import { FaLinkedin } from "react-icons/fa";

export default function BlogHeader({ title, author, linkedinId, bannerImg, authorPro }) {
  return (
    <header className={`${styles.blogHeader} grid grid-cols-2 `}>
      <div className={`${styles.titleAuthor} font-bold`}>
        <h1>{title}</h1>
        <div className={styles.authordiv}>
          <div className="flex items-center gap-2">
            <span className='text-[#F18350] font-semibold text-[16px]'>Author:</span>{" "}
            <div className="flex items-center gap-2">
         

                <Image className='rounded-[50%] ' src={authorPro} loading="lazy" width={30} height={30} alt="profile" />
 
                <span>{author}</span>
       
            </div>
          </div>
          {linkedinId && (
            <Link
              href={linkedinId}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline flex items-center gap-1'
            >
      
              <FaLinkedin />
            </Link>
          )}
        </div>
      </div>
      <div className={styles.banner}>
        <Image width={600} height={600} loading='lazy' src={bannerImg} alt='Banner Image' />
      </div>
    </header>
  );
}
