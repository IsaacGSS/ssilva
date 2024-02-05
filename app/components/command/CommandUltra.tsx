'use client'

import { useEffect, useState } from 'react'
import { CommandDialog } from '@/components/ui/command'
import { CommandMenu } from './CommandMenu'
import { MoonStar } from 'lucide-react'
import { Tag } from './Tag'

export function CommandUltra() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Tag>
        <div
          className='bg-gradient-to-r from-[#800056] to-[#be3455] to-60% rounded w-6 h-6 flex justify-center items-center cursor-pointer'
          onClick={() => setOpen(open => !open)}
        >
          <MoonStar className=' m-auto fill-zinc-100/80 text-zinc-100/80 size-4' />
        </div>
      </Tag>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandMenu />
      </CommandDialog>
    </>
  )
}
