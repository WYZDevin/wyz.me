import { Graduation } from '@/components/icons/Graduation'
import { Briefcase } from '@/components/icons/Briefcase'
import { Code } from '@/components/icons/Code'
import { Trophy } from '@/components/icons/Trophy'
import { Pencil } from '@/components/icons/Pencil'
import type { ComponentType, SVGProps } from 'react'

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
    icon: Trophy,
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
  },
]