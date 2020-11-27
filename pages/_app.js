// import HeaderMenu from '../components/HeaderMenu'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <HeaderMenu /> */}
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
