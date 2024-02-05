import { ReactNode } from 'react'

interface Isecondary {
  children: ReactNode
  title?: string
}

export const Secondary = ({ title, children }: Isecondary) => {
  return (
    <div className='h-10 p-2 bg-center bg-emerald-500 flex gap-2 justify-center items-center text-center rounded'>
      <div>{title}</div>
      {children}
    </div>
  )
}
