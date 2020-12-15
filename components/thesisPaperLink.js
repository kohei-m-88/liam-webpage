export default function ThesisPaperLink({ tPL }) {
  return (
    <span className="font-bold text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl"> [
      <a href={tPL} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> Link </a>
    ] </span>
  )
}