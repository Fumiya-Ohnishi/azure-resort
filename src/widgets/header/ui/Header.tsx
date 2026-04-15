import { useState, useEffect } from 'react'
import { Button } from '@/shared'
import { useRouter } from '@/app/providers/router'
import styles from './Header.module.css'

const NAV_LINKS = [
  { href: '#appeal',     label: 'リゾートについて' },
  { href: '#rooms',      label: '客室' },
  { href: '#activities', label: 'アクティビティ' },
  { href: '#dining',     label: 'レストラン&スパ' },
  { href: '#plans',      label: 'プラン' },
  { href: '#access',     label: 'アクセス' },
]

export function Header() {
  const { navigate } = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => navigate('home')}>
          <span className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4 18 Q8 12 14 14 Q20 16 24 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
              <path d="M4 20 Q9 14.5 14 16 Q19 17.5 24 12" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" strokeOpacity="0.5" />
            </svg>
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoMain}>AZURE</span>
            <span className={styles.logoSub}>RESORT &amp; SPA</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="メインナビゲーション">
          {NAV_LINKS.map(link => (
            <button key={link.href} className={styles.navLink} onClick={() => handleNav(link.href)}>
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <Button
          variant="outline"
          size="sm"
          className={styles.reserveBtn}
          onClick={() => handleNav('#availability')}
        >
          予約する
        </Button>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(link => (
          <button key={link.href} className={styles.mobileLink} onClick={() => handleNav(link.href)}>
            {link.label}
          </button>
        ))}
        <Button variant="primary" size="sm" fullWidth onClick={() => { handleNav('#availability'); setMenuOpen(false) }}>
          予約する
        </Button>
      </div>
    </header>
  )
}
