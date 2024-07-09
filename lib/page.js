import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content");

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id1: fileName.replace(/\.json$/, ""),
    },
  }));
}

export function getPostData(id1) {
  const fullPath = path.join(postsDirectory, `${id1}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const data = JSON.parse(fileContents);
  
  return {
    id1,
    data,
  };
}
