import { useState } from 'react'
import { SectionTitle, FadeIn, Button, formatPrice } from '@/shared'
import { PLANS } from '@/entities/plan'
import { useRouter } from '@/app/providers/router'
import styles from './PlansSection.module.css'

export function PlansSection() {
  const { navigate } = useRouter()
  const [active, setActive] = useState('halfboard')

  const plan = PLANS.find(p => p.id === active)!

  return (
    <section id="plans" className={styles.section}>
      <div className="container">
        <FadeIn>
          <SectionTitle eyebrow="Stay Plans" sub="お客様のご要望に合わせた3つの宿泊プランをご用意しています。">
            宿泊プランを選ぶ
          </SectionTitle>
        </FadeIn>

        {/* Tab switcher */}
        <FadeIn delay={100}>
          <div className={styles.tabs} role="tablist">
            {PLANS.map(p => (
              <button
                key={p.id}
                role="tab"
                aria-selected={active === p.id}
                className={`${styles.tab} ${active === p.id ? styles.activeTab : ''}`}
                onClick={() => setActive(p.id)}
              >
                {p.badge && <span className={styles.tabBadge}>{p.badge}</span>}
                <span className={styles.tabNameEn}>{p.nameEn}</span>
                <span className={styles.tabName}>{p.name}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Plan Detail Panel */}
        <FadeIn delay={150}>
          <div className={styles.panel} key={active} role="tabpanel">
            <div className={styles.panelLeft}>
              <PlanIllustration planId={plan.id} />
            </div>

            <div className={styles.panelRight}>
              <span className={styles.planNameEn}>{plan.nameEn}</span>
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDesc}>{plan.description}</p>

              <div className={styles.includes}>
                <span className={styles.includesLabel}>含まれるもの</span>
                <ul className={styles.includesList}>
                  {plan.includes.map(item => (
                    <li key={item} className={styles.includesItem}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={styles.checkIcon}>
                        <circle cx="7" cy="7" r="6" fill="rgba(0,180,200,0.15)" stroke="rgba(0,180,200,0.5)" strokeWidth="0.8" />
                        <path d="M4 7 L6 9 L10 5" stroke="#00B4C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.pricing}>
                <div className={styles.priceBlock}>
                  <span className={styles.priceLabel}>1名/1泊 FROM</span>
                  <span className={styles.priceValue}>{formatPrice(plan.price)}</span>
                  <span className={styles.priceTax}>（税・サービス料込）</span>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('booking', { planId: plan.id })}
                >
                  このプランで予約する
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function PlanIllustration({ planId }: { planId: string }) {
  if (planId === 'standard') {
    return (
      <svg viewBox="0 0 460 320" fill="none" className={styles.planSvg}>
        <rect width="460" height="320" fill="url(#std_grad)" />
        <defs>
          <linearGradient id="std_grad" x1="0" y1="0" x2="460" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#050D1A" /><stop offset="1" stopColor="#0D2B4E" />
          </linearGradient>
        </defs>
        <circle cx="350" cy="80" r="55" fill="#F5C842" opacity="0.1" />
        <circle cx="350" cy="80" r="35" fill="#F5C842" opacity="0.14" />
        <path d="M0 200 Q115 170 230 200 Q345 230 460 200 L460 320 L0 320Z" fill="rgba(0,180,200,0.18)" />
        <path d="M0 230 Q115 205 230 230 Q345 255 460 230 L460 320 L0 320Z" fill="rgba(0,180,200,0.28)" />
        <rect x="80" y="110" width="200" height="120" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <rect x="100" y="160" width="80" height="50" rx="4" fill="rgba(0,180,200,0.1)" />
        <rect x="190" y="140" width="70" height="70" rx="4" fill="rgba(200,169,110,0.12)" />
      </svg>
    )
  }
  if (planId === 'halfboard') {
    return (
      <svg viewBox="0 0 460 320" fill="none" className={styles.planSvg}>
        <rect width="460" height="320" fill="url(#hb_grad)" />
        <defs>
          <linearGradient id="hb_grad" x1="0" y1="0" x2="460" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0D1A08" /><stop offset="1" stopColor="#1A3A12" />
          </linearGradient>
          <radialGradient id="hb_glow" cx="50%" cy="50%" r="50%">
            <stop stopColor="#C8A96E" stopOpacity="0.15" /><stop offset="1" stopColor="#C8A96E" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="460" height="320" fill="url(#hb_glow)" />
        {/* Table setting */}
        <ellipse cx="230" cy="230" rx="140" ry="36" fill="#C8A96E" opacity="0.1" />
        <rect x="150" y="155" width="160" height="8" rx="4" fill="#C8A96E" opacity="0.4" />
        <circle cx="230" cy="205" r="45" stroke="#C8A96E" strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="230" cy="205" r="32" stroke="#C8A96E" strokeWidth="0.7" fill="rgba(0,0,0,0.25)" strokeOpacity="0.3" />
        {[0,60,120,180,240,300].map((d,i) => {
          const a = d*Math.PI/180, x=230+20*Math.cos(a), y=205+20*Math.sin(a)
          return <circle key={i} cx={x} cy={y} r={4} fill={['#00B4C8','#F5C842','#4CAF7D','#FF8C42','#00B4C8','#C8A96E'][i]} opacity="0.65" />
        })}
        {/* Candles */}
        <rect x="160" y="148" width="6" height="22" rx="3" fill="#F5C842" opacity="0.7" />
        <rect x="292" y="148" width="6" height="22" rx="3" fill="#F5C842" opacity="0.7" />
        <ellipse cx="163" cy="144" rx="4" ry="7" fill="#F5C842" opacity="0.4" />
        <ellipse cx="295" cy="144" rx="4" ry="7" fill="#F5C842" opacity="0.4" />
      </svg>
    )
  }
  // all-inclusive
  return (
    <svg viewBox="0 0 460 320" fill="none" className={styles.planSvg}>
      <rect width="460" height="320" fill="url(#ai_grad)" />
      <defs>
        <linearGradient id="ai_grad" x1="0" y1="0" x2="460" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0A0A1A" /><stop offset="1" stopColor="#1A0A30" />
        </linearGradient>
        <radialGradient id="ai_glow" cx="50%" cy="45%" r="45%">
          <stop stopColor="#4DD9E8" stopOpacity="0.2" /><stop offset="1" stopColor="#4DD9E8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="460" height="320" fill="url(#ai_glow)" />
      {/* Crown/luxury symbol */}
      <path d="M175 160 L195 120 L230 145 L265 120 L285 160 Z" stroke="#C8A96E" strokeWidth="1.5" fill="rgba(200,169,110,0.12)" />
      <circle cx="175" cy="160" r="5" fill="#C8A96E" opacity="0.7" />
      <circle cx="230" cy="145" r="5" fill="#C8A96E" opacity="0.7" />
      <circle cx="285" cy="160" r="5" fill="#C8A96E" opacity="0.7" />
      <rect x="175" y="160" width="110" height="6" rx="3" fill="#C8A96E" opacity="0.4" />
      {/* Stars */}
      {[80,140,180,260,320,380,420].map((x,i) => (
        <circle key={i} cx={x} cy={[30,55,18,45,25,60,35][i]} r={[1.5,2,1,1.5,2,1,1.5][i]} fill="white" opacity={0.5+i*0.05} />
      ))}
      {/* Infinity pool */}
      <path d="M60 250 Q230 220 400 250 L400 290 Q230 270 60 290Z" fill="#00B4C8" opacity="0.18" />
      <path d="M60 260 Q230 232 400 260" stroke="#4DD9E8" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  )
}
