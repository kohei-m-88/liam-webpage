import Head from 'next/head'
import Footer from './footer'
import styles from './layout.module.css'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>LiamLongo.org | {title}</title>
      </Head>
      <div className={styles.html}>
        <div className={styles.body}>
          <div className={styles.content}>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}