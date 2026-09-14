export const SITE_URL = 'https://facundoosores.com'

/**
 * JSON-LD for the page. AI crawlers read the HTML the server returns, so this
 * travels with the static page and gives them a machine-readable version of
 * exactly what the page says in prose.
 *
 * `knowsAbout` is deliberately limited to what Facundo actually works in — it is
 * a claim of competence, not a list of things he has been near.
 */
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateModified: new Date().toISOString().split('T')[0],
  mainEntity: {
    '@type': 'Person',
    name: 'Juan Facundo Osores',
    alternateName: 'Facundo Osores',
    jobTitle: 'Senior Fullstack Developer',
    description:
      'Senior fullstack developer in Stockholm working on loan-comparison platforms for the Nordic markets. Working towards software architecture specialising in LLM and AI systems.',
    url: SITE_URL,
    image: `${SITE_URL}/images/facundo.jpeg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Stockholm',
      addressCountry: 'SE',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Sambla Group',
    },
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'Craft Academy' },
      { '@type': 'EducationalOrganization', name: 'Acámica' },
      { '@type': 'EducationalOrganization', name: 'UADE' },
    ],
    knowsLanguage: ['Spanish', 'English', 'Swedish'],
    knowsAbout: [
      'Next.js',
      'React',
      'React Native',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Ruby on Rails',
      'Strapi',
      'Headless CMS',
      'Tailwind CSS',
      'Web performance optimization',
      'Technical SEO',
      'Test-driven development',
      'Cypress',
      'RSpec',
      'Scrum',
    ],
    sameAs: [
      'https://www.linkedin.com/in/facundo-osores/',
      'https://github.com/FacundoOs',
    ],
  },
}
