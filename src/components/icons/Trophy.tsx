import type { SVGProps } from 'react'

export function Trophy(props: SVGProps<SVGSVGElement>) {
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
      <path d='M6 9H4.5a2.5 2.5 0 0 1 0-5H6' />
      <path d='M18 9h1.5a2.5 2.5 0 0 0 0-5H18' />
      <path d='M4 22h16' />
      <path d='M10 14.66V17c0 .55.47.98.97 1.21C11.25 18.48 11.61 18.8 12 19.03c.39-.23.75-.55 1.03-.82.5-.23.97-.66.97-1.21v-2.34' />
      <path d='M18 2H6v7a6 6 0 0 0 12 0V2Z' />
    </svg>
  )
}
