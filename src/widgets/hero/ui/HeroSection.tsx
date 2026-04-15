import { Button } from '@/shared'
import { useRouter } from '@/app/providers/router'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const { navigate } = useRouter()

  const scrollToAvailability = () => {
    const el = document.querySelector('#availability')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      {/* Animated ocean background */}
      <div className={styles.bg}>
        <svg className={styles.bgSvg} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <radialGradient id="heroGlow1" cx="30%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#00B4C8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#00B4C8" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroGlow2" cx="80%" cy="60%" r="45%">
              <stop offset="0%" stopColor="#4DD9E8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#4DD9E8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="heroWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#00B4C8" stopOpacity="0.35" />
              <stop offset="50%"  stopColor="#1A4A7A" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00B4C8" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Deep gradient base is in CSS */}

          {/* Glow orbs */}
          <ellipse className={styles.glowOrb1} cx="420" cy="360" rx="380" ry="280" fill="url(#heroGlow1)" />
          <ellipse className={styles.glowOrb2} cx="1100" cy="500" rx="320" ry="240" fill="url(#heroGlow2)" />

          {/* Star field */}
          {[
            [120,60],[240,35],[400,90],[600,20],[750,70],[900,45],[1050,80],[1200,30],[1380,65],
            [180,140],[360,120],[520,155],[680,110],[840,145],[1000,125],[1160,150],[1320,100],
            [80,200],[300,210],[460,190],[620,220],[780,195],[940,215],[1100,185],[1260,205],[1420,175],
          ].map(([x,y], i) => (
            <circle
              key={i}
              cx={x} cy={y}
              r={i % 3 === 0 ? 1.5 : 1}
              fill="white"
              opacity={0.4 + (i % 4) * 0.15}
            />
          ))}

          {/* Horizon light */}
          <rect x="0" y="540" width="1440" height="2" fill="url(#heroWave1)" opacity="0.5" />

          {/* Wave layers */}
          <path
            className={styles.wave1}
            d="M-200,650 C100,580 300,720 600,640 C900,560 1100,700 1440,620 C1600,580 1700,650 1800,630 L1800,900 L-200,900 Z"
            fill="rgba(0,180,200,0.12)"
          />
          <path
            className={styles.wave2}
            d="M-200,700 C150,640 350,760 650,680 C950,600 1150,740 1440,680 C1600,650 1700,700 1800,690 L1800,900 L-200,900 Z"
            fill="rgba(0,180,200,0.18)"
          />
          <path
            className={styles.wave3}
            d="M-200,760 C200,700 400,800 700,730 C1000,660 1200,780 1440,730 C1600,705 1700,750 1800,740 L1800,900 L-200,900 Z"
            fill="rgba(0,180,200,0.28)"
          />
          <path
            className={styles.wave4}
            d="M-200,820 C250,770 450,840 720,790 C990,740 1200,830 1440,790 C1600,770 1700,810 1800,800 L1800,900 L-200,900 Z"
            fill="rgba(13,43,78,0.6)"
          />

          {/* Light caustics */}
          <ellipse className={styles.caustic1} cx="300"  cy="750" rx="80"  ry="20"  fill="rgba(77,217,232,0.1)" />
          <ellipse className={styles.caustic2} cx="900"  cy="810" rx="120" ry="25"  fill="rgba(0,180,200,0.08)" />
          <ellipse className={styles.caustic3} cx="1200" cy="760" rx="90"  ry="18"  fill="rgba(77,217,232,0.09)" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>SCROLL</span>
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.contentInner}>
          <span className={styles.eyebrow}>— OKINAWA, JAPAN —</span>

          <h1 className={styles.heading}>
            <span className={styles.headingLine1}>波の彼方、</span>
            <span className={styles.headingLine2}>至上の楽園へ。</span>
          </h1>

          <p className={styles.sub}>
            青く澄んだ海と、南国の風が薫る。<br />
            日常を忘れ、自分だけの「今」を見つける場所へ。
          </p>

          <div className={styles.actions}>
            <Button variant="primary" size="lg" onClick={scrollToAvailability}>
              空室を確認する
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => document.querySelector('#appeal')?.scrollIntoView({ behavior: 'smooth' })}
            >
              リゾートを探る
            </Button>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {[
              { value: '18', unit: '棟', label: 'プライベートヴィラ' },
              { value: '4', unit: 'つ', label: 'レストラン＆バー' },
              { value: '2', unit: 'か所', label: 'スパ & ウェルネス' },
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}<small>{s.unit}</small></span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
