import Link from 'next/link';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.wrapper}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/dynamic-route-test">Dynamic routes</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
