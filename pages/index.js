import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  console.log('allPostsData', allPostsData);
  return (
    <Layout home>
      <Head>
        <title>这是我的博客</title>
      </Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <span>{title}</span>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
          <li >
            <Link href={`/posts/xxx`}>
              <span>xxx</span>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              {/* <Date dateString={date} /> */}
            </small>
          </li>
        </ul>
      </section>
    </Layout>
  )
}