import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import { getPostData } from '../lib/post'
import styles from '../styles/Home.module.css'
import utilStyle from "../styles/utils.module.css"

export async function getStaticProps() {
  const allPostsData = getPostData();
  return  {
    props: {
      allPostsData
    }
  }
}
// export async function getServerSidProps(context) {
//   return {
//     props: {

//     }
//   }
// }

export default function Home({allPostsData}) {
  console.log(allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>こんにちは</p>
      </section>
      
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail})=>(
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} alt='' />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
          
        </div>
      </section>
    </Layout>
  )
}
