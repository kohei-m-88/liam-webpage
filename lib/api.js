// 共通
async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
          }`,
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

export async function getAllPosts(preview) {
  const entries = await fetchGraphQL(
    `query {
      newsArticlesCollection(where: {slug_not: "selfintroduction"}, order: [date_DESC], preview: ${preview? true : false}) { 
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
    }`,
    preview
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

export async function getBioPost(preview) {
  const entry = await fetchGraphQL(
    `query {
      newsArticlesCollection(where: {slug: "selfintroduction"}, preview: ${preview? true : false}) {
        items {
          heading
          date
          image { url }
          articlecontent { json }
        }
      }
    }`,
    preview
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
export async function getAPost( slug, preview ) {
  const slugEntry = await fetchGraphQL(
    `query {
      newsArticlesCollection( where: {slug: "${slug}" }, preview: ${preview ? true : false} ) {
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
    }`,
    preview
  );
  return extractAEntry(slugEntry)
}

function extractAEntry(fetchResponseForSlug) {
  return fetchResponseForSlug?.data?.newsArticlesCollection?.items[0];
}

// api.preview.js
  // getPreviewPostBySlug
export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      newsArticlesCollection (where: { slug: "${slug}" }, preview: true, limit: 1) {
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
    }`,
    true
  )
  return extractAEntry(entry)
}