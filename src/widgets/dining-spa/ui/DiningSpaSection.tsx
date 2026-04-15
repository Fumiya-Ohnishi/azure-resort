import { SectionTitle, FadeIn } from '@/shared'
import styles from './DiningSpaSection.module.css'

const ITEMS = [
  {
    id: 'restaurant',
    category: 'DINING',
    title: '琉球モダン —\nAzul Kitchen',
    desc: '地産地消の理念のもと、沖縄の海と大地の恵みを皿の上に表現。夕暮れ時の海を望みながら、シェフ渾身のコース料理をどうぞ。',
    tags: ['コースディナー', '地元食材', 'オーシャンビュー', 'ソムリエ常駐'],
    accentColor: '#C8A96E',
    bgFrom: '#1A0A00',
    bgTo: '#2A1500',
  },
  {
    id: 'spa',
    category: 'SPA & WELLNESS',
    title: '心身の解放 —\nAzure Spa',
    desc: '太平洋を望む絶景スパ。島植物のアロマと、海洋ミネラルを活かしたオリジナルトリートメントで、深部から解きほぐします。',
    tags: ['オーシャンビュー', 'プライベートルーム', '島植物アロマ', '日本語スタッフ'],
    accentColor: '#4DD9E8',
    bgFrom: '#050F1E',
    bgTo: '#0A2040',
  },
  {
    id: 'bar',
    category: 'POOL BAR',
    title: '波音のカクテル —\nTide Bar',
    desc: '無限の海と空が溶け合う場所に佇むプールサイドバー。サンセットとともに、バーテンダーが作るオリジナルカクテルを一杯。',
    tags: ['プールサイド', 'オリジナルカクテル', 'ノンアルコールメニュー', '21時まで営業'],
    accentColor: '#00B4C8',
    bgFrom: '#061422',
    bgTo: '#0D2540',
  },
]

export function DiningSpaSection() {
  return (
    <section id="dining" className={styles.section}>
      <div className="container">
        <FadeIn>
          <SectionTitle
            eyebrow="Dining & Spa"
            light
            sub="五感で味わう、アジュールの贅沢。すべての瞬間を特別な記憶に。"
          >
            美食と癒しの空間
          </SectionTitle>
        </FadeIn>

        <div className={styles.list}>
          {ITEMS.map((item, i) => (
            <FadeIn key={item.id} delay={i * 130} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className={`${styles.item} ${i % 2 !== 0 ? styles.reverse : ''}`}>
                {/* Illustration */}
                <div className={styles.visual}>
                  <DiningIllustration item={item} />
                </div>

                {/* Text */}
                <div className={styles.text}>
                  <span className={styles.category} style={{ color: item.accentColor }}>
                    {item.category}
                  </span>
                  <h3 className={styles.title}>
                    {item.title.split('\n').map((line, j) => (
                      <span key={j} className={styles.titleLine}>{line}</span>
                    ))}
                  </h3>
                  <p className={styles.desc}>{item.desc}</p>
                  <div className={styles.tags}>
                    {item.tags.map(tag => (
                      <span key={tag} className={styles.tag} style={{ borderColor: item.accentColor + '55', color: item.accentColor }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function DiningIllustration({ item }: { item: typeof ITEMS[number] }) {
  const c = item.accentColor

  return (
    <svg viewBox="0 0 520 340" fill="none" className={styles.visual_svg}>
      <rect width="520" height="340" fill={`url(#dine_${item.id}_grad)`} />
      <defs>
        <linearGradient id={`dine_${item.id}_grad`} x1="0" y1="0" x2="520" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor={item.bgFrom} />
          <stop offset="1" stopColor={item.bgTo} />
        </linearGradient>
        <radialGradient id={`dine_${item.id}_glow`} cx="50%" cy="50%" r="50%">
          <stop stopColor={c} stopOpacity="0.18" />
          <stop offset="1" stopColor={c} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="520" height="340" fill={`url(#dine_${item.id}_glow)`} />

      {item.id === 'restaurant' && (
        <>
          {/* Table scene */}
          <ellipse cx="260" cy="230" rx="110" ry="30" fill={c} opacity="0.12" />
          <rect x="180" y="175" width="160" height="8" rx="4" fill={c} opacity="0.35" />
          {/* Plate */}
          <circle cx="260" cy="215" r="38" stroke={c} strokeWidth="1.5" fill="rgba(0,0,0,0.3)" />
          <circle cx="260" cy="215" r="28" stroke={c} strokeWidth="0.5" fill="rgba(0,0,0,0.2)" strokeOpacity="0.5" />
          {/* Food dots */}
          <circle cx="252" cy="212" r="5" fill={c} opacity="0.7" />
          <circle cx="268" cy="218" r="4" fill="#FF8C42" opacity="0.6" />
          <circle cx="258" cy="222" r="3" fill="#4CAF7D" opacity="0.6" />
          {/* Wine glass */}
          <path d="M320 145 Q328 180 322 195 L318 195 Q312 180 320 145Z" fill={c} opacity="0.4" />
          <rect x="316" y="195" width="8" height="20" fill={c} opacity="0.3" />
          <rect x="310" y="215" width="20" height="3" rx="1.5" fill={c} opacity="0.35" />
          {/* Candle */}
          <rect x="198" y="165" width="6" height="20" rx="3" fill="#F5C842" opacity="0.8" />
          <ellipse cx="201" cy="162" rx="4" ry="6" fill="#F5C842" opacity="0.5" />
          {/* Horizon window */}
          <path d="M0 100 Q260 60 520 100" stroke={c} strokeWidth="1" opacity="0.3" fill="none" />
          <rect x="0" y="0" width="520" height="100" fill="rgba(0,0,0,0.3)" />
        </>
      )}

      {item.id === 'spa' && (
        <>
          {/* Stone/water */}
          <ellipse cx="260" cy="260" rx="160" ry="40" fill={c} opacity="0.1" />
          {/* Lotus flower */}
          {[0,60,120,180,240,300].map((deg, i) => {
            const a = deg * Math.PI / 180
            const x = 260 + 42 * Math.cos(a), y = 195 + 42 * Math.sin(a)
            return (
              <ellipse key={i} cx={x} cy={y} rx="22" ry="12"
                fill={c} opacity="0.2"
                transform={`rotate(${deg}, ${x}, ${y})`} />
            )
          })}
          <circle cx="260" cy="195" r="20" fill={c} opacity="0.35" />
          {/* Water ripples */}
          {[40,65,90,115].map((r, i) => (
            <circle key={i} cx="260" cy="260" r={r} stroke={c} strokeWidth="0.8" fill="none" opacity={0.25 - i*0.05} />
          ))}
          {/* Incense smoke */}
          <path d="M160 220 Q162 200 158 180 Q154 160 160 140" stroke={c} strokeWidth="1.5" fill="none" opacity="0.35" strokeLinecap="round" />
          <path d="M175 225 Q177 205 173 182 Q169 159 175 135" stroke={c} strokeWidth="1" fill="none" opacity="0.25" strokeLinecap="round" />
        </>
      )}

      {item.id === 'bar' && (
        <>
          {/* Pool reflection */}
          <rect x="60" y="190" width="400" height="100" rx="8" fill={c} opacity="0.07" />
          <path d="M60 220 Q160 210 260 220 Q360 230 460 220" stroke={c} strokeWidth="1" fill="none" opacity="0.35" />
          <path d="M60 235 Q160 225 260 235 Q360 245 460 235" stroke={c} strokeWidth="0.7" fill="none" opacity="0.25" />
          {/* Cocktail glasses */}
          {[170, 260, 350].map((x, i) => (
            <g key={i}>
              <path d={`M${x-18} 145 L${x+18} 145 L${x} 185Z`} fill={c} opacity={0.25 + i*0.05} />
              <rect x={x-1.5} y="185" width="3" height="18" fill={c} opacity="0.35" />
              <rect x={x-14} y="203" width="28" height="3" rx="1.5" fill={c} opacity="0.3" />
            </g>
          ))}
          {/* Stars/lights */}
          {[80,140,200,310,390,450].map((x,i) => (
            <circle key={i} cx={x} cy={30+i*12} r={1.5} fill="white" opacity={0.5+i*0.06} />
          ))}
        </>
      )}
    </svg>
  )
}
