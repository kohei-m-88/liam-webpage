import { useRouter } from 'next/router'
import Layout from "../../components/layout";
import HeaderMenu from "../../components/headerMenu";
import HeaderBanner from "../../components/headerBanner";
import { PreviewMode } from '../../components/previewMode';
import RecentNews from "../../components/recentNews";
import NewsHeading from "../../components/newsHeading";
import NewsArticleSubtitle from "../../components/newsArticleSubtitle";
import ThesisPaperTitle from "../../components/thesisPaperTitle";
import ThesisPaperLink from "../../components/thesisPaperLink";
import ThesisPaperAuthors from "../../components/thesisPaperAuthors";
import NewsContent from "../../components/newsContent";
import NewsContentPic from "../../components/newsContentPic";
import { getAllPostsWithSlug } from "../../lib/api";
import { getAPost } from "../../lib/api";
import { Loading } from '../../components/loading';
import { PageSeo } from '../../components/seo';
import siteMetadata from '../../data/siteMetadata'

export default function Posts({ aPost, preview }){
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }

  return (
    <>
      <PageSeo
        p_title={aPost.heading}
        p_url={`${siteMetadata.siteUrl}/${aPost.slug}`}
      />
      <Layout title={aPost.heading}>
        <HeaderMenu />
        <HeaderBanner banner="A" />
        <div className="mx-1vw sm:mx-3vw md:mx-5vw my-2vh z-20">
          {preview && <PreviewMode />}
          <RecentNews />
          <div className="mb-10" key={aPost.slug}>
            <NewsHeading nAHeading={aPost.heading} nADate={aPost.date} />

            {/* タイトル以外に内容がないときに入れ物ごと表示しないif分岐 */}
            {(aPost.subTitle ||
              aPost.thesisPaperTitle ||
              aPost.thesisPaperLink ||
              aPost.author ||
              aPost.image ||
              aPost.articlecontent) && (
              <div className="p-3 border-solid border-2 border-gray-800">
                <NewsArticleSubtitle nAS={aPost.subTitle} />
                <ThesisPaperTitle tPT={aPost.thesisPaperTitle} />
                {aPost.thesisPaperLink && (
                  <ThesisPaperLink tPL={aPost.thesisPaperLink} />
                )}
                <ThesisPaperAuthors tPA={aPost.author} />
                <div className="flow-root">
                  {aPost.image && <NewsContentPic nAI={aPost.image.url} />}
                  {aPost.articlecontent && (
                    <NewsContent nAContent={aPost.articlecontent.json} />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const postSlugs = await getAllPostsWithSlug();
  const paths = postSlugs.map((postSlug) => ({
    params: { slug: postSlug.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps( { params, preview = false } ) {
  const aPost = await getAPost(params.slug, preview);
  return {
    props: { preview, aPost },
  };
}
