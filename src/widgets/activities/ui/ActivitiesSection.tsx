import { SectionTitle, FadeIn } from '@/shared'
import styles from './ActivitiesSection.module.css'

const ACTIVITIES = [
  {
    id: 'dive',
    label: 'スキューバダイビング',
    desc: '認定インストラクターが初心者から上級者まで案内。珊瑚の海を自由に泳ぐ体験を。',
    size: 'large',
    bgColor: '#0B2A4A',
    accentColor: '#00B4C8',
  },
  {
    id: 'kayak',
    label: 'カヤック',
    desc: 'マングローブ林を静かに進む朝カヤック。自然の息吹を肌で感じて。',
    size: 'small',
    bgColor: '#0D3A1E',
    accentColor: '#4CAF7D',
  },
  {
    id: 'yoga',
    label: 'サンライズヨガ',
    desc: '水平線から昇る朝陽の中で、心と体を整えるビーチヨガ。',
    size: 'small',
    bgColor: '#2A1A0A',
    accentColor: '#F5C842',
  },
  {
    id: 'snorkel',
    label: 'シュノーケリング',
    desc: 'カラフルな熱帯魚が舞う浅瀬のラグーン。機材貸出無料。',
    size: 'medium',
    bgColor: '#0A1E38',
    accentColor: '#4DD9E8',
  },
  {
    id: 'sunset',
    label: 'サンセットクルーズ',
    desc: '帆船に乗り、黄金色の水平線を眺める至極のひととき。',
    size: 'medium',
    bgColor: '#2A1A0A',
    accentColor: '#C8A96E',
  },
]

export function ActivitiesSection() {
  return (
    <section id="activities" className={styles.section}>
      <div className="container">
        <FadeIn>
          <SectionTitle eyebrow="Activities" sub="海と自然が舞台。心が動く体験があなたを待っています。">
            過ごし方、思いのまま
          </SectionTitle>
        </FadeIn>

        <div className={styles.masonry}>
          {ACTIVITIES.map((act, i) => (
            <FadeIn key={act.id} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className={`${styles.card} ${styles[act.size]}`}>
                <ActivityIllustration act={act} />
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>{act.label}</span>
                  <p className={styles.cardDesc}>{act.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function ActivityIllustration({ act }: { act: typeof ACTIVITIES[number] }) {
  const c = act.accentColor
  const bg = act.bgColor

  return (
    <svg className={styles.cardBg} viewBox="0 0 400 280" fill="none" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill={bg} />
      {act.id === 'dive' && (
        <>
          <ellipse cx="200" cy="140" rx="300" ry="200" fill={c} opacity="0.06" />
          {/* Bubbles */}
          {[80,140,200,260,320].map((x,i) => (
            <circle key={i} cx={x} cy={60 + i*30} r={4+i*2} stroke={c} strokeWidth="1" fill="none" opacity={0.4 - i*0.05} />
          ))}
          {/* Fish silhouettes */}
          <ellipse cx="120" cy="160" rx="22" ry="10" fill={c} opacity="0.25" />
          <polygon points="142,160 158,150 158,170" fill={c} opacity="0.2" />
          <ellipse cx="280" cy="200" rx="18" ry="8" fill={c} opacity="0.2" />
          <polygon points="298,200 312,192 312,208" fill={c} opacity="0.18" />
          {/* Coral */}
          <path d="M60 280 L60 240 L50 220 M60 240 L70 215 M60 250 L80 230" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          <path d="M340 280 L340 245 L330 225 M340 245 L350 218 M340 255 L360 240" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
          {/* Light ray */}
          <path d="M200 0 L180 280" stroke={c} strokeWidth="20" opacity="0.04" />
          <path d="M200 0 L220 280" stroke={c} strokeWidth="15" opacity="0.03" />
        </>
      )}
      {act.id === 'kayak' && (
        <>
          <path d="M0 180 Q100 150 200 180 Q300 210 400 180 L400 280 L0 280Z" fill={c} opacity="0.2" />
          <path d="M0 200 Q100 175 200 200 Q300 225 400 200 L400 280 L0 280Z" fill={c} opacity="0.3" />
          {/* Mangrove trees */}
          <rect x="30" y="80" width="8" height="160" fill={c} opacity="0.3" />
          <ellipse cx="34" cy="80" rx="28" ry="45" fill={c} opacity="0.22" />
          <rect x="350" y="60" width="8" height="180" fill={c} opacity="0.3" />
          <ellipse cx="354" cy="60" rx="30" ry="50" fill={c} opacity="0.2" />
          {/* Kayak */}
          <ellipse cx="200" cy="195" rx="60" ry="12" fill="#8B6914" opacity="0.6" />
        </>
      )}
      {act.id === 'yoga' && (
        <>
          {/* Sunrise */}
          <circle cx="200" cy="160" r="80" fill={c} opacity="0.08" />
          <circle cx="200" cy="160" r="50" fill={c} opacity="0.12" />
          <circle cx="200" cy="160" r="30" fill={c} opacity="0.2" />
          {/* Horizon */}
          <rect x="0" y="200" width="400" height="80" fill={c} opacity="0.08" />
          {/* Person silhouette */}
          <circle cx="200" cy="115" r="10" fill={c} opacity="0.35" />
          <path d="M200 125 L200 158 M192 138 L208 138 M200 158 L188 185 M200 158 L212 185" stroke={c} strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
        </>
      )}
      {act.id === 'snorkel' && (
        <>
          <rect x="0" y="140" width="400" height="140" fill={c} opacity="0.15" />
          {[30,90,150,210,270,330].map((x, i) => (
            <circle key={i} cx={x} cy={200 + (i%2)*30} r={8+i*3} fill={c} opacity={0.12 - i*0.01} />
          ))}
          {/* Seabed */}
          <path d="M0 260 Q80 240 160 258 Q240 276 320 256 Q360 246 400 260 L400 280 L0 280Z" fill={c} opacity="0.25" />
        </>
      )}
      {act.id === 'sunset' && (
        <>
          <circle cx="200" cy="120" r="55" fill={c} opacity="0.18" />
          <circle cx="200" cy="120" r="38" fill={c} opacity="0.22" />
          <path d="M0 200 Q100 170 200 200 Q300 230 400 200 L400 280 L0 280Z" fill="rgba(200,169,110,0.3)" />
          <path d="M0 220 Q100 195 200 220 Q300 245 400 220 L400 280 L0 280Z" fill="rgba(200,169,110,0.2)" />
          {/* Boat */}
          <path d="M140 210 L260 210 L240 235 L160 235Z" fill={c} opacity="0.35" />
          <path d="M200 180 L200 210 L220 200Z" fill={c} opacity="0.3" />
        </>
      )}
    </svg>
  )
}
