import React from 'react';
import BlogHeader from '../components/CityBlog/BlogHeader/BlogHeader';
import Navbar from '../components/Navbar/Navbar';
import BlogContent from '../components/CityBlog/BlogContent/BlogConent'; // Corrected import path
import mumbaiData from '../Data/Cities/KolkataData'; // Import the city data
import Head from 'next/head';

const Mumbai = () => {
  return (
    <div>
      <Head>
        <title>Data Science Course in Kolkata | Skillslash</title>
        <meta
          name="description"
          content=" Elevate your career, Learn Data Science. Choose from our Best Data Science Course in Kolkata designed by industry experts and earn a Microsoft Certification."
        />
        <meta
          name="keywords"
          content="data science training institute in Kolkata, data science training, data science course in Kolkata, data science training institute,data science course,data science training,online data science"
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
            }
          })}


        </script>
      </Head>
      <Navbar />
      <BlogHeader
        title="Top 10 Data Science Course Training Institutes in Kolkata"
        titleAuthor="Amit"
        authorPro="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/amit_profile.jpeg"
        linkedinId="https://www.linkedin.com/in/amit-ambi-axh08/"
        bannerImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/top_10_logo.webp"
      />
      <BlogContent 
        contentHtml={mumbaiData.contentHtml} 
        lastUpdated={mumbaiData.lastUpdated} 
        shareLink={mumbaiData.shareLink} 
        publishDate={mumbaiData.publishDate}
      />
    </div>
  );
};

export default Mumbai;
