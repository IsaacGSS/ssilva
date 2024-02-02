import { Blocks, LandPlot, Megaphone, MoonStar } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='w-screen h-14 fixed bottom-0 md:top-0 justify-center px-10 md:py-5 py-10 text-white flex md:justify-between items-center text-center font-lato gap-5'>
      <div className='flex px-0.5 py-0.5 rounded flex-row-reverse gap-1 md:static absolute right-[20%] sm:right-1/3 bg-zinc-50'>
        <input
          type='text'
          className='w-32 h-6 bg-zinc-50/90 text-zinc-950 rounded tracking-wide font-lato focus:outline-none border-none placeholder:font-lato placeholder:tracking-widest placeholder:text-zinc-950/70 placeholder:text-xs placeholder:font-extrabold px-2 md:block hidden'
          placeholder="ctrl + '/'"
        />

        <div className='bg-gradient-to-r from-[#800056] to-[#be3455] to-60% rounded w-6 h-6 flex justify-center items-center'>
          <MoonStar className=' m-auto fill-zinc-100/80 text-zinc-100/80 size-4' />
        </div>
      </div>

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
