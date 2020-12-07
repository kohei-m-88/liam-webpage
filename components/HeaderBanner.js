import styles from './HeaderBanner.module.css'

export default function HeaderBanner(props) {
  return(
    <img src={`/banner_${props.banner}.png`} className={styles.headerbanner} />
  )
}