import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/data/person'
import { publishedPosts } from '@/data/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: publishedPosts[0] ? new Date(publishedPosts[0].date) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...publishedPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]
}
