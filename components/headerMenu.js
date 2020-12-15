{/* si=simple icons */ }
import { SiTwitter, SiGooglescholar, SiLinkedin, SiResearchgate, SiOrcid } from 'react-icons/si'
import styles from './headerMenu.module.css'
import ButtonExPage from './buttonExPage'
import React, { useState } from 'react'
import Link from 'next/link'
// import { RiLinkedinFill } from 'react-icons/ri'

//hoverには初期値を入れておく  参考 https://github.com/vercel/next.js/blob/canary/examples/layout-component/components/layout.js
export default function HeaderMenu(
  {
    homeHover = 'hover:bg-gray-400',
    homeActive = '',
    aboutMeHover = 'hover:bg-gray-400',
    aboutMeActive = '',
    researchHover = 'hover:bg-gray-400',
    researchActive = '',
    cvHover = 'hover:bg-gray-400'
  }) {

  const [menuexpanded, setMenuexpanded] = useState(false);

  return (
    <nav className={`${styles.headermenu}`}>

      <div className="flex justify-between">
        {/* <!-- Mobile menu button--> */}

        {menuexpanded
          ? (
            <button onClick={() => setMenuexpanded(false)} aria-expanded="true" className={`hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${styles.openbutton}`}>
              <span className="sr-only">button to close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="pl-1" >MENU</span>
            </button>
          )
          : (
            <button onClick={() => setMenuexpanded(true)} aria-expanded="false" className={`hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${styles.closebutton}`}>
              <span className="sr-only">button to open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="pl-1" >MENU</span>
            </button>
          )
        }


        {/* right-side Menu */}
        <span className={styles.tglro}>

          <ButtonExPage exPage="https://twitter.com/liamlongo">
            <SiTwitter />
          </ButtonExPage>

          <ButtonExPage exPage="https://scholar.google.com/citations?user=e_IKMz4AAAAJ&hl=en" >
            <SiGooglescholar />
          </ButtonExPage>

          <ButtonExPage exPage="https://www.linkedin.com/in/liam-longo-24068b63/">
            <SiLinkedin /> {/* <RiLinkedinFill /> */}
          </ButtonExPage>


          <ButtonExPage exPage="https://www.researchgate.net/profile/Liam_Longo">
            <SiResearchgate />
          </ButtonExPage>

          <ButtonExPage exPage="https://orcid.org/0000-0002-1773-0611">
            <SiOrcid />
          </ButtonExPage>

        </span>
      </div>

      {/* left-side Menu */}
      <div aria-expanded={menuexpanded} className={`flex flex-col z-10 ${styles.harc}`}>
        <Link href="/"><a className={`${homeHover} ${homeActive}`}>HOME</a></Link>
        <Link href="/about"><a className={`${aboutMeHover} ${aboutMeActive}`}>ABOUT ME</a></Link>
        <Link href="/research"><a className={`${researchHover} ${researchActive}`}>RESEARCH</a></Link>
        <ButtonExPage exPage="https://drive.google.com/file/d/1ygaWGIZrcYjjK6ZvoO9eNkpyGlOdjp51/view?usp=sharing" classname={cvHover}>CV</ButtonExPage>
      </div>

    </nav>

  )
}
