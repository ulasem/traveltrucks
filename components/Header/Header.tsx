import Link from 'next/link';
import Icon from '../common/Icon';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logoWrapper} aria-label="CamperRental Logo">
          <Icon id="logo" width={136} height={16} className={css.logoIcon} />
        </Link>

        <nav className={css.nav}>
          <ul className={css.navList}>
            <li>
              <Link href="/" className={css.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/catalog" className={css.navLink}>
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
