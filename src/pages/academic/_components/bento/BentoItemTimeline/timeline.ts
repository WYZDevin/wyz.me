import type { ComponentType, SVGProps } from 'react'

import { Briefcase } from '@/components/icons/Briefcase'
import { Graduation } from '@/components/icons/Graduation'
import { Pencil } from '@/components/icons/Pencil'

export interface TimelineItem {
  year: string
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  type: 'education' | 'work' | 'achievement' | 'publication'
}

export const timelineData: TimelineItem[] = [
  {
    year: '2018–2022',
    title: 'Honours BSc',
    description:
      'Computer Science & Geospatial Data Science, University of Toronto.',
    icon: Graduation,
    type: 'education'
  },
  {
    year: '2022–2024',
    title: 'MSc (Geography)',
    description:
      'University of Toronto. Research on urban noise and environmental exposure.',
    icon: Graduation,
    type: 'education'
  },
  {
    year: '2024–present',
    title: 'PhD (Geography)',
    description: 'University of Toronto. Expected completion: June 2028.',
    icon: Graduation,
    type: 'education'
  },
  {
    year: '2025–2026',
    title: 'GIS Developer',
    description:
      'Arima Data · Aug 2025–Apr 2026. Mobility pipelines and geospatial visualization.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2026',
    title: 'Course Instructor',
    description:
      'Space Time Data Analysis, University of Toronto · Sep–Dec 2026.',
    icon: Pencil,
    type: 'work'
  }
]
