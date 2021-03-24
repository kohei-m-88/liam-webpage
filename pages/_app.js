import { DefaultSeo } from 'next-seo'
import { SEO } from '../components/seo'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  </Head>
  <DefaultSeo {...SEO} />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp