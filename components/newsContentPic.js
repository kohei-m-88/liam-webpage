import Image from 'next/image'

export default function NewsContentPic({ nAI }) {
  return (
    <figure className="w-1/3 min-w-200 max-w-500 float-left pt-3 pr-3 pb-0"
    >
      <Image alt="images" width={300} height={300} src={nAI} quality={100} layout="responsive"/>
    </figure>
  )
}