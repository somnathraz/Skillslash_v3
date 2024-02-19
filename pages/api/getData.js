// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "../../lib/mongodb";
export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  let myPost = await db.collection("getInfo").insertOne(req.body);
  console.log(req.body);
  res.status(200).json({ name: "done" });
}
