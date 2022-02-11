import Head from 'next/head';
import Image from 'next/image';
import { ENDPOINTS } from '../lib/config';
import styles from '../styles/Home.module.css';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

const Home = ({ greeter }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rekt Wolf Analytics</title>
        <meta name="description" content="Rekt Wolf Analytics" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{greeter?.name}</h1>
        <ThreeDRotation />

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Table</p>
      </footer>
    </div>
  );
};

export async function getStaticProps(context) {
  const response = await fetch(`${ENDPOINTS.LOCAL_API}/api/hello`);
  const greeter = (await response.json()) || '';

  return {
    props: {
      greeter,
    },
  };
}
export default Home;
