export default function ThesisPaperLink({ tPL }) {
  return (
    <span className="font-bold xs:text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl"> [
      <a href={tPL}> Link </a>
    ] </span>
  )
}