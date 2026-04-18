import Link from 'next/link';
import Image from 'next/image';
import Icon from '../common/Icon';
import { Camper } from '@/types/camper';
import css from './CamperCard.module.css';

export default function CamperCard({ camper }: { camper: Camper }) {
  return (
    <article className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={camper.coverImage || ''}
          alt={camper.name}
          width={290}
          height={310}
          loading="eager"
          className={css.image}
        />
      </div>

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
            <address className={css.location}>
              <Icon id="map" /> {camper.location}
            </address>
          </div>
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.features}>
          <div className={css.badge}>
            <Icon id="petrol" />
            {camper.engine}
          </div>
          <div className={css.badge}>
            <Icon id="automatic" />
            {camper.transmission}
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
    </article>
  );
}
