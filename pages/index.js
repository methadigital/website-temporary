import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Metha Digital</title>
        <meta name="description" content="Metha Digital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/logo-metha.png"
          alt="Metha Digital Logo"
          width={300}
          height={300}
        />
      </main>
    </div>
  );
}
