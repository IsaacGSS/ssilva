import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Wand2 } from 'lucide-react'

export const CommandMenu = () => {
  return (
    <>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>Desculpa, nada por aqui..</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </>
  )
}
