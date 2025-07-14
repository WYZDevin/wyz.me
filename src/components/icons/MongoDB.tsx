import type { SVGProps } from 'react'

export function MongoDB(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      {/* MongoDB leaf logo */}
      <path
        fill='#47A248'
        d='M12 2c-0.5 0-1 0.2-1.4 0.6l-7 7c-0.8 0.8-0.8 2 0 2.8l7 7c0.8 0.8 2 0.8 2.8 0l7-7c0.8-0.8 0.8-2 0-2.8l-7-7c-0.4-0.4-0.9-0.6-1.4-0.6z'
      />
      <path
        fill='#589636'
        d='M12 4l6 6-6 6-6-6 6-6z'
      />
      <path
        fill='#58AA50'
        d='M12 6l4 4-4 4-4-4 4-4z'
      />
      <path
        fill='#FFFFFF'
        d='M12 8l2 2-2 2-2-2 2-2z'
      />
      {/* MongoDB stem */}
      <path
        fill='#47A248'
        d='M11.5 16v4c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-4h-1z'
      />
      <path
        fill='#47A248'
        d='M11 20h2v1h-2z'
      />
    </svg>
  )
}
