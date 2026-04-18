import Link from 'next/link';
import Image from 'next/image';
import Icon from '../common/Icon';
import { Camper } from '@/types/camper';
import css from './CamperCard.module.css';

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <div className={css.card}>
      <Image
        src={camper.coverImage || ''}
        alt={camper.name}
        width={219}
        height={240}
        loading="eager"
        className={css.image}
      />

      <div className={css.content}>
        <div className={css.mainInfo}>
          <div className={css.headerRow}>
            <h2 className={css.title}>{camper.name}</h2>
            <p className={css.price}>€{camper.price.toFixed(2)}</p>
          </div>

          <div className={css.meta}>
            <span className={css.rating}>
              <Icon id="rating-default" size={16} /> {camper.rating}({camper.totalReviews} Reviews)
            </span>
            <span className={css.location}>
              <Icon id="map" /> {camper.location}
            </span>
          </div>
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.features}>
          <div className={css.badge}>
            <Icon id="petrol" />
            {camper.engine}
          </div>
          <div className={css.badge}>
            <Icon id="automatic" /> {camper.transmission}
          </div>
          <div className={css.badge}>
            <Icon id="alcove" />
            {camper.form.replace('_', ' ')}
          </div>
        </div>

        <Link href={`/catalog/${camper.id}`} target="_blank" className={css.showMoreBtn}>
          Show more
        </Link>
      </div>
    </div>
  );
}
