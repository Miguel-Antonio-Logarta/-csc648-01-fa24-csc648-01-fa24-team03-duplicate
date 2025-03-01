import React from 'react';
import ReviewCard from './ReviewCard';

interface Review {
  id: string;
  rating: number;
  busynessStatus: number;
  content: string;
  creationDate: string;
  userId: string;
  user: User;
}

interface User {
  id: string;
  username: string;
}

interface ReviewProps {
  reviews: Review[];
}

const ReviewSection = async ({ reviews } : ReviewProps) => {
  
  console.log(`[INFO]: Number of reviews: ${reviews.length}`);
  
  return (
    <section>
      <h2 className="text-xl font-bold whitespace-nowrap text-stone-600 tracking-[2px] mb-6">Reviews</h2>
      {reviews.map((review, index) => (
        <ReviewCard key={index} author={review.user.username} rating={review.rating} review={review.content} creationDate={review.creationDate} />
      ))}
    </section>
  );
};

export default ReviewSection;