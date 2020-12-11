import Layout from '../components/layout'
import HeaderBanner from '../components/headerBanner'
import HeaderMenu from '../components/headerMenu'
import RecentNews from '../components/recentNews'
import NewsHeading from '../components/newsHeading'
import NewsPaperSubTitle from '../components/newsPaperSubtitle'
import ThesisPaperTitle from '../components/thesisPaperTitle'
import ThesisPaperAuthors from '../components/thesisPaperAuthors'
import NewsContent from '../components/newsContent'
import NewsContentPic from '../components/newsContentPic'
import { getAllPostsForHome } from '../lib/api'

export default function Home({ allPosts }) {

  return (
    <Layout>
      <HeaderBanner banner="A" />
      <HeaderMenu homeHover="" homeActive="text-gray-100 bg-gray-900" />

      <div className="mx-5vw my-2vh">

        <RecentNews />

        {allPosts.map(allPost => (
          <div className="border-solid border-2 border-gray-800 mb-6">
            <NewsHeading nAHeading={allPost.heading} nADate={allPost.date} />

            <div className="p-3">
              <NewsArticleSubtitle />
              <ThesisPaperTitle tPT={allPost.thesisPaperTitle} />
              <ThesisPaperAuthors tPA={allPost.author} />

              <div className="flow-root">

                {allPost.image
                  ? <NewsContentPic nAI={allPost.image?.url} />
                  : <></>
                }

                <NewsContent nAContent={allPost.articlecontent.json} />
              </div>
            </div>
          </div>
        ))}

      </div>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = (await getAllPostsForHome()) ?? []
  return {
    props: { allPosts }
  }
}