import { SectionTitle, FadeIn } from '@/shared'
import styles from './ResortAppealSection.module.css'

const APPEALS = [
  {
    id: 'ocean',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="rgba(0,180,200,0.12)" stroke="rgba(0,180,200,0.4)" strokeWidth="1" />
        <path d="M8 30 Q14 24 20 28 Q26 32 32 26 Q38 20 44 26" stroke="#00B4C8" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M8 35 Q14 29 20 33 Q26 37 32 31 Q38 25 44 31" stroke="#4DD9E8" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
        <circle cx="36" cy="14" r="6" fill="#F5C842" opacity="0.8" />
      </svg>
    ),
    title: '碧い海と珊瑚礁',
    desc: '手付かずの珊瑚礁が広がる透明度抜群の海。シュノーケリングやダイビングで、圧倒的な生命の輝きに触れてください。',
  },
  {
    id: 'spa',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="rgba(200,169,110,0.1)" stroke="rgba(200,169,110,0.4)" strokeWidth="1" />
        <path d="M24 12 C18 18 14 22 14 28 C14 33.5 18.5 38 24 38 C29.5 38 34 33.5 34 28 C34 22 30 18 24 12Z" stroke="#C8A96E" strokeWidth="1.5" fill="rgba(200,169,110,0.15)" />
        <path d="M24 18 C21 22 20 24 20 28 C20 31.3 21.8 33.8 24 34.5" stroke="#E8D5A3" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.8" />
      </svg>
    ),
    title: '南国スパ体験',
    desc: '太平洋を望む絶景スパで、心身を解放する施術を。地元の植物や海の恵みを使ったトリートメントで内側から輝きを。',
  },
  {
    id: 'dining',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="rgba(26,74,122,0.15)" stroke="rgba(26,74,122,0.4)" strokeWidth="1" />
        <path d="M16 14 L16 34" stroke="#4DD9E8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 14 C16 14 12 18 12 22 C12 26 16 26 16 26" stroke="#4DD9E8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="28" cy="24" r="8" stroke="#C8A96E" strokeWidth="1.5" fill="none" />
        <path d="M28 18 L28 24 L32 24" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: '美食の楽園',
    desc: '沖縄の食材にこだわった4つのレストラン。漁港直送の鮮魚から、島野菜を活かしたモダン琉球料理まで、食の旅をお楽しみください。',
  },
  {
    id: 'sunset',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="rgba(245,200,66,0.08)" stroke="rgba(245,200,66,0.35)" strokeWidth="1" />
        <circle cx="24" cy="20" r="7" fill="#F5C842" opacity="0.75" />
        {[0,45,90,135,180,225,270,315].map((deg, i) => {
          const r = 12, a = deg * Math.PI / 180
          const x1 = 24 + r * Math.cos(a), y1 = 20 + r * Math.sin(a)
          const x2 = 24 + (r+5) * Math.cos(a), y2 = 20 + (r+5) * Math.sin(a)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F5C842" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        })}
        <path d="M10 32 Q17 26 24 30 Q31 34 38 28" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
        <rect x="10" y="35" width="28" height="6" rx="3" fill="rgba(200,169,110,0.2)" />
      </svg>
    ),
    title: '忘れられない夕景',
    desc: '水平線に沈む真っ赤な夕日。プールサイドやプライベートテラスから、世界でここだけの夕暮れを二人で独り占めに。',
  },
]

export function ResortAppealSection() {
  return (
    <section id="appeal" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <FadeIn>
          <SectionTitle eyebrow="Resort Appeal" sub="日常を超えた体験が、アジュールリゾートには溢れています。">
            非日常への扉
          </SectionTitle>
        </FadeIn>

        <div className={styles.grid}>
          {APPEALS.map((item, i) => (
            <FadeIn key={item.id} delay={i * 120}>
              <div className={styles.card}>
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Decorative */}
        <div className={styles.deco} aria-hidden>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120Z"
              fill="var(--color-cream)" />
          </svg>
        </div>
      </div>
    </section>
  )
}
