'use client'

import { useEffect, useState } from 'react'
import { CommandDialog } from '@/components/ui/command'
import { CommandMenu } from './CommandMenu'

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
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandMenu />
    </CommandDialog>
  )
}
