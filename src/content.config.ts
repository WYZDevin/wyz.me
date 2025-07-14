import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

import { iconSchema } from './content/_icons'

// export const blog = defineCollection({
//   loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/blog' }),
//   schema: () =>
//     z.object({
//       title: z.string(),
//       description: z.string(),
//       heroImage: z.string(),
//       tags: z.array(z.string()).optional().default([]),
//       pubDate: z.coerce.date(),
//       updatedDate: z.coerce.date().optional(),
//       readingTime: z.number().optional(),
//       wordsCount: z.number().optional(),
//       latestCommitUrl: z.string().optional()
//     })
// })

export const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/projects' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: z.string(),
      pubDate: z.string().optional(),
      year: z.number(),
      slug: z.string().optional()
    })
})

export const collections = {
  // blog,
  projects
}
