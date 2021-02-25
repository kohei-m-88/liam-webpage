import format from 'date-fns/format'

export default function NewsHeading({ nAHeading, nADate }) {
  return (
    <div className="px-3 py-2 flex justify-between 
    bg-gray-800 text-white  
    text-sm sm:text-base md:text-xl lg:text-2xl">
      <span className="pr-2 font-medium">{nAHeading}</span>
      <span className="pl-2">{`${format(new Date(nADate), 'LLL yyyy')}`}</span>
    </div>
  )
}