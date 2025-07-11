import { Graduation } from '@/components/icons/Graduation'
import { Briefcase } from '@/components/icons/Briefcase'
import { Code } from '@/components/icons/Code'
import { Trophy } from '@/components/icons/Trophy'
import type { ComponentType, SVGProps } from 'react'

export interface TimelineItem {
  year: string
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  // type: 'education' | 'work' | 'achievement' | 'project'
}

export const timelineData: TimelineItem[] = [
  {
    year: '2022',
    title: 'BSc (Major in CS & GIS)',
    description: `Started Master of Science in Geography @ UofT.`,
    icon: Graduation,
    // type: 'education'
  },
  {
    year: '2023',
    title: 'MSc (Geography)',
    description: 'Started PhD in Geography @ UofT.',
    icon: Trophy,
    // type: 'education'
  },
  {
    year: '2024',
    title: 'MSc (Geography)',
    description: 'Started PhD in Geography @ UofT.',
    icon: Graduation,
    // type: 'education'
  },
  {
    year: '2024',
    title: '',
    description: 'First publication in Urban Science',
    icon: Code,
    // type: 'project'
  },
] 