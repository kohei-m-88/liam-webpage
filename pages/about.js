import HeaderBanner from "../components/headerBanner";
import HeaderMenu from "../components/headerMenu";
import { PreviewMode } from "../components/previewMode";
import Layout from "../components/layout";
import NewsHeading from "../components/newsHeading";
import NewsContentPic from "../components/newsContentPic";
import NewsContent from "../components/newsContent";
import { getBioPost } from "../lib/api";
import { PageSeo } from "../components/seo";
import siteMetadata from "../data/siteMetadata"

export default function about({ bioPost, preview }) {
  return (
    <>
      <PageSeo p_title="About Me" p_url={`${siteMetadata.siteUrl}/about`} />
      <Layout>
        <HeaderMenu aboutMeHover="" aboutMeActive="text-gray-100 bg-gray-900" />
        <HeaderBanner banner="B" />
        {preview && <PreviewMode />}

        <div className="mx-1vw sm:mx-3vw md:mx-5vw my-2vh z-20">
          <div className="mb-10">
            <NewsHeading nAHeading={bioPost.heading} nADate={bioPost.date} />
            <div className="p-3 border-solid border-2 border-gray-800  flow-root">
              {bioPost.image?.url && (
                <NewsContentPic nAI={bioPost.image?.url} />
              )}
              <NewsContent nAContent={bioPost.articlecontent?.json} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const bioPost = (await getBioPost(preview)) ?? {};
  return {
    props: { preview, bioPost },
  };
}
