'use client';
import { Camper } from '@/types/camper';
import { Review } from '@/types/review';
import CamperGallery from '@/components/CamperGallery/CamperGallery';
import VehicleDetails from '@/components/VehicleDetails/VehicleDetails';
import ReviewsList from '@/components/ReviewsList/ReviewsList';
import BookingForm from '@/components/BookingForm/BookingForm';
import css from './CardDetails.module.css';

interface CardDetailsClientProps {
  camper: Camper;
  reviews: Review[];
}

export default function CardDetailsClient({ camper, reviews }: CardDetailsClientProps) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.top}>
          <CamperGallery gallery={camper.gallery || []} camperName={camper.name} />
          <VehicleDetails camper={camper} />
        </div>

        <div>
          <h3 className={css.bottomTitle}>Reviews</h3>
          <div className={css.bottom}>
            <ReviewsList reviews={reviews} />
            <BookingForm camperId={camper.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
