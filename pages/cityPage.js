import BlogContent from "../components/CityBlog/BlogContent/BlogConent";

export default function CityPage({ city }) {
  return (
    <div>
      <BlogContent city={city} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const city = params.city;

  return {
    props: {
      city,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { city: "Mumbai" } },
      { params: { city: "Pune" } },
      { params: { city: "Bangalore" } },
      // Add more cities here
    ],
    fallback: false,
  };
}
