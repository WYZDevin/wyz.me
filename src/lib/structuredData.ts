import type { CollectionEntry } from 'astro:content'
import type { Article, Person, WebSite, WithContext } from 'schema-dts'

import { mainMetaData, projectMetaData } from './metaData'

export const mainWebsite: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: import.meta.env.SITE,
  name: mainMetaData.title,
  description: mainMetaData.description,
  inLanguage: 'en_US'
}

export const projectWebsite: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: `${import.meta.env.SITE}/projects/`,
  name: 'Projects',
  description: projectMetaData.description,
  inLanguage: 'en_US'
}

export const personSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Devin Yongzhao Wu',
  url: 'https://www.wyz.me/academic',
  // image: `${import.meta.env.SITE}${avatar.src}`,
  sameAs: [
    'https://www.twitter.com/WYZDevin',
    'https://www.linkedin.com/in/devin-yongzhao-wu/',
    'https://github.com/WYZDevin',
    'https://scholar.google.com/citations?user=Y2Y4HiMAAAAJ'
  ],
  jobTitle: 'PhD Researcher in Geography',
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Toronto'
  },
  knowsAbout: [
    'GeoAI',
    'Spatiotemporal machine learning',
    'Mobility modeling',
    'Environmental exposure',
    'Geospatial data science'
  ]
}

export function getProjectSchema(post: CollectionEntry<'projects'>) {
  const articleStructuredData: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.data.title,
    url: `${import.meta.env.SITE}/projects/${post.id}/`,
    image: {
      '@type': 'ImageObject',
      url: `${import.meta.env.SITE}${post.data.heroImage}`
    },
    description: post.data.description,
    // datePublished
    publisher: personSchema,
    author: personSchema
  }
  return articleStructuredData
}
