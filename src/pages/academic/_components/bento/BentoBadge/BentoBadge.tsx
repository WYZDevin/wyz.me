import { cva } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/lib/utils'

interface CustomClass {
  component?: string
  icon?: string
}

interface Props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  text?: string
  className?: CustomClass
}

const badgeVariants = cva(
  'z-10 flex items-center gap-2 rounded-full border-2 border-theme-heavy bg-neutral-100 shrink-0 shadow-md',
  {
    variants: {
      variant: {
        default: 'py-2 pl-3 pr-4',
        iconOnly: 'p-2'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const BentoBadge = ({ icon: Icon, text, className }: Props) => {
  const variant = text ? 'default' : 'iconOnly'

  return (
    <div
      className={cn(
        badgeVariants({ variant, className: className?.component })
      )}
    >
      <Icon className={cn('size-4', className?.icon)} />
      {!!text && <h3 className='text-sm text-theme-primary'>{text}</h3>}
    </div>
  )
}

export default BentoBadge
