import type { ReactNode } from 'react'
import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  eyebrow?: string
  children: ReactNode
  sub?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({
  eyebrow,
  children,
  sub,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`${styles.root} ${styles[align]} ${light ? styles.light : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.heading}>{children}</h2>
      {sub && <p className={styles.sub}>{sub}</p>}
    </div>
  )
}
