import Image from 'next/image'

export default function NewsContentPic({ nAI }){
  return(
    <figure className="w-1/3 min-w-200 max-w-500">
    <Image alt="images" width={300} height={300} src={nAI} layout="responsive" 
    />
    </figure>
  )
}