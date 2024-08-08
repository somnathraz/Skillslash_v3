// pages/Bangalore.js

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import BlogHeader from "../components/CityBlog/BlogHeader/BlogHeader";
import BlogContent from "../components/CityBlog/BlogContent/BlogConent";
import Footer from "../components/Footer/Footer";
import InternalLinking from "../components/InternalLinking/InternalLinking";
import Popup from "../components/CityBlog/BlogPopup/Popup";
import HyderbadData from "../Data/Cities/hyderabad/DSHydrerbadData";

const Mumbai = ({ data }) => {
  return (
    <div>
      <Head>
        <title> Data Science, Data Scientist Courses in Hyderabad-Enroll Now </title>
        <meta
          name="description"
          content="Boost your Career with Skillslash Data Science, Data Scientist Online Course Training in Hyderabad, and get Placed in Top Companies. You'll gain real-time work experience."
        />
        <meta
          name="keywords"
          content="data science course in hyderabad,data science training in hyderabad,best data science institute in hyderabad,data science course in hyderabad with placements,data science institutes in hyderabad,data science training in dilsukhnagar,best institute for data science in hyderabad,data science course fees in hyderabad,data scientist course in hyderabad, data science training in hyderabad with placement, best data science institute in hyderabad with placement, data science in hyderabad, data science course in ameerpet, big data course in hyderabad,data science coaching in hyderabad"
        />
        <link
          rel="canonical"
          href="https://skillslash.com/data-science-course-training-hyderabad"
        />
        <script type="application/ld+json">
          {JSON.stringify({
         "ReviewSchema": {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Data science course in Hyderabad",
            "brand": {
              "@type": "Brand",
              "name": "Skillslash"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "9.8",
              "bestRating": "10",
              "worstRating": "1",
              "ratingCount": "22680"
            }
          }
          })}
        </script>
      </Head>

      <Navbar />

      <BlogHeader
        city="Hyderabad"
        title=" Data Science Course Training Institutes in "
        subTitle="Top 10"
        titleAuthor="Hyderabad"
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
        MumbaiData={HyderbadData} // Passing MumbaiData to BlogContent
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
      data: HyderbadData,
    },
  };
}

export default Mumbai;
