import type { SVGProps } from 'react'

export function PostgreSQL(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      {/* PostgreSQL elephant logo */}
      <path
        fill='#336791'
        d='M12 2C8.7 2 6 4.7 6 8c0 1.5 0.6 2.9 1.5 3.9L6 14c-0.6 0.6-0.6 1.5 0 2.1s1.5 0.6 2.1 0L10.6 14c0.4 0.1 0.9 0.1 1.4 0.1s1-0.1 1.4-0.1L16 16.1c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1L16.5 12c0.9-1 1.5-2.4 1.5-3.9 0-3.3-2.7-6-6-6z'
      />
      <path
        fill='#FFFFFF'
        d='M10 7c0-0.6 0.4-1 1-1s1 0.4 1 1-0.4 1-1 1-1-0.4-1-1z'
      />
      <path
        fill='#FFFFFF'
        d='M13 7c0-0.6 0.4-1 1-1s1 0.4 1 1-0.4 1-1 1-1-0.4-1-1z'
      />
      {/* Elephant trunk */}
      <path
        fill='#336791'
        d='M8 12c-0.6 0-1 0.4-1 1v2c0 1.1 0.9 2 2 2h1v-2c0-0.6-0.4-1-1-1s-1-0.4-1-1z'
      />
      {/* Elephant ears */}
      <path
        fill='#336791'
        d='M7 8c-0.6 0-1 0.4-1 1v1c0 0.6 0.4 1 1 1s1-0.4 1-1V9c0-0.6-0.4-1-1-1z'
      />
      <path
        fill='#336791'
        d='M17 8c0.6 0 1 0.4 1 1v1c0 0.6-0.4 1-1 1s-1-0.4-1-1V9c0-0.6 0.4-1 1-1z'
      />
      {/* Elephant tail */}
      <path
        fill='#336791'
        d='M15 16c0.6 0 1 0.4 1 1v2c0 0.6-0.4 1-1 1s-1-0.4-1-1v-2c0-0.6 0.4-1 1-1z'
      />
    </svg>
  )
}
