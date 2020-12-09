import Head from 'next/head'
import Footer from "./footer"

export default function Layout({ children, title = 'LiamLongo.org' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {children}

      <Footer />
    </>
  )
}