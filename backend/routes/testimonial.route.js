import express from "express";
import { createTestimonial, editTestimonial, deleteTestimonial, getTestimonials } from "../controllers/testimonial.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getTestimonials);
router.post("/", protectRoute, adminRoute, createTestimonial);
router.patch("/:id", protectRoute, adminRoute, editTestimonial);
router.delete("/:id", protectRoute, adminRoute, deleteTestimonial);

export default router;