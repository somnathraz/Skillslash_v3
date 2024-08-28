// pages/Bangalore.js

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import BlogHeader from "../components/CityBlog/BlogHeader/BlogHeader";
import BlogContent from "../components/CityBlog/BlogContent/BlogConent";
import Footer from "../components/Footer/Footer";
import InternalLinking from "../components/InternalLinking/InternalLinking";
import Popup from "../components/CityBlog/BlogPopup/Popup";

import PatnaData from "../Data/Cities/Patna/DSPatnaData";

const Patna = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Best 10 Data Science Institutes in Patna        </title>
        <meta
          name="description"
          content="Explore the Best 10 data science courses in Patna. Find expert training, hands-on experience, and the best institutes to advance your career in data science"
        />
        <meta
          name="keywords"
          content="Data Science training, Data Science certification, Data Science course, Data Science institute, Data Science institute in Patna, data science courses in Patna, data science courses, data science course in Patna, data scientist course, data scientist course in Patna"
        />
        <link
          rel="canonical"
          href="https://skillslash.com/data-science-course-in-patna"
        />
        <script type="application/ld+json">
          {JSON.stringify({
      "ReviewSchema": {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Data science course in Patna",
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
    }
          })}
        </script>
      </Head>

      <Navbar />

      <BlogHeader
        city="Patna"
        title=" Data Science Course Training Institutes in "
        subTitle="Top 10"
        titleAuthor="Patna"
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
        MumbaiData={PatnaData}// Passing MumbaiData to BlogContent
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
      data: PatnaData,
    },
  };
}

export default Patna;
