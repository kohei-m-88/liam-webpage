import format from 'date-fns/format'

export default function NewsHeading(newsArticles) {
  return (
    <>
      {newsArticles.map(newsArticle => (
        <div>
          <span>{newsArticle.heading}</span>
          <span>{`${format(new Date(newsArticle.date), 'LLL yyyy')}`}</span>
        </div>
      ))}
    </>
  )
}

export async function getStaticProps() {
  // first, grab our Contentful keys from the .env file
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  // then, send a request to Contentful (using the same URL from GraphiQL)
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST', // GraphQL *always* uses POST requests!
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`, // add our access token header
      },
      // send the query we wrote in GraphiQL as a string
      body: JSON.stringify({
        // all requests start with "query: ", so we'll stringify that for convenience
        query: `
        {
          newsCollection{
            items {
              heading
              date
            }
          }
        }
              `
      })
    }
  );
  // grab the data from our response
  const { data } = await res.json()

  return {
    props: {
      newsArticles: data.newsCollection.items
    },
  }
}
