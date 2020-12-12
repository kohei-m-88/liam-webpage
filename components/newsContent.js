import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from './newsContent.module.css'

export default function NewsContent({nAContent}) {
  return (
  <div className={styles.richtext}>
    {documentToReactComponents(nAContent)}
  </div>

  )
}

// export async function getStaticProps() {
//   // first, grab our Contentful keys from the .env file
//   const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
//   const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

//   // then, send a request to Contentful (using the same URL from GraphiQL)
//   const res = await fetch(
//     `https://graphql.contentful.com/content/v1/spaces/${space}`,
//     {
//       method: 'POST', // GraphQL *always* uses POST requests!
//       headers: {
//         'content-type': 'application/json',
//         authorization: `Bearer ${accessToken}`, // add our access token header
//       },
//       // send the query we wrote in GraphiQL as a string
//       body: JSON.stringify({
//         // all requests start with "query: ", so we'll stringify that for convenience
//         query: `
//         {
//           newsCollection(where: {thesisTitle_exists: false}) {
//             items {
//               newsArticle
//             }
//           }
//         }
//               `
//       })
//     }
//   )
//   // grab the data from our response
//   const data = await res.json();
//   return {
//     props: {
//     nAs: data.newsCollection.items,
//     }
//   }
// }
