import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/data/person'

/**
 * AI crawlers (GPTBot, ClaudeBot, PerplexityBot, …) are allowed explicitly.
 * Deliberately no llms.txt: measured adoption is negligible and it is not a
 * citation signal for any major provider.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
