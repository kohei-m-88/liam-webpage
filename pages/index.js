import Layout from '../components/layout'
import HeaderBanner from '../components/headerBanner'
import HeaderMenu from '../components/headerMenu'
import RecentNews from '../components/recentNews'
import NewsHeading from '../components/newsHeading'
import NewsContent from '../components/newsContent'
import { getAllPostsForHome } from '../lib/api'

export default function Home({ allPosts }) {

  return (
    <Layout>
      <HeaderBanner banner="A" />
      <HeaderMenu homeHover="" homeActive="text-gray-100 bg-gray-900" />

      <div className="mx-5vw my-2vh">
        <RecentNews />

        {allPosts.map(allPost => (
          <div>
            <NewsHeading nAHeading={allPost.heading} nADate={allPost.date} />
            <NewsContent nAContent={allPost.articlecontent.json} />
            {allPosts.newsArticlesCo}
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