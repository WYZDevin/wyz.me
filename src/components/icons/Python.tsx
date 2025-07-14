import type { SVGProps } from 'react'

export function Python(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='#3776AB'
        d='M12,1.75A4.25,4.25,0,0,0,7.75,6H6V12H7.75A4.25,4.25,0,0,1,12,16.25V15a1,1,0,0,1,1-1h5V7.75A4.25,4.25,0,0,0,13.75,3.5H13a1,1,0,0,1-1-1Z'
      />
      <path
        fill='#FFD43B'
        d='M12,22.25A4.25,4.25,0,0,0,16.25,18H18V12h-1.75A4.25,4.25,0,0,1,12,7.75V9a1,1,0,0,1-1,1H6v6.25A4.25,4.25,0,0,0,10.25,20.5H11a1,1,0,0,1,1,1Z'
      />
    </svg>
  )
}
