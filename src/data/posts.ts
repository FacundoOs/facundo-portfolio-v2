export type Post = {
  slug: string
  title: string
  description: string
  /** ISO date — drives <time>, Article schema and sitemap lastModified. */
  date: string
  readingMinutes: number
  tags: string[]
  /** Set false to keep a draft out of the index, the sitemap and the routes. */
  published?: boolean
}

export const posts: Post[] = [
  {
    slug: 'multi-brand-strapi-brand-selector',
    title: 'Turning Strapi into a multi-brand CMS',
    description:
      'A headless CMS holding several brands at once will happily let an editor link one brand’s page into another’s site. Fixing the list view took a dropdown that writes a URL. Fixing the link picker took replacing the field entirely — because Strapi’s relation fields cannot be filtered at all.',
    date: '2026-08-28',
    readingMinutes: 10,
    tags: ['Strapi', 'CMS', 'Custom fields', 'Architecture'],
    published: true,
  },
  {
    slug: 'local-ai-coding-mac-mini-ollama',
    title: 'Local AI coding on a 24 GB Mac mini M4 Pro with Ollama',
    description:
      'What actually runs on a 24 GB Mac mini M4 Pro: a three-model Ollama setup for Continue.dev, the four models that got cut, and measured memory numbers.',
    date: '2026-09-20',
    readingMinutes: 7,
    tags: ['Ollama', 'Local LLMs', 'Continue.dev', 'Developer tooling'],
    published: true,
  },
  {
    slug: 'staying-in-the-loop-with-ai-coding',
    title: 'Staying in the loop when the AI writes the code',
    description:
      'The failure mode of coding with an AI tool is not bad code, it is shipping changes that work while you slowly stop knowing why they are shaped that way. Three changes that put the decisions back in my hands.',
    date: '2026-09-20',
    readingMinutes: 6,
    tags: ['AI coding', 'Claude Code', 'Engineering practice', 'Architecture'],
    published: true,
  },
]

export const publishedPosts = posts
  .filter((p) => p.published !== false)
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string) {
  return publishedPosts.find((p) => p.slug === slug)
}
