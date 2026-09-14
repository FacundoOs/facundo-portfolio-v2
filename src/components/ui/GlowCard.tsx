'use client'
import { useCallback, type ReactNode } from 'react'

/**
 * Card whose 1px border catches a light gradient under the cursor.
 * Writes two CSS custom properties on pointer move — no animation library, and
 * nothing runs until the pointer is actually over the card.
 */
export default function GlowCard({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }, [])

  return (
    <Tag className={`card ${className}`} onPointerMove={onPointerMove}>
      {children}
    </Tag>
  )
}
