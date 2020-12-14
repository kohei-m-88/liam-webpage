export default function ButtonExPage({ children, exPage }) {
  return (
    <a href={exPage} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}