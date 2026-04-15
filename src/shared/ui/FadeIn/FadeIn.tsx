import type { ReactNode, CSSProperties } from 'react'
import { useIntersectionObserver } from '@/shared/lib/useIntersectionObserver'
import styles from './FadeIn.module.css'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

export function FadeIn({ children, delay = 0, direction = 'up', className }: FadeInProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.12 })

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
  }

  return (
    <div
      ref={ref}
      style={style}
      className={[
        styles.root,
        styles[direction],
        isVisible ? styles.visible : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
