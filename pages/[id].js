import Head from "next/head";
import BlogHeader from "../components/CityBlog/BlogHeader/BlogHeader";
import BlogContent from "../components/CityBlog/BlogContent/BlogConent";
import { getAllPostIds, getPostData } from "../lib/page";
import InternalLinking from "../components/InternalLinking/InternalLinking";
import Footer from "../components/Footer/Footer";
import RelatedInfo from "../components/SeoComponents/ReleteadInfo/RelatedInfo";

export default function Post({ postData, cityData }) {
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
          linkedinId={postData.linkedinId}
          authorPro={postData.authorPro}
        />
        <BlogContent
          contentHtml={postData.contentHtml}
          shareLink={postData.shareLink}
          lastUpdated={postData.lastUpdated}
          publishDate={postData.publishDate}

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
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  let cityData = {};

  try {
    if (postData.city) {
      console.log(`Attempting to load city data for: ${postData.city}`);
      const cityModule = await import(`../Data/Cities/${postData.city}`);
      cityData = cityModule.default;
      console.log("Successfully loaded city data:", cityData);
    } else {

    }
  } catch (error) {
    console.error(`Error loading city data for ${postData.city}:`, error);
  }

  console.log("Final cityData:", cityData);

  return {
    props: {
      postData,
      cityData,
    },
  };
}

