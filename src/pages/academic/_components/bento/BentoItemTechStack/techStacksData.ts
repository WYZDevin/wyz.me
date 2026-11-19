import { ArcGIS } from '@icons/ArcGIS'
import { AWS } from '@icons/AWS'
import { Docker } from '@icons/Docker'
import { PostGIS } from '@icons/PostGIS'
import { Python } from '@icons/Python'
import { PyTorch } from '@icons/PyTorch'
import { ReactJs } from '@icons/ReactJs'
import { TypeScript } from '@icons/TypeScript'
import type { JSX, SVGProps } from 'react'

type TechStack = {
  name: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  description: string
}

const techStacks: TechStack[] = [
  {
    name: 'Python',
    icon: Python,
    description: 'Geospatial analysis, machine learning, and data pipelines.'
  },
  {
    name: 'PyTorch',
    icon: PyTorch,
    description: 'Deep learning and multimodal research.'
  },
  {
    name: 'PostGIS',
    icon: PostGIS,
    description: 'Spatial data storage, queries, and analysis.'
  },
  {
    name: 'ArcGIS',
    icon: ArcGIS,
    description: 'Geographic analysis, cartography, and geoprocessing.'
  },
  {
    name: 'AWS',
    icon: AWS,
    description: 'Cloud infrastructure and data processing.'
  },
  {
    name: 'Docker',
    icon: Docker,
    description: 'Reproducible development and deployment environments.'
  },
  {
    name: 'TypeScript',
    icon: TypeScript,
    description: 'Typed web applications and research tools.'
  },
  {
    name: 'React',
    icon: ReactJs,
    description: 'Interactive interfaces and geospatial visualization.'
  }
]

export default techStacks
