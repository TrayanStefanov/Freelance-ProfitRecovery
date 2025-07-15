import Article from "../models/article.model.js";
import { redis } from "../lib/redis.js";
import cloudinary from "../lib/cloudinary.js";

export const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({}).sort({ createdAt: -1 });
        res.json({ articles });
    } catch (error) {
        console.log("Error in getArticles controller :", error.message);
        res.status(500).json({ message: "Server error :", error: error.message });
    }
}

export const getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.json({ article });
  } catch (error) {
    console.error("Error in getArticle controller :", error.message);
    res.status(500).json({ message: "Server error :", error: error.message });
  }
};
export const getfeaturedArticle = async (req, res) => {
    try {
        let featuredArticle = await redis.get("featuredArticle");
        if (featuredArticle) {
            return res.json({ article: JSON.parse(featuredArticle) });
        }
        featuredArticle = await Article.findOne({ isFeatured: true });
        if (!featuredArticle) {
            return res.status(404).json({ message: "No featured article found" });
        }

        await redis.set("featuredArticle", JSON.stringify(featuredArticle));
        res.json({ featuredArticle });
    } catch (error) {
        console.log("Error in getfeaturedArticle controller :", error.message);
        res.status(500).json({ message: "Server error :", error: error.message });
    }
}

export const createArticle = async (req, res) => {
    try {
        const { title, subtitle, description, image } = req.body;
        let cloudinaryResponse = null;
        if (image) {
            cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "articles" });
        }
        const article = await Article.create({
            title,
            subtitle,
            description,
            image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
        });
        res.status(201).json({ article });
    } catch (error) {
        console.log("Error in createArticle controller :", error.message);
        res.status(500).json({ message: "Server error :", error: error.message });
    }
}

export const deleteArticle = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }
        if (article.image) {
            const publicId = article.image.split("/").pop().split(".")[0];
        }
        try {
            await cloudinary.uploader.destroy(`articles/${publicId}`);
            console.log("Article image deleted from cloudinary");
        } catch (error) {
            console.log("Error in deleting article image from cloudinary : ", error.message);
        }

        await Article.findByIdAndDelete(req.params.id);
        res.json({ message: "Article deleted successfully" });
    } catch (error) {
        console.log("Error in deleteArticle controller :", error.message);
        res.status(500).json({ message: "Server error :", error: error.message });
    }
}

export const editArticle = async (req, res) => {
    try {
        const { title, subtitle, description, image } = req.body;
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        if (article.image) {
            const publicId = article.image.split("/").pop().split(".")[0];
            try {
                await cloudinary.uploader.destroy(`articles/${publicId}`);
                console.log("Article old image deleted from cloudinary");
            } catch (error) {
                console.log("Error in deleting old article image from cloudinary", error.message);
            }
            cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "articles" });
        }

        article.title = title || article.title;
        article.subtitle = subtitle || article.subtitle;
        article.description = description || article.description;
        article.image = cloudinaryResponse?.secure_url || article.image;
        await article.save();
        res.json({ article });
    } catch (error) {
        console.log("Error in editArticle controller :", error.message);
        res.status(500).json({ message: "Server error :", error: error.message });
    }
}

export const toggleFeaturedArticle = async (req,res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (article) {
            article.isFeatured = !article.isFeatured;
            const updatedArticle = await article.save();
            await updateFeaturedArticleCache();
            res.json({ updatedArticle });
        } else {
            return res.status(404).json({ message: "Article not found" });
        }
    } catch (error) {
        console.log("Error in toggleFeaturedArticle controller :", error.message);
        res.status(500).json({ message: "Server error :", error: error.message });
    }
}

async function updateFeaturedArticleCache() {
    try{
        const featuredArticle = await Article.findOne({ isFeatured: true });
        await redis.set("featuredArticle", JSON.stringify(featuredArticle));
    } catch (error) {
        console.log("Error in updating featured article cache :", error.message);
    }
}