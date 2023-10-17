import Link from 'next/link'
import { RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiGithubLine, RiMailLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://github.com/JessicaLopesDev'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/jessica-lopes-dev-frontend/'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={'https://instagram.com/jessicalopes.jess?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={'https://www.facebook.com/je.lopes.costa?mibextid=LQQJ4d'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link href={'/contact'} className="hover:text-accent transition-all duration-300">
        <RiMailLine />
      </Link>
    </div>
  )
}

export default Socials
