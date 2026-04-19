import Link from 'next/link';
import { Metadata } from 'next';
import css from './page.module.css';

export const metadata: Metadata = {
  title: 'Home | TravelTrucks - Your Best Adventure Starts Here',
  description:
    'Book a premium camper for your next trip. Wide selection of campers, integrated kitchen, and all amenities for your comfort.',
  openGraph: {
    title: 'TravelTrucks - Premium Camper Rental',
    description: 'Book a premium camper for your next trip. Wide selection.',
    url: 'https://traveltrucks-wheat.vercel.app',
    siteName: 'TravelTrucks',
    images: [
      {
        url: '/hero-baner.png',
        width: 1200,
        height: 630,
        alt: 'TravelTrucks Premium Camper',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.subtitle}>You can find everything you want in our catalog</p>
          <Link href="/catalog" className={css.button}>
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}
