

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import BlogHeader from "../components/CityBlog/BlogHeader/BlogHeader";
import BlogContent from "../components/CityBlog/BlogContent/BlogConent";
import RelatedInfo from "../components/SeoComponents/ReleteadInfo/RelatedInfo";
import ChandigarhData from "../Data/Cities/ChandigarhData";
import Footer from "../components/Footer/Footer";
import InternalLinking from "../components/InternalLinking/InternalLinking";

const Chandigarh = ({ data }) => {
  return (
    <div>
      <Head>
        <title>
        Top 10 Data Science Course Training Institutes in Chandigarh
        </title>
        <meta
          name="description"
          content="Best Data science course in Chandigarh at budget-friendly prices at Skillslash. Enrol in our data science course with placement support."
        />
        <meta
          name="keywords"
          content="data science certification in Chandigarh, data science course in Chandigarh with placement guarantee, data science course in Chandigarh, data science training in Chandigarh, data science courses, data science courses in Chandigarh, data science course, data science training, data science institute, data science certification"
        />
        <link
          rel="canonical"
          href="https://skillslash.com/data-science-course-in-chandigarh"
        />
        <script type="application/ld+json">
          {JSON.stringify({
        "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Data science course in Chandigarh",
      "brand": {
        "@type": "Brand",
        "name": "Skillslash"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "9.8",
        "bestRating": "10",
        "worstRating": "1",
        "ratingCount": "23742"
      }
          })}
        </script>

 
       

      </Head>

      <Navbar />

      <BlogHeader
      city="Chandigarh"
      noImg ={true}
        title=" Data Science Course Training Institutes in "
              subTitle="Top 10"
        titleAuthor="Amit"
        authorPro="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/ai_face.webp"
        linkedinId="https://www.linkedin.com/in/amit-ambi-axh08/"
        rytImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/mumbai_top_10_comp.webp"
        backgroundImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/blog_bg_mumbai.webp"
      />

      <BlogContent
        contentHtml={data.contentHtml}
        lastUpdated={data.lastUpdated}
        shareLink={data.shareLink}
        publishDate={data.publishDate}
        MumbaiData={ChandigarhData} // Adjusted prop name
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
      data: ChandigarhData,
    },
  };
}

export default Chandigarh;
