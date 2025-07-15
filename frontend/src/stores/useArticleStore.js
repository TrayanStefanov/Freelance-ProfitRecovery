import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useArticleStore = create((set) => ({
	articles: [],
	featuredArticle: null,
	loading: false,
	currentArticle: null, // Add this at the top with other state values

	fetchArticleById: async (id) => {
		set({ loading: true });
		try {
			const response = await axios.get(`/articles/${id}`);
			set({ currentArticle: response.data.article, loading: false });
		} catch (error) {
			set({ loading: false });
			toast.error("Failed to fetch article");
			console.error("Error fetching article by ID:", error);
		}
	},

	setArticles: (articles) => set({ articles }),
	createProduct: async (articleData) => {
		set({ loading: true });
		try {
			const res = await axios.post("/articles", articleData);
			set((prevState) => ({
				articles: [...prevState.articles, res.data],
				loading: false,
			}));
		} catch (error) {
			toast.error(error.response.data.error);
			set({ loading: false });
		}
	},
	fetchAllArticles: async () => {
		set({ loading: true });
		try {
			const response = await axios.get("/articles");
			set({ articles: response.data.articles, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch articles", loading: false });
			toast.error(error.response.data.error || "Failed to fetch articles");
		}
	},
	fetchArticlesByCategory: async (category) => {
		set({ loading: true });
		try {
			const response = await axios.get(`/articles/category/${category}`);
			set({ articles: response.data.articles, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch articles", loading: false });
			toast.error(error.response.data.error || "Failed to fetch articles");
		}
	},
	deleteArticle: async (articleId) => {
		set({ loading: true });
		try {
			await axios.delete(`/articles/${articleId}`);
			set((prevArticles) => ({
				articles: prevArticles.articles.filter((article) => article._id !== articleId),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to delete product");
		}
	},
	toggleFeaturedArticle: async (articleId) => {
		set({ loading: true });
		try {
			const response = await axios.patch(`/articles/${articleId}`);
			// this will update the isFeatured prop of the product
			set((prevArticles) => ({
				articles: prevArticles.articles.map((article) =>
					article._id === articleId ? { ...article, isFeatured: response.data.isFeatured } : article
				),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to update product");
		}
	},
	fetchFeaturedArticles: async () => {
		set({ loading: true });
		try {
			const response = await axios.get("/articles/featured");
			const featured = response.data.article || response.data.featuredArticle;
			set({ featuredArticle: featured, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch articles", loading: false });
			console.log("Error fetching featured articles:", error);
		}
	},
}));
