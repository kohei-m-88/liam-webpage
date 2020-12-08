// A simple example for testing it manually from your browser.
// If this is located at pages/api/preview.js, then
// open /api/preview from your browser.
export default function Preview(req, res) {
  res.setPreviewData({})
  res.end('preview mode enabled')
}