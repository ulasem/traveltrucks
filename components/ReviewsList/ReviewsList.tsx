import ReviewCard from '../ReviewCard/ReviewCard';
import { Review } from '@/types/review';
import css from './ReviewsList.module.css';

interface ReviewsListProps {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className={css.listContainer}>
      <div className={css.list}>
        {reviews.map(item => (
          <ReviewCard key={item.id} review={item} />
        ))}
      </div>
    </section>
  );
}
