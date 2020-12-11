import format from 'date-fns/format'

export default function NewsHeading( { nAHeading, nADate } ) {
  return (
    <div className="px-3 py-2 flex justify-between bg-gray-800 text-white  xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
      <span className="font-medium">{nAHeading}</span>
      <span className="mr-3">{`${format(new Date(nADate), 'LLL yyyy')}`}</span>
    </div>
  )
}