import Link from 'next/link';
import Icon from '../common/Icon';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logoWrapper}>
          <Icon id="logo" width={136} height={16} className={css.logoIcon} />
        </Link>

        <nav className={css.nav}>
          <Link href="/">Home</Link>
          <Link href="/catalog">Catalog</Link>
        </nav>

        <div className={css.emptySpace}></div>
      </div>
    </header>
  );
}
