import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: [true, "Client name is required"],
    },
    message: {
        type: String,
        required: [true, "Message is required"],
    },
    clientImage: {
        type: String,
        required: [true, "Image is required"],
    }
}, {
    timestamps: true,
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;