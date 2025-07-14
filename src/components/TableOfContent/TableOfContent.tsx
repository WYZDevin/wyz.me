import type { MarkdownHeading } from 'astro'

import { cn } from '@/lib/utils'

interface Props {
  headings: MarkdownHeading[]
  className?: string
}

const TableOfContent = ({ headings, className }: Props) => {
  const toc = headings.filter(({ depth }) => depth > 1 && depth < 4)

  return (
    <nav
      aria-label='Table of contents'
      className={cn('font-secondary', className)}
    >
      <h2 className='font-display mb-4 text-lg font-bold text-zinc-200'>
        On this page
      </h2>
      <ul className='space-y-2.5 text-zinc-400'>
        {toc.map((heading) => (
          <li
            key={heading.slug}
            className={cn({
              'pl-4': heading.depth === 3
            })}
          >
            <a
              className='transition-colors duration-200 hover:text-teal-400'
              href={`#${heading.slug}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContent
