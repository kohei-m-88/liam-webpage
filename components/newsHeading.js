import format from 'date-fns/format'

export default function NewsHeading( { nAHeading, nADate } ) {
  return (
    <>
      <span>{nAHeading}</span>
      <span>{`${format(new Date(nADate), 'LLL yyyy')}`}</span>
    </>
  )
}