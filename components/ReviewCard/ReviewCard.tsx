import { Review } from '@/types/review';
import css from './ReviewCard.module.css';
import Icon from '../common/Icon';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const { reviewer_name, reviewer_rating, comment } = review;

  const stars = Array.from({ length: 5 }, (_, index) => index < reviewer_rating);

  return (
    <div className={css.card}>
      <div className={css.header}>
        <div className={css.avatar}>{reviewer_name.charAt(0).toUpperCase()}</div>

        <div className={css.info}>
          <p className={css.name}>{reviewer_name}</p>
          <div className={css.stars}>
            {stars.map((isFilled, index) => (
              <Icon key={index} id={isFilled ? 'rating-default' : 'rating'} size={16} />
            ))}
          </div>
        </div>
      </div>

      <p className={css.comment}>{comment}</p>
    </div>
  );
}
