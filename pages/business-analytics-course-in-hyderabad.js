// pages/mumbai.js

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import BlogHeader from "../components/CityBlog/BlogHeader/BlogHeader";
import BlogContent from "../components/CityBlog/BlogContent/BlogConent"; 
import RelatedInfo from "../components/SeoComponents/ReleteadInfo/RelatedInfo"; 
import BAHyderabadData from "../Data/Cities/hyderabad/BAHyderabadData";
import Footer from "../components/Footer/Footer";
import InternalLinking from "../components/InternalLinking/InternalLinking";
import Popup from "../components/CityBlog/BlogPopup/Popup";

const BAHyderabad = ({ data }) => {
  return (
    <div>
      <Head>
        <title> Business analytics course with industry experience in Hyderabad - Skillslash</title>
        <meta
          name="description"
          content=" Step up to get direct company certification under our Business analytics course in Hyderabad. Study in live-interactive classes."
        />
        <meta
          name="keywords"
          content="business analytics training, business analytics course, business analytics institute, business analytics certification, business analytics training in hyderabad, business analytics course in hyderabad"
        />
        <link
          rel="canonical"
          href="https://skillslash.com/business-analytics-course-in-hyderabad"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Business analytics course in hyderabad",
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
        city=" Hyderabad"
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
        MumbaiData={BAHyderabadData} 
      />

    

      <InternalLinking />
      <Footer />
      <Popup />
    </div>
  );
};

export async function getStaticProps() {

  return {
    props: {
      data:BAHyderabadData ,
    },
  };
}

export default BAHyderabad;
