import Layout from '../components/layout'
import HeaderMenu from '../components/headerMenu'
import HeaderBanner from '../components/headerBanner'
import RecentNews from '../components/recentNews'
import NewsHeading from '../components/newsHeading'
import NewsArticleSubtitle from '../components/newsArticleSubtitle'
import ThesisPaperTitle from '../components/thesisPaperTitle'
import ThesisPaperLink from '../components/thesisPaperLink'
import ThesisPaperAuthors from '../components/thesisPaperAuthors'
import NewsContent from '../components/newsContent'
import NewsContentPic from '../components/newsContentPic'
import { getAllPostsForHome } from '../lib/api'


export default function Home({ allPosts }) {
  return (
    <Layout title="HOME">
      <HeaderMenu homeHover="" homeActive="text-gray-100 bg-gray-900" />
      <HeaderBanner banner="A" />

      <div className="mx-1vw sm:mx-3vw md:mx-5vw my-2vh z-20">

        <RecentNews />

        {allPosts.map(allPost => (
          <div className="border-solid border-2 border-gray-800 mb-10" key={allPost.articleid}>
            <NewsHeading nAHeading={allPost.heading} nADate={allPost.date} />

            <div className="p-3">

              <NewsArticleSubtitle nAS={allPost.subTitle} />

              <ThesisPaperTitle tPT={allPost.thesisPaperTitle} />

              {allPost.thesisPaperLink
                ? <ThesisPaperLink tPL={allPost.thesisPaperLink} />
                : <></>
              }

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