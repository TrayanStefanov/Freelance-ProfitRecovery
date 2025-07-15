import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    subtitle: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Article text is required"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});

const Article = mongoose.model("Article", articleSchema);
export default Article;