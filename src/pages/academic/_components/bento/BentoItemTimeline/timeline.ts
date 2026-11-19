import type { ComponentType, SVGProps } from 'react'

import { Briefcase } from '@/components/icons/Briefcase'
import { Graduation } from '@/components/icons/Graduation'
import { Pencil } from '@/components/icons/Pencil'

export interface TimelineItem {
  period: string
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  type: 'education' | 'work' | 'achievement' | 'publication'
}

export const timelineData: TimelineItem[] = [
  {
    period: '2018–2022',
    title: 'Honours BSc',
    description:
      'Computer Science & Geospatial Data Science, University of Toronto.',
    icon: Graduation,
    type: 'education'
  },
  {
    period: '2022–2024',
    title: 'MSc (Geography)',
    description:
      'University of Toronto. Research on urban noise and environmental exposure.',
    icon: Graduation,
    type: 'education'
  },
  {
    period: '2024–present',
    title: 'PhD (Geography)',
    description: 'University of Toronto. Expected completion: June 2028.',
    icon: Graduation,
    type: 'education'
  },
  {
    period: 'Aug 2025–Apr 2026',
    title: 'GIS Developer',
    description:
      'Arima Data · Mobility pipelines and geospatial visualization.',
    icon: Briefcase,
    type: 'work'
  },
  {
    period: 'Sep–Dec 2026',
    title: 'Course Instructor',
    description: 'Space Time Data Analysis, University of Toronto.',
    icon: Pencil,
    type: 'work'
  }
]
