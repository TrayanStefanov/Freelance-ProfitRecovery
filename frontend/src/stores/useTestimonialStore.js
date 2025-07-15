import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useTestimonialStore = create((set) => ({
	testimonials: [],
	loading: false,

	setTestimonials: (testimonials) => set({ testimonials }),
	createTestimonial: async (testimonialData) => {
		set({ loading: true });
		try {
			const res = await axios.post("/testimonials", testimonialData);
			set((prevState) => ({
				testimonials: [...prevState.testimonials, res.data],
				loading: false,
			}));
		} catch (error) {
			toast.error(error.response.data.error);
			set({ loading: false });
		}
	},
	fetchAllTestimonials: async () => {
		set({ loading: true });
		try {
			const response = await axios.get("/testimonials");
			set({ testimonials: response.data.testimonials, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch testimonials", loading: false });
			toast.error(error.response.data.error || "Failed to fetch testimonials");
		}
	},
	deleteTestimonial: async (testimonialId) => {
		set({ loading: true });
		try {
			await axios.delete(`/testimonials/${testimonialId}`);
			set((prevTestimonials) => ({
				testimonials: prevTestimonials.testimonials.filter((testimonial) => testimonial._id !== testimonialId),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to delete testimonial");
		}
	},
}));
