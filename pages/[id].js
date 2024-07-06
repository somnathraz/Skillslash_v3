// pages/[id].js

import Head from "next/head";
import BlogHeader from "../components/CityBlog/BlogHeader/BlogHeader";
import BlogContent from "../components/CityBlog/BlogContent/BlogConent";
import { getAllPostIds, getPostData } from "../lib/page";
import InternalLinking from "../components/InternalLinking/InternalLinking";
import Footer from "../components/Footer/Footer";
import RelatedInfo from "../components/SeoComponents/ReleteadInfo/RelatedInfo";

export default function Post({ postData, cityData }) {
  console.log("postData:", postData);
  console.log("cityData:", cityData);

  if (!postData || !cityData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
      </Head>
      <div>
        <BlogHeader
          title={postData.title}
          author={postData.author}
          bannerImg={postData.bannerImg}
        />
        <BlogContent
          contentHtml={postData.contentHtml}
          shareLink={postData.shareLink}
          lastUpdated={postData.lastUpdated}
        />
      </div>
      <div>
        <RelatedInfo {...cityData} />
        <InternalLinking />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  let cityData = {};

  try {
    const cityModule = await import(`../Data/cities/mumbai.js`);
    cityData = cityModule.default;
    console.log("Successfully loaded city data:", cityData);
  } catch (error) {
    console.error("Error loading city data:", error);
  }

  return {
    props: {
      postData,
      cityData,
    },
  };
}
