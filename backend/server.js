import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//routes

import authRoute from "./routes/auth.route.js";
import articleRoute from "./routes/article.route.js";
import testimonialRoute from "./routes/testimonial.route.js";
import sitemapRoute from "./routes/sitemap.route.js";

import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/articles", articleRoute);
app.use("/api/testimonials", testimonialRoute);
app.use('/', sitemapRoute);


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}` + "\n");
    connectDB();
})