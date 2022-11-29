import Image from 'next/image';
import styles from 'styles/pages/Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <h1>This is Home</h1>

      <Image src="/vercel.svg" alt="vercel" width={300} height={200} />
    </div>
  );
}

export default Home;
