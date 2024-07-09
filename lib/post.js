import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import toc from 'remark-toc';

const contentDirectory = path.join(process.cwd(), 'blogPage');

export function getAllPostIds() {
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export function getPostData(id) {
  const fullPath = path.join(contentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  // Process Markdown content to include Table of Contents and convert to HTML
  const processedContent = remark()
    .use(toc, { heading: 'toc', maxDepth: 2 }) // Add Table of Contents support
    .use(html, { sanitize: false }) // Enable HTML tags in Markdown content
    .processSync(matterResult.content) // Process Markdown content
    .toString(); // Convert processed content to string

  return {
    id,
    contentHtml: processedContent,
    ...matterResult.data, // Include front matter data
  };
}

export function getAllAuthors() {
  const fileNames = fs.readdirSync(contentDirectory);
  const authors = fileNames.map((fileName) => {
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return matterResult.data.author;
  });

  return Array.from(new Set(authors)); // Remove duplicates
}

export function getAllPostsByAuthor(author) {
  const fileNames = fs.readdirSync(contentDirectory);
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    if (matterResult.data.author === author) {
      return {
        id: fileName.replace(/\.md$/, ''),
        ...matterResult.data,
      };
    }
    return null;
  }).filter(); // Remove null entries

  return posts;
}
