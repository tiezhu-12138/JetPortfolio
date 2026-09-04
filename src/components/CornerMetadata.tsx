import type { ReactNode } from 'react'

export function CornerMetadata({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`corner-metadata small-label ${className}`}>{children}</div>
}
