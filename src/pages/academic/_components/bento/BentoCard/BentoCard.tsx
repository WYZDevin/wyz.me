import React from 'react'

import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

const BentoCard = (props: Props) => {
  const { children, className, ...rest } = props

  return (
    <div className={cn('card group rounded-3xl', className)} {...rest}>
      <div className={cn('card-content md:absolute')}>{children}</div>
    </div>
  )
}

export default BentoCard
