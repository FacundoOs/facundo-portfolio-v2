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
]

export const publishedPosts = posts
  .filter((p) => p.published !== false)
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string) {
  return publishedPosts.find((p) => p.slug === slug)
}
