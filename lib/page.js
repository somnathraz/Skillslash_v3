import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

export function getSortedPostsData() {
  // Get file names under /content
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove file extension to get id
    const id = fileName.replace(/\.(json|md)$/, "");

    // Read file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Check file extension and parse accordingly
    let data;
    if (fileName.endsWith(".json")) {
      data = JSON.parse(fileContents);
    } else if (fileName.endsWith(".md")) {
      const matterResult = matter(fileContents);
      data = matterResult.data;
    }

    // Combine the data with the id
    return {
      id,
      ...data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.(json|md)$/, ""),
      },
    };
  });
}

export function getPostData(id) {
  // Try reading JSON file
  let fullPath = path.join(postsDirectory, `${id}.json`);
  if (!fs.existsSync(fullPath)) {
    // Fallback to reading Markdown file
    fullPath = path.join(postsDirectory, `${id}.md`);
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Check file extension and parse accordingly
  let data;
  if (fullPath.endsWith(".json")) {
    data = JSON.parse(fileContents);
  } else if (fullPath.endsWith(".md")) {
    const matterResult = matter(fileContents);
    data = matterResult.data;
  }

  // Combine the data with the id
  return {
    id,
    data,
  };
}
