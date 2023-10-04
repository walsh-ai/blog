import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getPostsMetadata } from '../lib/posts';

// Imports for displaying and linking posts
import Link from 'next/link';
import Date from '../components/date'; 

export async function getStaticProps() {
  const allPostsMetadata = getPostsMetadata(); 
  return {
    props: {
      allPostsMetadata,
    },
  }; 
}

/*
  By returning 'allPostsMetadata' from getStaticProps in
  props, the objects will be passed to the Home default
  exported function within the props obejct. 
  The Home function can access that object now : 
*/

export default function Home({ allPostsMetadata }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Tom. Welcome to my personal blog where I post descriptions of my projects.</p>
        <p>
          (This is a sample blog built in Next.js). 
        </p>
      </section>
      <section className = {`${utilStyles.headingMd} ${utilStyles.padding1px}}`}>
        <h2 className = {utilStyles.headingLg}>Blog</h2>
        <ul className = {utilStyles.list}>
          {allPostsMetadata.map(({ id, date, title }) => (
            <li className = {utilStyles.listItem} key={id}>
              <Link href = {`/posts/${id}`}>{title}</Link>
              <br />
              <small className = {utilStyles.lightText}>
                <Date dateString = {date}></Date>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
