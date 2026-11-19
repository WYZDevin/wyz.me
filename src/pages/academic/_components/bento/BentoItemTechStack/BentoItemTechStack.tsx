import { Stack } from '@/components/icons/Stack'
import { Marquee } from '@/components/magicui/marquee'

import BentoBadge from '../BentoBadge'
import techStacks from './techStacksData'

const BentoItemTechStack = () => {
  return (
    <div className='flex h-full flex-col gap-5 px-5 pb-6 pt-4 max-md:gap-8'>
      <BentoBadge
        icon={Stack}
        text='Tech stack'
        className={{ component: 'w-fit' }}
      />
      <div className='flex-grow place-content-center'>
        <div className='relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl'>
          <Marquee
            pauseOnHover
            style={{ '--duration': '20s' } as React.CSSProperties}
          >
            {techStacks.map(({ icon: Icon, name }) => (
              <span
                key={name}
                title={name}
                role='img'
                aria-label={name}
                className='inline-block px-4'
              >
                <Icon className='h-12 w-12 md:h-8 md:w-8' />
              </span>
            ))}
          </Marquee>
          <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--card-background)]'></div>
          <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[var(--card-background)]'></div>
        </div>
      </div>
      <div className='space-y-2'>
        <p className='text-lg'>Tools I work with</p>
        <p className='text-sm text-theme-secondary'>
          Python, SQL, TypeScript, and C++ for geospatial analysis, machine
          learning, cloud data pipelines, and interactive visualization.
        </p>
        <p className='text-sm text-theme-secondary'>
          GeoPandas · PyTorch · BigQuery / GCP · PostGIS · deck.gl
        </p>
      </div>
    </div>
  )
}

export default BentoItemTechStack
