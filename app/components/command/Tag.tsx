import { ReactNode } from 'react'

export const Tag = (children: ReactNode) => {
  return (
    <div className='flex flex-row gap-2 md:static absolute bg-center md:translate-x-0 translate-x-24'>
      <div className='bg-gradient-to-r from-[#800056] to-[#be3455] to-60% rounded w-6 h-6 flex justify-center items-center cursor-pointer'>
        {children}
      </div>

      <p className='text-sm  text-muted-foreground tracking-wider translate-y-0.5 md:block hidden'>
        Press{' '}
        <kbd className='p-1 inline-flex items-center pointer-events-none select-none bg-zinc-500/35 rounded h-5 text-xs font-mono text-zinc-100/80'>
          ctrl '/'
        </kbd>
      </p>
    </div>
  )
}
