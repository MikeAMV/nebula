import styles from './page.module.css';
import { ReactNebula } from '@flodlc/nebula';

export default function Home() {
  return (
    <main className={styles.main}>
      <ReactNebula />
    </main>
  );
}
