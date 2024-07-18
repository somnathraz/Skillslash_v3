// pages/mumbai.js

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import BlogHeader from "../components/CityBlog/BlogHeader/BlogHeader";
import BlogContent from "../components/CityBlog/BlogContent/BlogConent"; 
import RelatedInfo from "../components/SeoComponents/ReleteadInfo/RelatedInfo"; 
import mumbaiData from "../Data/Cities/mumbaiData";
import Footer from "../components/Footer/Footer";
import InternalLinking from "../components/InternalLinking/InternalLinking";
import Popup from "../components/CityBlog/BlogPopup/Popup";

const Mumbai = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Top 11 Data Science Course Training Institutes in Mumbai</title>
        <meta
          name="description"
          content="Top 11 data science course institutes in Mumbai revealed! Choose from the best data science courses in Mumbai to excel in your career."
        />
        <meta
          name="keywords"
          content="data science course in mumbai, data scientist course in mumbai, data science course in mumbai with placement, data science course fees in mumbai, data science course in navi mumbai, data science course in mumbai fees, data science institute in mumbai, best data science course in mumbai, data science classes in mumbai, best institute for data science in mumbai"
        />
        <link
          rel="canonical"
          href="https://skillslash.com/data-science-course-in-mumbai"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Data science course in Mumbai",
            brand: {
              "@type": "Brand",
              name: "Skillslash",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "9.9",
              bestRating: "10",
              worstRating: "1",
              ratingCount: "25987",
            },
          })}
        </script>
      </Head>

      <Navbar />

      <BlogHeader
        city="Mumbai"
        title=" Data Science Course Training Institutes in "
        subTitle="Top 11"
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
        MumbaiData={mumbaiData} // Passing MumbaiData to BlogContent
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
      data: mumbaiData,
    },
  };
}

export default Mumbai;
