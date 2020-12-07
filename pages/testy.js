import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


export default function Testy( {posts} ) {
  return (
    <>
    {posts.map(post =>
      <div>
        {documentToReactComponents(post.articlecontent.json)}
        <br />
      </div>
      )}
    </>
  )
}


export async function getStaticProps() {
  // first, grab our Contentful keys from the .env file
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  // then, send a request to Contentful (using the same URL from GraphiQL)
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`, {
    method: 'POST', // GraphQL *always* uses POST requests!
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`, // add our access token header
    },
    // send the query we wrote in GraphiQL as a string
    body: JSON.stringify({
      // all requests start with "query: ", so we'll stringify that for convenience
      query: `
        {
          newsCollection {
            items {
              articlecontent {
                json
              }
            }
          }
        }
              `
    })
  }
  )
  // grab the data from our response
  const { data } = await res.json()
  return {
    props: {
      posts: data.newsCollection.items
    },
  }
}