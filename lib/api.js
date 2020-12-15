const POST_GRAPHQL_FIELDS =
`
  newsArticlesCollection(order: [date_DESC]) { 
    items {
      articleid
      heading
      date
      thesisPaperTitle
      thesisPaperLink
      author
      subTitle
      image { url }
      articlecontent { json }
    }
  }
`

async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.newsArticlesCollection?.items
}

export async function getAllPostsForHome() {
  const entries = await fetchGraphQL(
    `query {
      ${POST_GRAPHQL_FIELDS}
    }`
  )
  return extractPostEntries(entries)
}
