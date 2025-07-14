import { ArcGIS } from '@icons/ArcGIS'
import { Astro } from '@icons/Astro'
import { AWS } from '@icons/AWS'
import { Docker } from '@icons/Docker'
import { Drizzle } from '@icons/Drizzle'
import { Hono } from '@icons/Hono'
import { Jest } from '@icons/Jest'
import { MongoDB } from '@icons/MongoDB'
import { Nestjs } from '@icons/NestJs'
import { NextJs } from '@icons/NextJs'
import { Nuxtjs } from '@icons/NuxtJs'
import { PostGIS } from '@icons/PostGIS'
import { PostgreSQL } from '@icons/PostgreSQL'
import { Prisma } from '@icons/Prisma'
import { Puppeteer } from '@icons/Puppeteer'
import { Python } from '@icons/Python'
import { PyTorch } from '@icons/PyTorch'
import { ReactJs } from '@icons/ReactJs'
import { Reactquery } from '@icons/ReactQuery'
import { Swr } from '@icons/Swr'
import { Tailwindcss } from '@icons/Tailwind'
import { TypeScript } from '@icons/TypeScript'
import { Vuejs } from '@icons/VueJs'
import type { JSX, SVGProps } from 'react'

type TechStack = {
  name: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  description: string
}

const techStacks: TechStack[] = [
  {
    name: 'TypeScript',
    icon: TypeScript,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'React',
    icon: ReactJs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Tailwind',
    icon: Tailwindcss,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'SWR',
    icon: Swr,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },

  {
    name: 'Jest',
    icon: Jest,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Prisma',
    icon: Prisma,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Hono',
    icon: Hono,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Astro',
    icon: Astro,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Docker',
    icon: Docker,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Python',
    icon: Python,
    description:
      'Python is an interpreted, high-level and general-purpose programming language.'
  },
  {
    name: 'PyTorch',
    icon: PyTorch,
    description:
      'PyTorch is an open source machine learning library based on the Torch library.'
  },
  {
    name: 'ArcGIS',
    icon: ArcGIS,
    description:
      'ArcGIS is a family of client software, server software, and online geographic information system (GIS) services.'
  },
  {
    name: 'AWS',
    icon: AWS,
    description:
      'Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs.'
  },
  {
    name: 'PostGIS',
    icon: PostGIS,
    description:
      'PostGIS is a spatial database extender for PostgreSQL object-relational database.'
  },
  {
    name: 'PostgreSQL',
    icon: PostgreSQL,
    description:
      'PostgreSQL is a free and open-source relational database management system.'
  },
  {
    name: 'MongoDB',
    icon: MongoDB,
    description:
      'MongoDB is a source-available cross-platform document-oriented database program.'
  }
]

export default techStacks
