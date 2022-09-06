import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// Initialize firebase admin app
admin.initializeApp({
  credential: admin.credential.cert(
      "./lib/express-typescript-api-firebase-adminsdk-hc9td-2b5097761b.json"
  ),
});
import * as express from "express";

// Import POSTS routes
import postsRouter from "./routes/v1/posts";

const app = express();

// Routes V1
app.use("/v1/posts", postsRouter);

exports.app = functions.https.onRequest(app);
