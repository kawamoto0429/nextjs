import Head from "next/head";
import styles from "./layout.module.css"
import utilSytles from "../styles/utils.module.css"
import Link from "next/link";

export const siteTitle = "Next.js blog"
const Layout = ({children, home}) => {
  const name  = "shin code"
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favaicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.png" className={`${utilSytles.borderCircle} ${styles.headerHomeImage}`} />
            <h1 className={utilSytles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/images/profile.png" className={`${utilSytles.borderCircle}`} />
            <h1 className={utilSytles.heading2Xl}>{name}</h1>
          </>
        ) }
        
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <div>
          <Link href="/">ホームに戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;