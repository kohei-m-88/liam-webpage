import Head from 'next/head'
import HeaderBanner from '../components/HeaderBanner'
import HeaderMenu from '../components/HeaderMenu'
import NewsContent from '../components/NewsContent'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>LiamLongo.org</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
          <HeaderBanner banner="A" />

          <HeaderMenu homeActive="text-gray-100 bg-gray-900" aboutMeHover="hover:bg-gray-300" researchHover="hover:bg-gray-300" cvHover="hover:bg-gray-300" />

        <main>

          {/* <NewsContent /> */}

          <div className="mx-2 px-2 max-w-screen-sm">
            <p className='my-1 py-1 text-3xl text-gray-800'>Recent News</p>


            <article>
              <section>
               {/* <span>Heading </span>
                <span>date</span> */}
              </section>

              <section>
                <section>
                  <p>thesis paper</p>
                  <p>authors</p>
                </section>

                <section>
                  <img src="#"/>
                  <p>本文</p>
                </section>
              </section>

            </article>
          </div>
        </main>
      </body>
    </>
  )
}

