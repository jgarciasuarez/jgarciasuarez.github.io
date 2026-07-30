import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">JGS</Link>
      </div>
      <ul className={styles.links}>
        <li><Link href="/">Bio</Link></li>
        <li><Link href="/research">Research</Link></li>
        <li><Link href="/teaching">Teaching</Link></li>
        <li><Link href="/ddcf" className={styles.highlight}>DDCF Hub</Link></li>
      </ul>
    </nav>
  );
}
