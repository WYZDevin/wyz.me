import { defineCollection, z } from 'astro:content'

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string(),
    pubDate: z.string().optional(),
    year: z.number().optional(),
    slug: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
})

export const collections = {
  projects: projectCollection
  // Add other collections as needed
}
