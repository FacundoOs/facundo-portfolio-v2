/**
 * Static code window. The snippet is the real structured-data object this page
 * ships — see src/data/person.ts. Tokens are pre-split so there is no
 * highlighter dependency and nothing runs on the client.
 */
type Tok = [text: string, kind?: 'key' | 'str' | 'punct' | 'comment']

const lines: Tok[][] = [
  [['// what an AI crawler reads about me', 'comment']],
  [['const ', 'key'], ['personJsonLd = {']],
  [['  "@type"', 'key'], [': '], ['"ProfilePage"', 'str'], [',']],
  [['  mainEntity', 'key'], [': {']],
  [['    "@type"', 'key'], [': '], ['"Person"', 'str'], [',']],
  [['    jobTitle', 'key'], [': '], ['"Senior Fullstack Developer"', 'str'], [',']],
  [['    worksFor', 'key'], [': { name: '], ['"Sambla Group"', 'str'], [' },']],
  [['    knowsAbout', 'key'], [': ['], ['"Next.js"', 'str'], [', '], ['"TypeScript"', 'str'], [', '], ['"AWS"', 'str'], [', …],']],
  [['    address', 'key'], [': { addressLocality: '], ['"Stockholm"', 'str'], [' },']],
  [['  },']],
  [['}']],
]

const colour: Record<string, string> = {
  key: 'var(--accent)',
  str: '#7ee2b8',
  comment: 'var(--text-faint)',
}

export default function CodePanel() {
  return (
    <div className="panel max-w-full min-w-0">
      <div className="panel-bar justify-between">
        <div className="flex items-center gap-2">
          <span className="panel-dot" />
          <span className="mono text-[11px] text-faint">src/data/person.ts</span>
        </div>
        <span className="mono rounded border border-[var(--border)] px-1.5 py-0.5 text-[9px] text-faint">
          JSON-LD
        </span>
      </div>

      <pre className="mono overflow-x-auto px-5 py-4 text-[12.5px] leading-[1.75]">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="block">
              {line.map(([text, kind], j) => (
                <span key={j} style={kind ? { color: colour[kind] } : { color: 'var(--text-muted)' }}>
                  {text}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
