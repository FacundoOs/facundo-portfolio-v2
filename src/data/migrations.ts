/*
 * DRAFT — review before publishing.
 *
 * Written deliberately at a high altitude: public technologies and the shape of
 * the problem, no internal service names, no architecture detail, no numbers
 * that aren't already public. Correct the wording where it's wrong, and cut
 * anything that gets closer to the platform than you want a public page to be.
 */

export type Migration = {
  from: string
  to: string
  title: string
  description: string
  tech: string[]
}

export const migrations: Migration[] = [
  {
    from: 'Gatsby',
    to: 'Next.js',
    title: 'Marketing sites onto a modern framework',
    description:
      'Moved multi-market sites off Gatsby and onto Next.js, keeping SEO and content parity intact across every market while the migration ran incrementally alongside the live site.',
    tech: ['Next.js', 'React', 'TypeScript'],
  },
  {
    from: 'WordPress',
    to: 'Headless CMS',
    title: 'Content out of WordPress',
    description:
      'Replaced WordPress with a headless CMS, modelling content so editors could publish to several markets and languages from one place instead of maintaining parallel sites.',
    tech: ['Headless CMS', 'Next.js', 'TypeScript'],
  },
  {
    from: 'Legacy frontend',
    to: 'New service',
    title: 'Retiring a customer-facing frontend',
    description:
      'Took part in replacing an ageing customer-facing frontend with a new service — running both side by side, moving traffic across gradually, and decommissioning the old one without downtime.',
    tech: ['Next.js', 'React', 'TypeScript'],
  },
]
