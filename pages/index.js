import Layout from '../components/layout'
import HeaderBanner from '../components/headerBanner'
import HeaderMenu from '../components/headerMenu'
import RecentNews from '../components/recentNews'

export default function Home() {
  return (
    <Layout>
      <HeaderBanner banner="A" />
      <HeaderMenu homeHover="" homeActive="text-gray-100 bg-gray-900" />



      <div className="mx-5vw my-2vh">
        
        <RecentNews />

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

