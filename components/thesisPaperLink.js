export default function ThesisPaperLink({ tPL }) {
  return (
    <span className="font-bold text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl"> [
      <a href={tPL} className="text-blue-600 underline"> Link </a>
    ] </span>
  )
}