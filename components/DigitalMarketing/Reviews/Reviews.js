import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import styles from "./Review.module.css";
import Image from 'next/image';
import reviewsData from './ReviewData';

const Reviews = () => {
  return (
    <>

      <div className={styles.slider}>
      <h2>Hear It From Our Students</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}  // Adjust spacing as needed
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {reviewsData.map((review) => (
            <SwiperSlide key={review.id}>
              <div className={styles.slidercard}>
                <Image src={review.src} width={300} height={300} alt={review.alt} loading='lazy' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Reviews;
