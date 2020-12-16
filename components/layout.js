import Head from 'next/head'
import Footer from './footer'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>LiamLongo.org | {title}</title>
      </Head>
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  )
}