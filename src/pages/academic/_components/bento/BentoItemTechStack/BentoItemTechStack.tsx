import { Stack } from '@/components/icons/Stack'
import { Marquee } from '@/components/magicui/marquee'

import BentoBadge from '../BentoBadge'
import techStackGroups, { featuredTechStack } from './techStacksData'

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
      <div
        aria-hidden='true'
        className='relative overflow-hidden motion-reduce:hidden md:shadow-xl'
      >
        <Marquee pauseOnHover className='[--duration:20s]'>
          {featuredTechStack.map(({ name, icon: Icon }) => (
            <span key={name} title={name} className='inline-block px-4'>
              <Icon className='size-12 md:size-8' />
            </span>
          ))}
        </Marquee>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--card-background)]' />
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[var(--card-background)]' />
      </div>
      <dl className='grid gap-x-5 gap-y-3 xl:grid-cols-2'>
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
