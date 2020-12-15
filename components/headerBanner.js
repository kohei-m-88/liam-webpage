import styles from './headerBanner.module.css'

export default function headerBanner(props) {
  return(
    <>
    <img src={`/banner_${props.banner}formob.png`} alt="title"
    className={styles.headerbannerformob} 
    />

    <img src={`/banner_${props.banner}.png`} alt="title"
    className={styles.headerbanner} 
    />
    </>
  )
}