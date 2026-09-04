import type { ReactNode } from 'react'

export function SmallLabel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`small-label ${className}`}>{children}</p>
}
