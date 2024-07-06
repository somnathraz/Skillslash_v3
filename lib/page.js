// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import toc from 'remark-toc';

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllPostIds() {
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
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
