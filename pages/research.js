import Layout from '../components/layout'
import HeaderBanner from '../components/headerBanner'
import HeaderMenu from '../components/headerMenu'
import { PreviewMode } from "../components/previewMode";
import { getBioPost } from '../lib/api';
import { PageSeo } from '../components/seo';
import siteMetadata from '../data/siteMetadata'

export default function research({preview}) {
  return (
    <>
    <PageSeo
      p_title="Research"
      p_description=""
      p_url={`${siteMetadata.siteUrl}/research`}
    />
    <Layout>
      <HeaderMenu researchHover="" researchActive="text-gray-100 bg-gray-900" />
      <HeaderBanner banner="C" />
      {preview && <PreviewMode />}
      <p className="object-center text-2xl p-5 m-5">Coming soon</p>
    </Layout>
    </>
  )
}

// Preview Modeを表示/非表示するために使用
export async function getStaticProps({preview = false}) {
  const dummy = await getBioPost();
  return {
    props: { preview },
  };
}
