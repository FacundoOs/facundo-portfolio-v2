import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // Two lockfiles on this machine; be explicit about which root is ours.
  turbopack: { root: __dirname },
}

const withMDX = createMDX({
  options: {
    // Turbopack requires serializable loader options, so the plugin is named
    // rather than imported. Highlighting runs at build time — no client-side
    // highlighter ships.
    rehypePlugins: [['rehype-pretty-code', { theme: 'github-dark-default', keepBackground: false }]],
  },
})

export default withMDX(nextConfig)
