// Import and configure dotenv
import * as dotenv from "dotenv";
dotenv.config({path: "../.env"});

// Import and initialize firebase functions and admin
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp({
  credential: admin.credential.cert(
      `${process.env.FIREBASE_CREDENTIAL_FILE}`
  ),
});

// Import Express server
import * as express from "express";

// Import routes
import postsRouter from "./routes/v1/posts";

const app = express();

// Routes V1
app.use("/v1/posts", postsRouter);

exports.app = functions.https.onRequest(app);
