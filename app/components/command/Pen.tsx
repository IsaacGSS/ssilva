import { MoonStar } from 'lucide-react'

export const Pen = () => {
  return (
    <div className='flex px-0.5 py-0.5 rounded flex-row gap-2 md:static absolute right-[20%] sm:right-1/3'>
      <div className='bg-gradient-to-r from-[#800056] to-[#be3455] to-60% rounded w-6 h-6 flex justify-center items-center'>
        <MoonStar className=' m-auto fill-zinc-100/80 text-zinc-100/80 size-4' />
      </div>

      <p className='text-sm  text-muted-foreground tracking-wider translate-y-0.5'>
        Press{' '}
        <kbd className='p-1 inline-flex items-center pointer-events-none select-none bg-zinc-500/35 rounded h-5 text-xs font-mono text-zinc-100/80'>
          ctrl '/'
        </kbd>
      </p>
    </div>
  )
}
