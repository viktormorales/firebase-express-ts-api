import * as firestore from "firebase-admin/firestore";
import * as express from "express";

// Set Firestore and "Posts" collection
const db = firestore.getFirestore();
const postsRef = db.collection("posts");

// Set Router
const homeRouter = express.Router();

homeRouter.get("/", async (req, res) => {
  const getPosts = await postsRef.get();

  const posts = getPosts.docs.map((post) => {
    return post.data();
  });

  res.json(posts);
});

export default homeRouter;
