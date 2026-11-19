import { ArcGIS } from '@icons/ArcGIS'
import { AWS } from '@icons/AWS'
import { Docker } from '@icons/Docker'
import { PostGIS } from '@icons/PostGIS'
import { Python } from '@icons/Python'
import { PyTorch } from '@icons/PyTorch'
import { ReactJs } from '@icons/ReactJs'
import { TypeScript } from '@icons/TypeScript'

export const featuredTechStack = [
  { name: 'Python', icon: Python },
  { name: 'PyTorch', icon: PyTorch },
  { name: 'PostGIS', icon: PostGIS },
  { name: 'ArcGIS', icon: ArcGIS },
  { name: 'AWS', icon: AWS },
  { name: 'Docker', icon: Docker },
  { name: 'TypeScript', icon: TypeScript },
  { name: 'React', icon: ReactJs }
]

type TechStackGroup = {
  category: string
  skills: string[]
}

const techStackGroups: TechStackGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'C++', 'Java']
  },
  {
    category: 'Machine learning & data science',
    skills: ['PyTorch', 'TensorFlow.js', 'JAX', 'LangChain']
  },
  {
    category: 'Data & cloud',
    skills: ['BigQuery', 'GCP', 'AWS']
  },
  {
    category: 'Geospatial & systems',
    skills: [
      'PostGIS',
      'QGIS',
      'ArcGIS',
      'GeoPandas',
      'ArcPy',
      'Git',
      'Linux',
      'Docker',
      'Kubernetes'
    ]
  },
  {
    category: 'Web & visualization',
    skills: ['React', 'Node.js', 'deck.gl', 'MapLibre']
  }
]

export default techStackGroups
