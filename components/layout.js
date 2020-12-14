import Head from 'next/head'
// import Footer from "./footer"

export default function MyHead({ title = 'LiamLongo.org' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}