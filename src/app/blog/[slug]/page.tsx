import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { publishedPosts, getPost } from '@/data/posts'
import { SITE_URL } from '@/data/person'

export function generateStaticParams() {
  return publishedPosts.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Facundo Osores`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const { default: Body } = await import(`@/content/${slug}.mdx`)

  /* Article schema — the reason each post needs its own route and date. */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(', '),
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: 'Juan Facundo Osores',
      url: SITE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="relative overflow-hidden">
        <div className="grid-bg" aria-hidden />

        <article className="relative mx-auto max-w-3xl px-6 pt-36 pb-20">
          <Link href="/blog" className="mono text-xs text-faint transition-colors hover:text-text">
            &larr; Writing
          </Link>

          <div className="mono mt-8 mb-4 flex items-center gap-3 text-xs text-faint">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <span aria-hidden>&middot;</span>
            <span>{post.readingMinutes} min read</span>
          </div>

          <h1 className="display text-[2.5rem] text-text lg:text-[3.5rem]">{post.title}</h1>

          <p className="mono mt-6 text-xs text-faint">{post.tags.join(' / ')}</p>

          <hr className="rule-accent my-10" />

          <div className="prose-post">
            <Body />
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
