import Link from 'next/link';
import css from './page.module.css';

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
