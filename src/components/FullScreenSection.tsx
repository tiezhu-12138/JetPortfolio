import type { ComponentPropsWithoutRef } from 'react'

export function FullScreenSection({ className = '', ...props }: ComponentPropsWithoutRef<'section'>) {
  return <section className={`full-section ${className}`} {...props} />
}
