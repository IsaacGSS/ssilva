import { ReactNode } from 'react'

interface itag {
  children: ReactNode
}

export const Tag = ({ children }: itag) => {
  return (
    <div className='flex flex-row gap-2 md:static absolute bg-center md:translate-x-0 translate-x-24'>
      {children}

      <p className='text-sm text-muted-foreground tracking-wider translate-y-0.5 md:block hidden'>
        Press{' '}
        <kbd className='p-1 inline-flex items-center pointer-events-none select-none bg-zinc-500/35 rounded h-5 text-xs font-mono text-zinc-100/80'>
          &apos;/&apos;
        </kbd>
      </p>
    </div>
  )
}
