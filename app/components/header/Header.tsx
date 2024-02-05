import { Blocks, LandPlot, Megaphone } from 'lucide-react'
import Link from 'next/link'
import { CommandUltra } from '../command/CommandUltra'

export const Header = () => {
  return (
    <header className='w-screen h-14 fixed bottom-0 md:top-0 justify-center px-10 md:py-5 py-10 text-white flex md:justify-between items-center text-center font-lato gap-5'>
      <CommandUltra />
      <nav className='md:bg-transparent bg-zinc-950/65 border md:border-none rounded-md border-zinc-300/45 shadow-md md:shadow-none shadow-zinc-950/70 p-3 md:p-0'>
        <ul className='flex flex-row gap-2.5'>
          <li>
            <Link className='flex flex-row gap-1' href='/projetos'>
              <Blocks className='md:w-5 w-8' />
              <span className='md:block hidden'>Projetos</span>
            </Link>
          </li>
          <li>
            <Link className='flex flex-row gap-1' href='/sobre'>
              <Megaphone className='md:w-5 w-8' />
              <span className='md:block hidden'>sobre</span>
            </Link>
          </li>
          <li>
            <Link className='flex flex-row gap-1' href='/Objetivo'>
              <LandPlot className='md:w-5 w-8' />
              <span className='md:block hidden'>Objetivo</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
