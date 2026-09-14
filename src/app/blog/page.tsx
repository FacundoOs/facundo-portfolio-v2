import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionHeading from '@/components/layout/SectionHeading'
import { publishedPosts } from '@/data/posts'

export const metadata: Metadata = {
  title: 'Writing | Facundo Osores',
  description:
    'Notes on platform engineering, CMS architecture and applied AI — by Facundo Osores.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndex() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden">
        <div className="grid-bg" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-6 pt-36 pb-20">
          <SectionHeading
            label="Writing"
            title="Notes from the build"
            subtitle="Things I worked out the hard way — architecture, CMS internals, and how I actually use AI tooling day to day."
          />

          <ul className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
            {publishedPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block py-8">
                  <div className="mono mb-3 flex items-center gap-3 text-xs text-faint">
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

                  <h2 className="display text-[1.75rem] text-text transition-colors duration-[160ms] group-hover:text-accent lg:text-[2.125rem]">
                    {post.title}
                  </h2>

                  <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
                    {post.description}
                  </p>

                  <p className="mono mt-4 text-xs text-faint">{post.tags.join(' / ')}</p>
                </Link>
              </li>
            ))}
          </ul>

          {publishedPosts.length === 0 && (
            <p className="text-muted">Nothing published yet.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
