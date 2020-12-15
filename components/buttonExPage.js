export default function ButtonExPage({ children, exPage ,classname }) {
  return (
    <a href={exPage} target="_blank" rel="noopener noreferrer" className={classname}>
      {children}
    </a>
  )
}