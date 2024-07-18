// pages/mumbai.js

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import BlogHeader from "../components/CityBlog/BlogHeader/BlogHeader";
import BlogContent from "../components/CityBlog/BlogContent/BlogConent";
import RelatedInfo from "../components/SeoComponents/ReleteadInfo/RelatedInfo";
import KolkataData from "../Data/Cities/KolkataData";
import Footer from "../components/Footer/Footer";
import InternalLinking from "../components/InternalLinking/InternalLinking";
import Popup from "../components/CityBlog/BlogPopup/Popup";

const Kolkata = ({ data }) => {
  return (
    <div>
      <Head>
        <title>
        Top 10 Data Science Course Training Institutes in Kolkata
        </title>
        <meta
          name="description"
          content=" Discover the leading Data Science course Institutes in Kolkata. Choose from the best data science training in Kolkata and elevate your professional journey."
        />
        <meta
          name="keywords"
          content=" data science course in kolkata, data scientist course in kolkata, data science course in kolkata with placement, best data science course in kolkata, best data science training institute in kolkata, data science institute in kolkata, data science course in kolkata fees, data science course fees in kolkata, best institute for data science in kolkata, data science training in kolkata"
        />
        <link
          rel="canonical"
          href="https://skillslash.com/data-science-course-training-kolkata"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Data science course in Kolkata",
            "brand": {
              "@type": "Brand",
              "name": "Skillslash"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "9.9",
              "bestRating": "10",
              "worstRating": "1",
              "ratingCount": "22880"
            },
          })}
        </script>

 
       

      </Head>

      <Navbar />

      <BlogHeader
      city="Kolkata"
      noImg ={true}
        title=" Data Science Course Training Institutes in "
              subTitle="Top 10"
        titleAuthor="Amit"
        authorPro="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/ai_face.webp"
        linkedinId="https://www.linkedin.com/in/amit-ambi-axh08/"
        rytImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/kolkata_right.webp"
        backgroundImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/blog_bg_mumbai.webp"
        cityImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/kolkata_palce.webp"
      />

      <BlogContent
        contentHtml={data.contentHtml}
        lastUpdated={data.lastUpdated}
        shareLink={data.shareLink}
        publishDate={data.publishDate}
        MumbaiData={KolkataData} // Adjusted prop name
      />

   
         <InternalLinking/>
      <Footer />
      <Popup/>
    </div>
  );
};

export async function getStaticProps() {
  // Since the data is already in a JS file, we can directly import it
  return {
    props: {
      data: KolkataData,
    },
  };
}

export default Kolkata;
