import Head from 'next/head'
import HeaderBanner from '../components/HeaderBanner'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LiamLongo.org</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ↓tailwindテスト
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS 🐼</h1>
        <p className="text-center text-teal-500 text-2xl py-4">This is an Example.</p>
      </div> */}

      <HeaderBanner banner="A" />

        <div className="flex flex-row ">
          <button>Home</button>
          <button>About Me</button>
          <button>Research</button>
          <button>CV</button>
        </div>
      <main className={styles.main}>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
