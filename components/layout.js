import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Thomas J Walsh'; 
const ogImage = "https://i.pinimg.com/564x/16/59/b3/1659b3f379ccd67500d88ce0a4bc5e8a.jpg";
export const siteTitle = 'Thomas J Walsh | Blog - AI';

export default function Layout({ children, home, hideFace }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name = "description"
          content = "T Walsh | Personal blog on projects in programming, computer science and ai."
        />
        <meta 
            name = "og:description"
            content = "Blog | Programming | AI"
        />
        <meta
          property = "og:image"
          content = {ogImage}
        />
        <meta name = "og:title" content = {name} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name = "twitter:title" content = {name} />
        <meta name = "twitter:description" content = "Blog | Programming | AI" />
        <meta name = "twitter:image" content = {ogImage} />
      </Head>
      
      <header className={styles.header}>
        {hideFace ? (<></>) : (
          <>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}