import type { SVGProps } from 'react'

export function ArcGIS(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      {/* ArcGIS globe logo */}
      <path
        fill='#007AC2'
        d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
      />
      <path
        fill='#FFFFFF'
        d='M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
      />
      {/* Globe grid lines */}
      <path
        fill='#007AC2'
        d='M12 6c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-3.31-2.69-6-6-6z'
      />
      <path
        fill='#007AC2'
        d='M6 12c0 3.31 2.69 6 6 6v-2c-2.21 0-4-1.79-4-4H6z'
      />
      <path
        fill='#007AC2'
        d='M18 12c0 3.31-2.69 6-6 6v-2c2.21 0 4-1.79 4-4h2z'
      />
      <path
        fill='#007AC2'
        d='M10 12h4v2h-4z'
      />
      <path
        fill='#007AC2'
        d='M11 10h2v4h-2z'
      />
    </svg>
  )
}
