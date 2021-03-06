import { getPreviewPostBySlug } from "../../lib/api"

export default async function preview(req, res){
  // Check that the secret matches and that the slug parameter exists (if not, the request should fail).
  if ((req.query.secret !== process.env.CONTENTFUL_PREVIEW_SECRET) || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the contentful, headlessCMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the contentful, headlessCMS
  const post = await getPreviewPostBySlug(req.query.slug)

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/posts/${post.slug}` })
  const url = `/posts/${post.slug}`
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  )
  res.end()
}