import { Stack } from '@/components/icons/Stack'

import BentoBadge from '../BentoBadge'
import techStackGroups from './techStacksData'

const BentoItemTechStack = () => {
  return (
    <section
      id='tech-stack'
      aria-label='Technical skills'
      className='flex h-full flex-col gap-5 px-5 pb-6 pt-4'
    >
      <BentoBadge
        icon={Stack}
        text='Tech stack'
        className={{ component: 'w-fit' }}
      />
      <dl className='space-y-3'>
        {techStackGroups.map(({ category, skills }) => (
          <div key={category}>
            <dt className='text-xs font-semibold uppercase tracking-wide text-theme-secondary'>
              {category}
            </dt>
            <dd className='mt-1 text-sm leading-relaxed text-theme-primary'>
              {skills.join(' · ')}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default BentoItemTechStack
