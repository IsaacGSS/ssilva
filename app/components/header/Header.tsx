import { Blocks, LandPlot, Megaphone } from 'lucide-react'
import Link from 'next/link'
import { CommandUltra } from '../command/CommandUltra'

export const Header = () => {
  return (
    <header className='w-screen h-14 fixed bottom-0 md:top-0 justify-end px-10 md:py-5 py-10 text-white md:flex md:items-center text-center font-lato gap-5 hidden '>
      <CommandUltra />
    </header>
  )
}
