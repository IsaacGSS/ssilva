import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Wand2 } from 'lucide-react'
import { Secondary } from './CmdMenuSecondary'

export const CommandMenu = () => {
  return (
    <>
      <CommandInput placeholder='Type a command or search... ' />
      <CommandEmpty>Desculpa, nada por aqui..</CommandEmpty>
      <CommandList>
        <CommandGroup heading='Suggestions'>
          <CommandItem className='size-20 felx gap-2'>
            Luna <Wand2 className='size-5' />
          </CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </>
  )
}
