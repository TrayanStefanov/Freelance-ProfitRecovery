import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader } from "lucide-react";
import { useTestimonialStore } from "../stores/useTestimonialStore";

const CreateTestimonialForm = () => {
	const [newTestimonial, setNewTestimonial] = useState({
		clientName: "",
		message: "",
		clientImage: "",
	});

	const { createTestimonial, loading } = useTestimonialStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await createTestimonial(newTestimonial);
			setNewTestimonial({ clientName: "", message: "", clientImage: "" });
		} catch {
			console.log("error creating a product");
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setNewTestimonial({ ...newTestimonial, clientImage: reader.result });
			};

			reader.readAsDataURL(file); // base64
		}
	};

	return (
		<motion.div
			className='bg-primary shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<h2 className='text-2xl font-semibold mb-6 text-secondary'>Create New Product</h2>

			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label htmlFor='clientName' className='block text-sm font-medium text-secondary'>
						Company Name
					</label>
					<input
						type='text'
						id='clientName'
						name='clientName'
						value={newTestimonial.clientName}
						onChange={(e) => setNewTestimonial({ ...newTestimonial, clientName: e.target.value })}
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
						 px-3 text-secondary focus:outline-none focus:ring-2
						focus:ring-secondary focus:border-secondary'
						required
					/>
				</div>

				<div>
					<label htmlFor='message' className='block text-sm font-medium text-secondary'>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						value={newTestimonial.message}
						onChange={(e) => setNewTestimonial({ ...newTestimonial, message: e.target.value })}
						rows='3'
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
						 py-2 px-3 text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
						required
					/>
				</div>


				<div className='mt-1 flex items-center'>
					<input type='file' id='clientImage' className='sr-only' accept='image/*' onChange={handleImageChange} />
					<label
						htmlFor='clientImage'
						className='cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-secondary hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
					>
						<Upload className='h-5 w-5 inline-block mr-2' />
						Upload Image
					</label>
					{newTestimonial.clientImage && <span className='ml-3 text-sm text-gray-400'>Image uploaded </span>}
				</div>

				<button
					type='submit'
					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-secondary bg-accent hover:border-secondary 
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50'
					disabled={loading}
				>
					{loading ? (
						<>
							<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
							Loading...
						</>
					) : (
						<>
							<PlusCircle className='mr-2 h-5 w-5' />
							Create Testimonial
						</>
					)}
				</button>
			</form>
		</motion.div>
	);
};
export default CreateTestimonialForm;
