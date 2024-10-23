// pages/Indore.js

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import BlogHeader from "../components/CityBlog/BlogHeader/BlogHeader";
import BlogContent from "../components/CityBlog/BlogContent/BlogConent";
import IndoreData from "../Data/Cities/indore/DSIndore";
import Footer from "../components/Footer/Footer";
import InternalLinking from "../components/InternalLinking/InternalLinking";
import Popup from "../components/CityBlog/BlogPopup/Popup";

const Mumbai = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Top 10 Data Science Course Institutes in Indore        </title>
        <meta
          name="description"
          content="Explore the top 10 data science institutes in indore. Boost your career with expert training and hands-on projects. Enroll now to master data science skills"
        />
        <meta
          name="keywords"
          content="Data Science training, Data Science certification, Data Science course, Data Science institute, Data Science institute in indore, data science courses in indore, data science courses, data science course in indore, data scientist course, data scientist course in indore"
        />
        <link
          rel="canonical"
          href="https://skillslash.com/data-science-course-in-indore"
        />
        <script type="application/ld+json">
          {JSON.stringify({
             "@context": "https://schema.org/",
             "@type": "Product",
             "name": "Data science course in Indore",
             "brand": {
               "@type": "Brand",
               "name": "Skillslash"
             },
             "aggregateRating": {
               "@type": "AggregateRating",
               "ratingValue": "9.9",
               "bestRating": "10",
               "worstRating": "1",
               "ratingCount": "25987"
             }
          })}
        </script>
      </Head>

      <Navbar />

      <BlogHeader
        city="Indore"
        title=" Data Science Course Training Institutes in "
        subTitle="Top 10"
        titleAuthor="Indore"
        authorPro="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/ai_face.webp"
        linkedinId="https://www.linkedin.com/in/amit-ambi-axh08/"
        rytImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/mumbai_top_10_comp.webp"
        backgroundImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/blog_bg_mumbai.webp"
        cityImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/mumbai_place.webp"
      />

      <BlogContent
        contentHtml={data.contentHtml}
        lastUpdated={data.lastUpdated}
        shareLink={data.shareLink}
        publishDate={data.publishDate}
        MumbaiData={IndoreData} // Passing MumbaiData to BlogContent
      />

      <InternalLinking />
      <Footer />
      <Popup />
    </div>
  );
};

export async function getStaticProps() {
  // Since the data is already in a JS file, we can directly import it
  return {
    props: {
      data: IndoreData,
    },
  };
}

export default Mumbai;
