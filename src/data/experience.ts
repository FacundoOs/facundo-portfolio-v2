export type Job = {
  company: string
  role: string
  period: string
  description: string
  tech: string[]
}

export const experience: Job[] = [
  {
    company: 'Sambla Group',
    role: 'Senior Fullstack Developer',
    period: 'May 2024 – Present',
    description:
      'Platform work at both ends: Next.js frontends and the CMS layer, plus Node.js services running on AWS. Much of the role is cross-repo architecture review, security and GDPR compliance audits, performance forensics, and shipping releases across several Nordic markets.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'AWS', 'Strapi', 'Vercel'],
  },
  {
    company: 'Sambla Group',
    role: 'Full-stack Developer',
    period: 'Nov 2021 – May 2024',
    description:
      'Frontend and backend work across the platform for several Nordic markets — feature delivery, a WordPress-to-headless content move, and a test-driven workflow under Scrum.',
    tech: ['React', 'TypeScript', 'Node.js', 'WordPress', 'Cypress'],
  },
  {
    company: 'Freelance',
    role: 'Full-stack Developer',
    period: 'Jun 2021 – Present',
    description:
      'Web applications on an MVC architecture with the MERN stack. Design and implementation of NoSQL databases, including a subscription system for a blog.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    company: 'Health Integrator',
    role: 'Full-stack Developer',
    period: 'Apr 2021 – May 2021',
    description:
      'Built the new website end to end: Ruby on Rails with Strapi as CMS, UI and UX design, prototyping in Figma, and a tested Stimulus + Tailwind frontend.',
    tech: ['Ruby on Rails', 'Strapi', 'Stimulus', 'Tailwind', 'RSpec'],
  },
  {
    company: 'Craft Academy',
    role: 'Full-stack Developer',
    period: 'Jul 2020 – Nov 2020',
    description:
      'Over 900 hours building complex applications — databases, payments, subscriptions and roles — in a simulated real-world team environment with pair programming and agile delivery.',
    tech: ['React', 'React Native', 'Ruby on Rails', 'PostgreSQL', 'Cypress'],
  },
]

/*
 * Pre-development roles, from LinkedIn. Leadership and operations rather than
 * code — decide whether they belong on the site at all:
 *
 *   Voi Technology · Repair leader, SE/FI/NO markets   Aug 2019 – May 2020
 *   Voi Technology · Team Lead                         Apr 2019 – Jul 2019
 *   QuadMinds     · Production manager                 Oct 2015 – Sep 2017
 *   Argentine Army · Electronic technician / IT        Mar 2011 – Sep 2015
 *   Costanera Uno · Electronic technician              Jul 2009 – Mar 2011
 */
