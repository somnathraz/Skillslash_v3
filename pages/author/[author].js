// pages/author/[author].js

import { getAllAuthors, getAllPostsByAuthor } from "../../lib/page";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

export default function AuthorPage({ author, posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Head>
          <title>Posts by {author}</title>
        </Head>
        <h1 className="text-3xl font-bold text-center mb-8">
          Posts by {author}
        </h1>
        <p className="text-center mt-8 text-gray-600">
          No posts found for this author.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Posts by {author}</title>
      </Head>
      <h1 className="text-3xl font-bold text-center mb-8">Posts by {author}</h1>
      {/* <div className="bg-blue-500 text-white text-center p-4 mb-8 rounded-md">
        <p>This is a banner for {author}</p>
      </div> */}

      {/* Grid of Posts */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white gap-4 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300"
          >
            <div className="flex flex-col sm:flex-row">
              <Image
         
                src={post.bannerImg}
                width={260}
                height={260}
                alt="banner Image"
                loading="lazy"
                sizes="(max-width: 640px) 50vw, 260px"
                className="w-full sm:w-64 h-auto p-2 rounded"
              />
              <Link href={`/${post.id}`}>
                <div className="flex flex-col gap-2">
                  <p className="block text-lg sm:text-xl font-semibold text-[#4f419a] hover:text-blue-800">
                    {post.title}
                  </p>
                  <p className="text-[10px]">{post.description}</p>
                </div>
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[14px]">Last Updated: {post.lastUpdated}</p>
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full"
                  src={post.authorPro}
                  width={30}
                  height={30}
                  alt="profile"
                  loading="lazy"
                />
                <p>{post.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const authors = await getAllAuthors();
    const paths = authors.map((author) => ({
      params: { author },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const posts = await getAllPostsByAuthor(params.author);

    return {
      props: {
        author: params.author,
        posts,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        author: params.author,
        posts: [], // Return an empty array in case of error or no posts found
      },
    };
  }
}
