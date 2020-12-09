import Layout from '../components/layout'
// import HeaderBanner from '../components/headerBanner'
import HeaderMenu from '../components/headerMenu'

export default function Home() {
  return (
    <Layout>
      {/* <HeaderBanner banner="A" /> */}
      <HeaderMenu homeHover="" homeActive="text-gray-100 bg-gray-900" />



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
              <img src="#" />
              <p>本文</p>
            </section>
          </section>

        </article>
      </div>

    </Layout>
  )
}

