import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
      <Image src="/banner_bottom.png" alt="footer" 
      width={1843} height={138}
      layout="responsive" className={styles.footerbanner} />
  )
}
