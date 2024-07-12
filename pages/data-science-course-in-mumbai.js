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

const Mumbai = ({ data }) => {
  return (
    <div>
      <Head>
        <title>
          Data Science Course in Mumbai | Data Scientist Course - Skillslash
        </title>
        <meta
          name="description"
          content="Offering one of the Best Data Science Course in Mumbai, with hands-on projects, dual certification and guaranteed job referrals for all Data Science aspirants"
        />
        <meta
          name="keywords"
          content="Data Science training, Data Science certification, Data Science course, Data Science institute, Data Science institute in Mumbai, data science courses in Mumbai, data science courses, data science course in Mumbai, data scientist course, data scientist course in Mumbai"
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
              subTitle="Top 10"
        titleAuthor="Amit"
        authorPro="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/amit_profile.jpeg"
        linkedinId="https://www.linkedin.com/in/amit-ambi-axh08/"
        rytImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/mumbai_top_10_comp.webp"
        backgroundImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/blog_bg_mumbai.webp"
      />

      <BlogContent
        contentHtml={data.contentHtml}
        lastUpdated={data.lastUpdated}
        shareLink={data.shareLink}
        publishDate={data.publishDate}
      />

      <RelatedInfo
        pinCode={data.pinCode}
        relatedArea={data.relatedArea}
        relatedBlog={data.relatedBlog}
        aboutCity={data.aboutCity}
      />
         <InternalLinking/>
      <Footer />
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
