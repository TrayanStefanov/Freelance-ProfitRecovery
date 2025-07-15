import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader } from "lucide-react";
import { useArticleStore } from "../stores/useArticleStore";


const CreateArticleForm = () => {
	const [newArticle, setNewArticle] = useState({
		title: "",
		subtitle: "",
		description: "",
		image: "",
	});

	const { createProduct, loading } = useArticleStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await createProduct(newArticle);
			setNewArticle({ title: "", subtitle: "", description: "", image: "" });
		} catch {
			console.log("error creating a product");
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setNewArticle({ ...newArticle, image: reader.result });
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
			<h2 className='text-2xl font-semibold mb-6 text-secondary'>Create New Article</h2>

			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label htmlFor='title' className='block text-sm font-medium text-secondary'>
						Article Title
					</label>
					<input
						type='text'
						id='title'
						name='title'
						value={newArticle.title}
						onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
						 px-3 text-secondary focus:outline-none focus:ring-2
						focus:ring-secondary focus:border-secondary'
						required
					/>
				</div>

				<div>
					<label htmlFor='subtitle' className='block text-sm font-medium text-secondary'>
						Subtitle - optional
					</label>
					<input
						type='text'
						id='subtitle'
						name='subtitle'
						value={newArticle.subtitle}
						onChange={(e) => setNewArticle({ ...newArticle, subtitle: e.target.value })}
						step='0.01'
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm 
						py-2 px-3 text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
					/>
				</div>

				<div>
					<label htmlFor='description' className='block text-sm font-medium text-secondary'>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						value={newArticle.description}
						onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
						rows='3'
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
						 py-2 px-3 text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
						required
					/>
				</div>

				<div className='mt-1 flex items-center'>
					<input type='file' id='image' className='sr-only' accept='image/*' onChange={handleImageChange} />
					<label
						htmlFor='image'
						className='cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-secondary hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'
					>
						<Upload className='h-5 w-5 inline-block mr-2' />
						Upload Image
					</label>
					{newArticle.image && <span className='ml-3 text-sm text-gray-400'>Image uploaded </span>}
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
							Create Article
						</>
					)}
				</button>
			</form>
		</motion.div>
	);
};
export default CreateArticleForm;
