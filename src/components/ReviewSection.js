import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { id: 1, name: 'John D.', content: 'Excellent care and friendly staff!', rating: 5 },
  { id: 2, name: 'Sarah M.', content: 'Very professional and efficient service.', rating: 4 },
  { id: 3, name: 'Mike R.', content: 'State-of-the-art facilities and knowledgeable doctors.', rating: 5 },
];

const ReviewSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Patient Reviews</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 mr-2">
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
              <span className="text-gray-600">{review.rating}/5</span>
            </div>
            <p className="text-gray-700 mb-4">{review.content}</p>
            <p className="text-gray-600 font-semibold">- {review.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;