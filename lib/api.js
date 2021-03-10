// common
async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

const ALL_ITEMS = `
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
`;

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.newsArticlesCollection?.items;
}

function extractAEntry(fetchResponseForAEntry) {
  return fetchResponseForAEntry?.data?.newsArticlesCollection?.items[0];
}


// index.js
// getStaticProps
export async function getAllPosts(preview) {
  const entries = await fetchGraphQL(
    `query {
      newsArticlesCollection(where: {slug_not: "selfintroduction"}, order: [date_DESC], preview: ${
        preview ? "true" : "false"
      }) { 
        ${ALL_ITEMS}
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}



// about.js
// getStaticProps
export async function getBioPost(preview) {
  const entry = await fetchGraphQL(
    `query {
      newsArticlesCollection(where: {slug: "selfintroduction"}, preview: ${
        preview ? "true" : "false"
      }) {
        ${ALL_ITEMS}
      }
    }`,
    preview
  );
  return extractAEntry(entry);
}



// [slug].js
// getStaticPaths
export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      newsArticlesCollection(where: {slug_exists: true, slug_not: "selfintroduction"}, order: date_DESC) {
        items {
          slug
        }
      }
    }`
  );
  return extractPostEntries(entries);
}

// getStaticProps用
export async function getAPost(slug, preview) {
  const slugEntry = await fetchGraphQL(
    `query {
      newsArticlesCollection( where: {slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    } ) {
        ${ALL_ITEMS}
      }
    }`,
    preview
  );
  return extractAEntry(slugEntry);
}

// api.preview.js
// getPreviewPostBySlug
export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      newsArticlesCollection (where: { slug: "${slug}" }, preview: true) {
        ${ALL_ITEMS}
      }
    }`,
    true
  );
  return extractAEntry(entry);
}
