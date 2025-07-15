import express from "express";
import { createArticle, editArticle, deleteArticle, getfeaturedArticle, toggleFeaturedArticle, getArticles, getArticle } from "../controllers/article.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getArticles);
router.get("/featured", getfeaturedArticle);
router.post("/", protectRoute, adminRoute, createArticle);
router.patch("/:id", protectRoute, adminRoute, editArticle);
router.delete("/:id", protectRoute, adminRoute, deleteArticle);
router.patch("/", protectRoute, adminRoute, toggleFeaturedArticle);
router.get("/:id", getArticle);

export default router;