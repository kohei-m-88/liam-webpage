import HeaderBanner from '../components/headerBanner'
import HeaderMenu from '../components/headerMenu'
import Layout from '../components/layout'


export default function about() {
  return (
    <Layout title="ABOUT ME">
      <HeaderMenu aboutMeHover="" aboutMeActive="text-gray-100 bg-gray-900" />
      <HeaderBanner banner="B" />

    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = (await getAllPostsForHome()) ?? []
  return {
    props: { allPosts }
  }
}