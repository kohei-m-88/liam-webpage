import styles from './Footer.module.css'
// import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <img src="/banner_bottom.png" alt="footer" className={styles.footer} />
    </footer>
  )
}