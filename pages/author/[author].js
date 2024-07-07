// pages/author/[author].js

import { getAllAuthors, getAllPostsByAuthor } from "../../lib/page";
import Link from "next/link";
import Head from "next/head";

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
      <div className="bg-blue-500 text-white text-center p-4 mb-8 rounded-md">
        <p>This is a banner for {author}</p>
      </div>

      {/* Grid of Posts */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300"
          >
            <Link href={`/${post.id}`}>
              <p className="block text-xl font-semibold text-blue-600 hover:text-blue-800">
                {post.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
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
    const posts = getAllPostsByAuthor(params.author);

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
