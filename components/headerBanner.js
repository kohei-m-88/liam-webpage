import styles from './headerBanner.module.css'

export default function headerBanner(props) {
  return(
    <img src={`/banner_${props.banner}.png`} className={styles.headerbanner} />
  )
}
