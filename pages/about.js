import HeaderBanner from "../components/headerBanner";
import HeaderMenu from "../components/headerMenu";
import Layout from "../components/layout";
import NewsHeading from "../components/newsHeading";
import NewsContentPic from "../components/newsContentPic";
import NewsContent from "../components/newsContent";
import { getBioPost } from "../lib/api";

export default function about({ bioPost }) {
  return (
    <Layout title="ABOUT ME">
      <HeaderMenu aboutMeHover="" aboutMeActive="text-gray-100 bg-gray-900" />
      <HeaderBanner banner="B" />

      <div className="mx-1vw sm:mx-3vw md:mx-5vw my-2vh z-20">
        <div className="mb-10">
          <NewsHeading nAHeading={bioPost.heading} nADate={bioPost.date} />
          <div className="p-3 border-solid border-2 border-gray-800  flow-root">
            {bioPost.image?.url && <NewsContentPic nAI={bioPost.image?.url} />}
            <NewsContent nAContent={bioPost.articlecontent?.json} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({preview = false}) {
  const bioPost = (await getBioPost(preview)) ?? {};
  return {
    props: { bioPost },
  };
}
