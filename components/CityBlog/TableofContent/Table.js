// components/CityBlog/TableOfContents.js
export default function TableOfContents({ toc }) {
  return (
    <nav>
      <h2>Table of Contents</h2>
      <ul>
        {toc.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
