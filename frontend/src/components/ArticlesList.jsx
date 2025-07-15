import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useArticleStore } from "../stores/useArticleStore";

const ArticlesList = () => {
	const { deleteArticle, toggleFeaturedArticle, articles } = useArticleStore();

	console.log("articles", articles);

	return (
		<motion.div
			className='bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<table className=' min-w-full divide-y divide-gray-700'>
				<thead className='bg-primary'>
					<tr>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider'
						>
							Title
						</th>

						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider'
						>
							SubTitle
						</th>

						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider'
						>
							Description
						</th>

						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider'
						>
							Featured
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider'
						>
							Actions
						</th>
					</tr>
				</thead>

				<tbody className='bg-secondary divide-y divide-gray-700'>
					{articles?.map((article) => (
						<tr key={article._id} className='hover:bg-gray-700'>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='flex items-center'>
									<div className='flex-shrink-0 h-10 w-10'>
										<img
											className='h-10 w-10 rounded-full object-cover'
											src={article.image}
											alt={article.title}
										/>
									</div>
									<div className='ml-4'>
										<div className='text-sm font-medium text-secondary'>{article.title}</div>
									</div>
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-primary'>{article.subtitle}</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap max-w-[300px] overflow-hidden'>
								<div className='text-sm text-primary'>{article.description}</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<button
									onClick={() => toggleFeaturedArticle(article._id)}
									className={`p-1 rounded-full ${article.isFeatured ? "bg-yellow-400 text-gray-900" : "bg-gray-600 text-secondary"
										} hover:bg-yellow-500 transition-colors duration-200`}
								>
									<Star className='h-5 w-5' />
								</button>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
								<button
									onClick={() => deleteArticle(article._id)}
									className='text-red-400 hover:text-red-300'
								>
									<Trash className='h-5 w-5' />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</motion.div>
	);
};
export default ArticlesList;
