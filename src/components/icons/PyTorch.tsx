import type { SVGProps } from 'react'

export function PyTorch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      {/* PyTorch flame/torch logo */}
      <path
        fill='#EE4C2C'
        d='M12 2c-.8 0-1.5.7-1.5 1.5v.8c-2.8.5-5 2.8-5 5.7 0 2.2 1.3 4.1 3.1 5.1-.1-.4-.1-.8-.1-1.2 0-2.7 1.4-5.1 3.5-6.4v8.3c0 .6.4 1 1 1s1-.4 1-1V7.5c2.1 1.3 3.5 3.7 3.5 6.4 0 .4 0 .8-.1 1.2 1.8-1 3.1-2.9 3.1-5.1 0-2.9-2.2-5.2-5-5.7v-.8c0-.8-.7-1.5-1.5-1.5z'
      />
      <path
        fill='#EE4C2C'
        d='M12 17c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
      />
      <circle cx='12' cy='4' r='1' fill='#EE4C2C' />
    </svg>
  )
}
