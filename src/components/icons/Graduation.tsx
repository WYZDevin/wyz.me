import type { SVGProps } from 'react'

export function Graduation(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M9 12c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z' />
      <path d='M21 9c0 .552-.895 1-2 1s-2-.448-2-1a2 2 0 0 1 4 0' />
      <path d='M3 5l9-2 9 2v6l-9 2-9-2z' />
      <path d='M6 12v4h12v-4' />
    </svg>
  )
}
