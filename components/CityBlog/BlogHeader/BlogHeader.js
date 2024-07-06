// components/Header.js
import Image from 'next/image';
import styles from './blogHeader.module.css';
import ShareButtons from '../ShareButton';
import Link from 'next/link';

export default function Header({ title, author, linkedin, bannerImg }) {
  return (
    <header className={`${styles.blogHeader} grid grid-cols-2`}>
      <div className={`${styles.titleAuthor} font-bold`}>
        <h1>{title}</h1>
        <div className='flex justify-between mx-10'>
          <p>
            <span className='text-[#F18350] font-semibold text-[16px]'>Author:</span>{" "}
            {author}{" "}
            {linkedin && (
              <Link
                href={linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:underline'
              >
                (LinkedIn)
              </Link>
            )}
          </p>

        </div>
      </div>
      <div className={styles.banner}>
        {/* Your banner image or content */}
        <Image width={600} height={600} loading='lazy' src={bannerImg} alt='Banner Image' />
      </div>
    </header>
  );
}
