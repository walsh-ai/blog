import Head from 'next/head'; 
import Date from '../../components/date'; 
import Layout from '../../components/layout'; 
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className = {utilStyles.headingX1}>
                    {postData.title}
                </h1>
                <div className = {utilStyles.lightText}>
                    <p>Filename {postData.id}.md</p>
                    <Date dateString = {postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    ); 
}

export async function getStaticPaths() {
    // Return a list of possible values for id
    const paths = getAllPostIds(); 
    return {
        paths,
        fallback: false, 
    }; 
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post 
    const postData = await getPostData(params.id); 
    return {
        props: {
            postData,
        },
    }; 
}