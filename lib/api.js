const POST_GRAPHQL_FIELDS_FOR_HOME =
`
  newsArticlesCollection(where: {slug_not: "selfintroduction"}, order: [date_DESC]) { 
    items {
      slug
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

const POST_GRAPHQL_FIELDS_FOR_ABOUTME =
`
  newsArticlesCollection(where: {slug: "selfintroduction"}) {
    items {
      heading
      date
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

function extractBioEntry(fetchResponseForBio) {
  return fetchResponseForBio?.data?.newsArticlesCollection?.items[0]
}


export async function getAllPosts() {
  const entries = await fetchGraphQL(
    `query {
      ${POST_GRAPHQL_FIELDS_FOR_HOME}
    }`
  )
  return extractPostEntries(entries)
}

export async function getBioPost() {
  const entry = await fetchGraphQL(
    `query {
      ${POST_GRAPHQL_FIELDS_FOR_ABOUTME}
    }`
  )
  return extractBioEntry(entry)
}
