import type { Room } from '../../model/types'
import { formatPrice } from '@/shared'
import styles from './RoomCard.module.css'

interface RoomCardProps {
  room: Room
  onSelect?: (room: Room) => void
}

export function RoomCard({ room, onSelect }: RoomCardProps) {
  return (
    <article
      className={styles.card}
      onClick={() => onSelect?.(room)}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={e => e.key === 'Enter' && onSelect?.(room)}
    >
      {/* SVG Illustration */}
      <div className={styles.illustration}>
        <RoomIllustration room={room} />
      </div>

      <div className={styles.body}>
        <span className={styles.nameEn}>{room.nameEn}</span>
        <h3 className={styles.name}>{room.name}</h3>
        <p className={styles.desc}>{room.description}</p>

        <ul className={styles.features}>
          {room.features.map(f => (
            <li key={f} className={styles.feature}>
              <span className={styles.featureDot} />
              {f}
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <div className={styles.meta}>
            <span className={styles.area}>{room.area}m²</span>
            <span className={styles.guests}>最大{room.maxGuests}名</span>
          </div>
          <div className={styles.price}>
            <span className={styles.priceFrom}>FROM</span>
            <span className={styles.priceValue}>{formatPrice(room.priceFrom)}</span>
            <span className={styles.priceUnit}>/泊</span>
          </div>
        </div>
      </div>
    </article>
  )
}

function RoomIllustration({ room }: { room: Room }) {
  const c = room.svgColor

  if (room.id === 'ocean-deluxe') {
    return (
      <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="url(#oceanGrad)" />
        <defs>
          <linearGradient id="oceanGrad" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1F3A" />
            <stop offset="1" stopColor="#1A4A7A" />
          </linearGradient>
        </defs>
        {/* Sun */}
        <circle cx="320" cy="55" r="32" fill="#F5C842" opacity="0.8" />
        <circle cx="320" cy="55" r="22" fill="#FFE07A" opacity="0.9" />
        {/* Horizon glow */}
        <ellipse cx="200" cy="130" rx="260" ry="60" fill={c} opacity="0.12" />
        {/* Waves */}
        <path d="M0 150 Q50 135 100 150 Q150 165 200 150 Q250 135 300 150 Q350 165 400 150 L400 220 L0 220Z" fill={c} opacity="0.3" />
        <path d="M0 165 Q60 150 120 165 Q180 180 240 165 Q300 150 360 165 Q380 170 400 165 L400 220 L0 220Z" fill={c} opacity="0.45" />
        <path d="M0 180 Q70 168 140 180 Q210 192 280 180 Q340 168 400 180 L400 220 L0 220Z" fill={c} opacity="0.65" />
        {/* Balcony railing */}
        <rect x="60" y="90" width="280" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
        <rect x="80" y="98" width="4" height="40" fill="rgba(255,255,255,0.1)" />
        <rect x="130" y="98" width="4" height="40" fill="rgba(255,255,255,0.1)" />
        <rect x="180" y="98" width="4" height="40" fill="rgba(255,255,255,0.1)" />
        <rect x="230" y="98" width="4" height="40" fill="rgba(255,255,255,0.1)" />
        <rect x="280" y="98" width="4" height="40" fill="rgba(255,255,255,0.1)" />
        <rect x="318" y="98" width="4" height="40" fill="rgba(255,255,255,0.1)" />
      </svg>
    )
  }

  if (room.id === 'garden-premier') {
    return (
      <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="url(#gardenGrad)" />
        <defs>
          <linearGradient id="gardenGrad" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B2A18" />
            <stop offset="1" stopColor="#1A4A2A" />
          </linearGradient>
        </defs>
        {/* Ground */}
        <rect x="0" y="160" width="400" height="60" fill="#0D3A1A" />
        {/* Trees */}
        <ellipse cx="80" cy="110" rx="40" ry="55" fill="#1E5C2A" />
        <ellipse cx="80" cy="90" rx="30" ry="42" fill="#266B32" />
        <rect x="76" y="148" width="8" height="28" fill="#5C3A1A" />
        <ellipse cx="200" cy="120" rx="50" ry="65" fill="#1A5224" />
        <ellipse cx="200" cy="98" rx="38" ry="50" fill="#22613A" />
        <rect x="196" y="158" width="8" height="18" fill="#5C3A1A" />
        <ellipse cx="330" cy="105" rx="42" ry="58" fill="#1E5C2A" />
        <ellipse cx="330" cy="84" rx="32" ry="44" fill="#28703A" />
        <rect x="326" y="148" width="8" height="28" fill="#5C3A1A" />
        {/* Flowers */}
        <circle cx="140" cy="168" r="8" fill="#FF6B9D" opacity="0.8" />
        <circle cx="160" cy="162" r="6" fill="#FFD700" opacity="0.8" />
        <circle cx="260" cy="166" r="7" fill="#FF8C42" opacity="0.8" />
        <circle cx="280" cy="160" r="5" fill="#FF6B9D" opacity="0.7" />
        {/* Light beam */}
        <ellipse cx="200" cy="60" rx="80" ry="30" fill="#FFFDE7" opacity="0.06" />
      </svg>
    )
  }

  if (room.id === 'azure-suite') {
    return (
      <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="url(#suiteGrad)" />
        <defs>
          <linearGradient id="suiteGrad" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#050F1E" />
            <stop offset="1" stopColor="#0A2040" />
          </linearGradient>
          <radialGradient id="suiteGlow" cx="50%" cy="40%" r="50%">
            <stop stopColor={c} stopOpacity="0.25" />
            <stop offset="1" stopColor={c} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="220" fill="url(#suiteGlow)" />
        {/* Water platform */}
        <rect x="60" y="120" width="280" height="100" rx="12" fill="rgba(0,180,200,0.08)" stroke={c} strokeWidth="0.5" strokeOpacity="0.4" />
        {/* Pool */}
        <rect x="100" y="140" width="200" height="60" rx="8" fill={c} opacity="0.18" />
        <ellipse cx="200" cy="170" rx="80" ry="16" fill={c} opacity="0.1" />
        {/* Stars */}
        {[30,70,120,200,280,340,380,150,260].map((x, i) => (
          <circle key={i} cx={x} cy={[20,8,35,15,25,10,30,5,40][i]} r={[1,1.5,1,2,1,1.5,1,2,1][i]} fill="white" opacity="0.7" />
        ))}
        {/* Moon */}
        <circle cx="340" cy="40" r="20" fill="#FFF8E1" opacity="0.15" />
        <circle cx="352" cy="32" r="16" fill="#0A2040" opacity="0.9" />
        {/* Water reflections */}
        <path d="M80 180 Q110 175 140 180 Q170 185 200 180 Q230 175 260 180 Q290 185 320 180" stroke={c} strokeWidth="1" strokeOpacity="0.4" fill="none" />
        <path d="M100 190 Q130 186 160 190 Q190 194 220 190 Q250 186 280 190 Q300 193 320 190" stroke={c} strokeWidth="0.7" strokeOpacity="0.3" fill="none" />
      </svg>
    )
  }

  // Sky Villa
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="url(#villaGrad)" />
      <defs>
        <linearGradient id="villaGrad" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A0A2E" />
          <stop offset="0.5" stopColor="#3A1860" />
          <stop offset="1" stopColor="#0B1F3A" />
        </linearGradient>
      </defs>
      {/* Sunset sky */}
      <ellipse cx="200" cy="0" rx="300" ry="120" fill="#FF6B35" opacity="0.15" />
      <ellipse cx="200" cy="0" rx="200" ry="80" fill="#FFB347" opacity="0.12" />
      {/* Stars */}
      {[40,80,160,240,320,360,120,280,200].map((x, i) => (
        <circle key={i} cx={x} cy={[30,15,45,20,35,25,8,12,50][i]} r={[1,2,1,1.5,1,2,1,1.5,1][i]} fill="white" opacity="0.8" />
      ))}
      {/* Villa structure */}
      <rect x="100" y="100" width="200" height="80" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      {/* Pool edge */}
      <rect x="80" y="155" width="240" height="8" rx="4" fill={c} opacity="0.5" />
      {/* Reflection */}
      <ellipse cx="200" cy="190" rx="140" ry="20" fill={c} opacity="0.1" />
      {/* Gold detail */}
      <rect x="100" y="100" width="200" height="3" rx="1.5" fill={c} opacity="0.6" />
    </svg>
  )
}
