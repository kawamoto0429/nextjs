import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostsData } from "../../lib/post";
import utilSytles from "../../styles/utils.module.css"

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  console.log(params)
  const postData = await getPostsData(params.id)
  return {
    props: {
      postData,
    }
  }
}

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilSytles.headingXl}>{postData.title}</h1>
        <div className={utilSytles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML}}/>
      </article>
    </Layout>
  );
}