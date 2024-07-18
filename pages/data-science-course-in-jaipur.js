

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import BlogHeader from "../components/CityBlog/BlogHeader/BlogHeader";
import BlogContent from "../components/CityBlog/BlogContent/BlogConent"; 
import RelatedInfo from "../components/SeoComponents/ReleteadInfo/RelatedInfo"; 
import JaipurData from "../Data/Cities/jaipurData";
import Footer from "../components/Footer/Footer";
import InternalLinking from "../components/InternalLinking/InternalLinking";
import Popup from "../components/CityBlog/BlogPopup/Popup";

const Jaipur  = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Top 10 Data Science Course Training Institutes in Jaipur</title>
        <meta
          name="description"
          content="Discover the best data science courses in Jaipur. Explore our top pics of data science Institutes in Jaipur and excel in your data science career!"
        />
        <meta
          name="keywords"
          content="data science course in jaipur, data science course fees in jaipur, data science institute in jaipur, data science coaching in jaipur, data science in jaipur, data science course jaipur, data science training in jaipur, best data science course in jaipur, data science jaipur"
        />
        <link
          rel="canonical"
          href="https://skillslash.com/data-science-course-in-jaipur"
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
        city="Jaipur"
        title=" Data Science Course Training Institutes in "
        subTitle="Top 10"
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
        MumbaiData={JaipurData} // Passing MumbaiData to BlogContent
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
      data: JaipurData,
    },
  };
}

export default Jaipur;
