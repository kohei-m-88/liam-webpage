export default function headerBanner(props) {
  return(
    <img src={`/banner_${props.banner}.png`} alt="header banner"
    className="w-full" 
    />
  )
}