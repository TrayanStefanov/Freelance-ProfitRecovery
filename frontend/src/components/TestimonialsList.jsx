import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useTestimonialStore } from "../stores/useTestimonialStore";

const TestimonialsList = () => {
	const { deleteTestimonial, testimonials } = useTestimonialStore();

	console.log("testimonials", testimonials);

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
							Review
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
					{testimonials?.map((testimonial) => (
						<tr key={testimonial._id} className='hover:bg-gray-700'>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='flex items-center'>
									<div className='flex-shrink-0 h-10 w-10'>
										<img
											className='h-10 w-10 rounded-full object-cover'
											src={testimonial.clientImage}
											alt={testimonial.clientName}
										/>
									</div>
									<div className='ml-4'>
										<div className='text-sm font-medium text-primary'>{testimonial.clientName}</div>
									</div>
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='flex items-center'>
									<div className='ml-4'>
										<div className='text-sm font-medium text-primary'>{testimonial.message}</div>
									</div>
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
								<button
									onClick={() => deleteTestimonial(testimonial._id)}
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
export default TestimonialsList;
