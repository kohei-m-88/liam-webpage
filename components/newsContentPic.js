import Image from 'next/image'

export default function NewsContentPic({ nAI }) {
  return (
    <figure className="min-w-200 max-w-350 float-left pt-3 pr-3 pb-0"
    >
      <Image alt="image" width={300} height={300} src={nAI} quality={100} layout="intrinsic"/>
    </figure>
  )
}