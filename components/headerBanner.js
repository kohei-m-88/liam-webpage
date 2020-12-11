import Image from 'next/image'

export default function headerBanner(props) {
  return(
    <Image src={`/banner_${props.banner}.png`} alt="header banner" quality={100}
    width={1844} height={308}
    className="min-w-520" 
    />
  )
}
