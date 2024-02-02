import { Projetc } from './components/project/Project'

export default function Home() {
  return (
    <>
      <main className='min-h-screen -mt-16 flex flex-col text-white justify-center items-center gap-5'>
        <p className='text-sm font-light font-lato text-white/95 tracking-widest text-wrap text-center '>
          Ola, Me chamo Isaac S. Silva
        </p>
        <h1 className=' text-7xl md:text-8xl lg:text-9xl font-sansilk bg-gradient-to-r from-[#800056] to-[#be3455] to-60% bg-clip-text  tracking-tighter text-transparent'>
          S. Silva
        </h1>
        <h2 className='text-sm font-light font-lato text-white/95 tracking-widest lg:w-1/2 md:w-[80%] w-full px-5 text-wrap text-center'>
          sou {''}
          <b className='font-semibold text-white/80'>Desenvolvedor Web</b>. Crio
          e desenvolvo solucoes com criatividade para suas paginas web e outras
          aplicacoes para sua nessecidade.
        </h2>
        <br />
      </main>

      <Projetc />
    </>
  )
}
