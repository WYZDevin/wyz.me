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
