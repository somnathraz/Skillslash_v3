import Link from "next/link";
import Image from 'next/image';
import styles from './blogHeader.module.css';
import { FaLinkedin } from "react-icons/fa";

export default function BlogHeader({ title, subTitle, city, author, linkedinId, bannerImg, rytImg, authorPro, desktopBackground, mobileBackgorund,  noImg }) {
  return (
    <header className={styles.Blog}>
      <div className={`${styles.blogHeader} ${styles.desktopBackground}`}>
        <div className={styles.backgroundImage}>
        {noImg ? (""):(<>  <Image
            src={desktopBackground}
            layout="fill"
            objectFit="contain"
          
            className={styles.desktopImage}
          />
          <Image
            src={mobileBackgorund}
            layout="fill"
            objectFit="cover"
     
            className={styles.mobileImage}
          /></>)}
        </div>
        <div className={`${styles.titleAuthor} font-bold`}>
          <div>
            <h1 className={styles.title}>
              <span className={styles.subtitle}>{subTitle}</span><br className={styles.mobileBreak} /> {title} <span className={styles.city}>{city}</span>
            </h1>
          </div>
          <div className={styles.authordiv}>
            <div className="flex items-center gap-2">
              <span className='text-[#Fff] font-bold text-[20px]'>Author:</span>{" "}
              <div className="flex items-center gap-2">
                <Image className='rounded-[50%]' src={authorPro} loading="lazy" width={30} height={30} alt="profile" />
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
        <div className={styles.rytImg}>
          <Image width={500} height={400} loading='lazy' src={rytImg} alt='Banner Image' />
        </div>
      </div>
    {noImg ? (<></>):(<>  <Image className={styles.mumbai} src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/mumba_city.webp" width={600} height={200} loading="lazy" alt="mumbai" />  <Image className={styles.mumbai} src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/mumba_city.webp" width={600} height={200} loading="lazy" alt="mumbai" /></>)}
    </header>
  );
}
