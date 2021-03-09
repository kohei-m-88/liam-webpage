async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

// index.js
  // getStaticProps
const POST_GRAPHQL_FIELDS_FOR_HOME = `
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
`;

export async function getAllPosts() {
  const entries = await fetchGraphQL(
    `query {
      ${POST_GRAPHQL_FIELDS_FOR_HOME}
    }`
  );
  return extractPostEntries(entries);
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.newsArticlesCollection?.items;
}


// about.js
  // getStaticProps
const POST_GRAPHQL_FIELDS_FOR_ABOUTME = `
  newsArticlesCollection(where: {slug: "selfintroduction"}) {
    items {
      heading
      date
      image { url }
      articlecontent { json }
    }
  }
`;

export async function getBioPost() {
  const entry = await fetchGraphQL(
    `query {
      ${POST_GRAPHQL_FIELDS_FOR_ABOUTME}
    }`
  );
  return extractBioEntry(entry);
}

function extractBioEntry(fetchResponseForBio) {
  return fetchResponseForBio?.data?.newsArticlesCollection?.items[0];
}



// [slug].js
  // getStaticPaths用
const POST_GTAPHQL_FIELDS_FOR_POSTS_SLUG = `
  newsArticlesCollection(where: {slug_exists: true, slug_not: "selfintroduction"}, order: date_DESC) {
    items {
      slug
    }
  }
`;

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      ${POST_GTAPHQL_FIELDS_FOR_POSTS_SLUG}
    }`
  );
  return extractPostEntries(entries);
}

  // getStaticProps用
export async function getAPost( slug ) {
  const slugEntry = await fetchGraphQL(
    `query {
      newsArticlesCollection( where: {slug: "${slug}" } ) {
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
    }`
  );
  return extractAEntry(slugEntry)
}

function extractAEntry(fetchResponseForSlug) {
  return fetchResponseForSlug?.data?.newsArticlesCollection?.items[0];
}