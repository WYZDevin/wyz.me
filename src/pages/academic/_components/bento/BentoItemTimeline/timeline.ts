import type { ComponentType, SVGProps } from 'react'

import { Briefcase } from '@/components/icons/Briefcase'
import { Code } from '@/components/icons/Code'
import { Graduation } from '@/components/icons/Graduation'
import { Pencil } from '@/components/icons/Pencil'
import { Trophy } from '@/components/icons/Trophy'

export interface TimelineItem {
  year: string
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  type: 'education' | 'work' | 'achievement' | 'publication'
}

export const timelineData: TimelineItem[] = [
  {
    year: '2022',
    title: 'MSc (Geography)',
    description: `Graduated from BSc (Major in CS & GIS) @ UofT.`,
    icon: Graduation,
    type: 'education'
  },
  {
    year: '2023',
    title: 'MSc (Geography)',
    description: 'Working on my MSc thesis',
    icon: Pencil,
    type: 'education'
  },
  {
    year: '2024',
    title: 'PhD (Geography)',
    description: 'Started my PhD in Geography @ UofT.',
    icon: Graduation,
    type: 'education'
  },
  {
    year: '2025',
    title: 'PhD (Geography)',
    description: 'Working toward my comprehensive exam',
    icon: Pencil,
    type: 'publication'
  }
]
