import Testimonial from "../models/testimonial.model.js";
import { redis } from "../lib/redis.js";
import cloudinary from "../lib/cloudinary.js";

export const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find({});
        res.json({ testimonials });
    } catch (error) {
        console.log("Error in getTestimonials controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const createTestimonial = async (req, res) => {
    try {
        const { clientName, message, clientImage } = req.body;
        let cloudinaryResponse = null;
        if (clientImage) {
            cloudinaryResponse = await cloudinary.uploader.upload(clientImage, { folder: "testimonials" });
        }

        const testimonial = await Testimonial.create({
            clientName,
            message,
            clientImage: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : ""
        });
        res.status(201).json({ testimonial });
    } catch (error) {
        console.log("Error in createTestimonial controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const deleteTestimonial = async (req, res) => {
    try {

        const testimonial = await Testimonial.findById(req.params.id);

        if (!testimonial) {
            return res.status(404).json({ message: "Testimonial not found" });
        }

        if (testimonial.clientImage) {
            const publicId = testimonial.clientImage.split("/").pop().split(".")[0];
        }

        try {
            await cloudinary.uploader.destroy(`testimonials/${publicId}`);
            console.log("Client image deleted from cloudinary");
        } catch (error) {
            console.log("Error in deleting client image from cloudinary", error.message);
        }
        await Testimonial.findByIdAndDelete(req.params.id);
        res.json({ message: "Testimonial deleted successfully" });
    } catch (error) {
        console.log("Error in deleteTestimonial controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const editTestimonial = async (req, res) => {
    try {
        const { clientName, message, clientImage } = req.body;
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ message: "Testimonial not found" });
        }
        if (testimonial.clientImage) {
            const publicId = testimonial.clientImage.split("/").pop().split(".")[0];
            try {
                await cloudinary.uploader.destroy(`testimonials/${publicId}`);
                console.log("Client image deleted from cloudinary");
            } catch (error) {
                console.log("Error in deleting client image from cloudinary", error.message);
            }
            try{
                cloudinaryResponse = await cloudinary.uploader.upload(testimonial.clientImage, { folder: "testimonials" });
            } catch (error) {
                console.log("Error in uploading client image to cloudinary", error.message);
            }
        }

        testimonial.clientName = clientName || testimonial.clientName;
        testimonial.message = message || testimonial.message;
        testimonial.clientImage = cloudinaryResponse?.secure_url || testimonial.clientImage;
        await testimonial.save();
        res.json({ testimonial });
    } catch (error) {
        console.log("Error in editTestimonial controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}