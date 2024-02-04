import { Projetc } from './components/project/Project'

export default function Home() {
  return (
    <>
      <main className='min-h-screen -mt-16 flex flex-col text-white justify-center items-center gap-5'>
        <h1 className=' select-none text-7xl md:text-8xl lg:text-9xl font-sansilk bg-gradient-to-r from-[#800056] to-[#be3455] to-60% bg-clip-text  tracking-tighter text-transparent'>
          S. Silva
        </h1>
        <p className='text-sm font-lato text-zinc-50/70 tracking-widest leading-7 lg:w-1/2 md:w-[80%] w-full px-5 text-wrap text-center'>
          Ola, Me chamo{' '}
          <b className='font-semibold text-zinc-50'>Isaac S. Silva</b> sou {''}
          <b className='font-semibold text-zinc-50'>Desenvolvedor Web</b>.
          <br />
          Crio e desenvolvo solucoes com criatividade para suas paginas web e
          outras aplicacoes para sua nessecidade.
        </p>
        <br />
      </main>

      <Projetc />
    </>
  )
}
