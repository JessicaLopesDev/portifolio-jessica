import Link from 'next/link'
import Socials from '../Socials'

export const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-8">
          <Link href={'/'} style={{ fontSize: 24 }}>
            Jéssica Lopes
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
}
