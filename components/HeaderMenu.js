import { SiTwitter, SiGooglescholar, SiLinkedin, SiResearchgate, SiOrcid } from 'react-icons/si'
// import { RiLinkedinFill } from 'react-icons/ri'

export default function HeaderMenu(props) {
  return (

    <nav className="flex w-full border-2 border-black justify-between items-center">
      {/* left-side Menu */}
      <span>
        <button className={`text-xl font-semibold p-3 ${props.homeHover} ${props.homeActive}`}>Home</button>
        <button className={`text-xl font-semibold p-3 ${props.aboutMeHover} ${props.aboutMeActive}`}>About Me</button>
        <button className={`text-xl font-semibold p-3 ${props.researchHover} ${props.researchActive}`}>Research</button>
        <button className={`text-xl font-semibold p-3 ${props.cvHover} ${props.cvActive}`}>CV</button>
      </span>

      {/* right-side Menu */}
      <span>
        <button className="text-2xl p-3 hover:bg-gray-300" >
          <a className="" href="https://twitter.com/liamlongo" target="_blank" rel="noopener noreferrer">
            {/* si=simple icons */}
            <SiTwitter />
          </a>
        </button>

        <button className="text-2xl p-3 hover:bg-gray-300" >
          <a className="" href="https://scholar.google.com/citations?user=e_IKMz4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <SiGooglescholar />
          </a>
        </button>

        <button className="text-2xl p-3 hover:bg-gray-300" >
          <a className="" href="https://www.linkedin.com/in/liam-longo-24068b63/" target="_blank" rel="noopener noreferrer">
            {/* <RiLinkedinFill /> */}
            <SiLinkedin />
          </a>
        </button>

        <button className="text-2xl p-3 hover:bg-gray-300" >
          <a className="" href="https://www.researchgate.net/profile/Liam_Longo" target="_blank" rel="noopener noreferrer">
            <SiResearchgate />
          </a>
        </button>

        <button className="text-2xl p-3 hover:bg-gray-300" >
          <a className="" href="https://orcid.org/0000-0002-1773-0611" target="_blank" rel="noopener noreferrer">
            <SiOrcid />
          </a>
        </button>
      </span>

    </nav>

  )
}