// pages/mumbai.js

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import BlogHeader from "../components/CityBlog/BlogHeader/BlogHeader";
import BlogContent from "../components/CityBlog/BlogContent/BlogConent"; 
import RelatedInfo from "../components/SeoComponents/ReleteadInfo/RelatedInfo"; 
import BAMumbaiData from "../Data/Cities/mumbai/BAMumbaidata";
import Footer from "../components/Footer/Footer";
import InternalLinking from "../components/InternalLinking/InternalLinking";
import Popup from "../components/CityBlog/BlogPopup/Popup";

const BAMumbai = ({ data }) => {
  return (
    <div>
      <Head>
        <title> Top 7 Business Analytics Course Institutes in Mumbai [2024]        </title>
        <meta
          name="description"
          content=" Looking for the best business analytics institute in Mumbai? We have listed 7 top performing Business Analyst course Institutes in Mumbai. Read now!! "
        />
        <meta
          name="keywords"
          content="Business Analyst course, Business Analyst certification, Business Analyst courses online, Business Analyst training, Business Analyst program, Business Analyst certification courses, Business Analyst certification online, Business Analyst classes, Business Analyst course in Mumbai, Business Analyst certification in Mumbai, Business Analyst training in Mumbai."
        />
        <link
          rel="canonical"
          href="https://skillslash.com/business-analytics-course-in-mumbai"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Business analytics course in Mumbai",
            "brand": {
              "@type": "Brand",
              "name": "Skillslash"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "9.6",
              "bestRating": "10",
              "worstRating": "1",
              "ratingCount": "22657"
            }
          })}
        </script>
      </Head>

      <Navbar />

      <BlogHeader
        city=" Mumbai"
        title="Business Analytics Course Training Institutes"
        subTitle="Top 7"
        titleAuthor="Amit"
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
        MumbaiData={BAMumbaiData} // Passing MumbaiData to BlogContent
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
      data: BAMumbaiData,
    },
  };
}

export default BAMumbai;
