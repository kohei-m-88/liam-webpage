import Layout from '../components/layout'
import HeaderBanner from '../components/headerBanner'
import HeaderMenu from '../components/headerMenu'
import { PreviewMode } from "../components/previewMode";

export default function research( preview ) {
  return (
    <Layout title="RESEARCH">
      <HeaderMenu researchHover="" researchActive="text-gray-100 bg-gray-900" />
      <HeaderBanner banner="C" />
      {preview && <PreviewMode />}
      <p className="object-center text-2xl p-5 m-5">Coming soon</p>
    </Layout>
  )
}