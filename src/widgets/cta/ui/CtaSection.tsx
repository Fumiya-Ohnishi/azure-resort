import { FadeIn, Button } from '@/shared'
import { useRouter } from '@/app/providers/router'
import styles from './CtaSection.module.css'

export function CtaSection() {
  const { navigate } = useRouter()

  const scrollToCalendar = () => {
    const el = document.querySelector('#availability')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.section}>
      {/* Wave background */}
      <div className={styles.bg} aria-hidden>
        <svg viewBox="0 0 1440 500" fill="none" preserveAspectRatio="xMidYMid slice" className={styles.bgSvg}>
          <defs>
            <radialGradient id="cta_glow" cx="50%" cy="50%" r="60%">
              <stop stopColor="#00B4C8" stopOpacity="0.22" />
              <stop offset="1" stopColor="#00B4C8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="500" fill="url(#cta_glow)" />
          <path className={styles.w1} d="M-100,180 C200,120 500,240 800,180 C1100,120 1300,220 1540,180 L1540,500 L-100,500Z" fill="rgba(0,180,200,0.08)" />
          <path className={styles.w2} d="M-100,230 C250,175 550,285 850,230 C1150,175 1350,265 1540,230 L1540,500 L-100,500Z" fill="rgba(0,180,200,0.13)" />
          <path className={styles.w3} d="M-100,290 C300,240 600,340 900,290 C1200,240 1380,320 1540,290 L1540,500 L-100,500Z" fill="rgba(0,180,200,0.18)" />
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <FadeIn>
          <div className={styles.content}>
            <span className={styles.eyebrow}>— SPECIAL INVITATION —</span>

            <h2 className={styles.heading}>
              今すぐ、<br />
              <span className={styles.headingAccent}>非日常の旅</span>を予約する。
            </h2>

            <p className={styles.desc}>
              世界でここだけの景色と、心からのおもてなしが待っています。<br />
              あなたの特別な瞬間を、私たちが全力でお手伝いします。
            </p>

            <div className={styles.actions}>
              <Button variant="sand" size="lg" onClick={scrollToCalendar}>
                空室カレンダーを確認する
              </Button>
              <Button variant="ghost" size="lg" onClick={() => navigate('booking')}>
                今すぐ予約する
              </Button>
            </div>

            {/* Decorative quote */}
            <blockquote className={styles.quote}>
              <p>"人生に、本当の休暇を。"</p>
              <cite>— Azure Resort &amp; Spa</cite>
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
