import { SectionTitle, FadeIn } from '@/shared'
import styles from './AccessSection.module.css'

const ACCESS_INFO = [
  { icon: '✈', label: '那覇空港より', value: 'リムジンバスで約70分' },
  { icon: '🚗', label: 'レンタカー', value: '国道58号線 約90分' },
  { icon: '🚢', label: '高速船', value: '那覇港より約45分' },
]

export function AccessSection() {
  return (
    <section id="access" className={styles.section}>
      <div className="container">
        <FadeIn>
          <SectionTitle eyebrow="Access" sub="沖縄本島北部の豊かな自然に囲まれた、アジュールリゾートへのアクセス。">
            アクセス
          </SectionTitle>
        </FadeIn>

        <div className={styles.layout}>
          {/* Map illustration */}
          <FadeIn direction="left" delay={100}>
            <div className={styles.mapWrap}>
              <AccessMapIllustration />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn direction="right" delay={200}>
            <div className={styles.info}>
              <div className={styles.address}>
                <span className={styles.addressLabel}>所在地</span>
                <p className={styles.addressValue}>
                  〒905-0000<br />
                  沖縄県国頭郡恩納村字恩納1234<br />
                  AZURE RESORT &amp; SPA
                </p>
              </div>

              <div className={styles.routes}>
                {ACCESS_INFO.map(item => (
                  <div key={item.label} className={styles.route}>
                    <span className={styles.routeIcon}>{item.icon}</span>
                    <div className={styles.routeText}>
                      <span className={styles.routeLabel}>{item.label}</span>
                      <span className={styles.routeValue}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.shuttle}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" fill="rgba(0,180,200,0.15)" stroke="rgba(0,180,200,0.5)" strokeWidth="0.8" />
                  <path d="M5 10 L8 13 L15 7" stroke="#00B4C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className={styles.shuttleText}>
                  那覇空港からの送迎サービスあり（要予約・有料）
                </p>
              </div>

              <div className={styles.tel}>
                <span className={styles.telLabel}>お問い合わせ</span>
                <a href="tel:0980001234" className={styles.telValue}>0980-00-1234</a>
                <span className={styles.telNote}>9:00〜20:00（年中無休）</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function AccessMapIllustration() {
  return (
    <svg viewBox="0 0 540 400" fill="none" className={styles.mapSvg}>
      <rect width="540" height="400" fill="url(#map_ocean)" />
      <defs>
        <linearGradient id="map_ocean" x1="0" y1="0" x2="540" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0D2B4E" />
          <stop offset="1" stopColor="#1A4A7A" />
        </linearGradient>
      </defs>

      {/* Grid lines (like a map) */}
      {[0,60,120,180,240,300,360].map(x => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="400" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      {[0,50,100,150,200,250,300,350,400].map(y => (
        <line key={`h${y}`} x1="0" y1={y} x2="540" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}

      {/* Island shape - Okinawa stylized */}
      <path
        d="M180 320 C160 300 150 280 155 255 C160 230 170 215 185 200 C200 185 210 175 215 160 C220 145 218 130 225 118 C232 106 245 98 258 100 C271 102 280 112 288 125 C296 138 298 152 305 162 C312 172 325 178 335 190 C345 202 348 218 345 235 C342 252 332 265 325 280 C318 295 310 308 300 318 C290 328 275 335 260 338 C245 341 228 340 215 335 C202 330 190 328 180 320Z"
        fill="rgba(26,180,120,0.18)" stroke="rgba(77,217,232,0.4)" strokeWidth="1.5"
      />

      {/* Coast texture lines */}
      <path d="M200 290 C210 285 220 288 230 285 C240 282 248 278 255 275" stroke="rgba(77,217,232,0.25)" strokeWidth="0.8" fill="none" />
      <path d="M175 260 C185 256 195 260 205 257 C215 254 222 250" stroke="rgba(77,217,232,0.2)" strokeWidth="0.7" fill="none" />

      {/* Roads */}
      <path d="M260 340 L260 150" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" />
      <path d="M180 250 L260 250 L340 230" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="5 3" />

      {/* Ocean waves */}
      {[80,130,180].map((y, i) => (
        <path key={i}
          d={`M${40+i*20} ${y} Q${90+i*20} ${y-15} ${140+i*20} ${y} Q${190+i*20} ${y+15} ${240+i*20} ${y}`}
          stroke="rgba(77,217,232,0.12)" strokeWidth="1" fill="none"
        />
      ))}

      {/* Location pin */}
      <g transform="translate(252, 168)">
        <circle cx="8" cy="8" r="20" fill="rgba(0,180,200,0.2)" />
        <path d="M8 0 C3.6 0 0 3.6 0 8 C0 14 8 22 8 22 C8 22 16 14 16 8 C16 3.6 12.4 0 8 0Z"
          fill="#00B4C8" />
        <circle cx="8" cy="8" r="3.5" fill="white" />
      </g>

      {/* Label */}
      <text x="285" y="192" fill="white" fontSize="10" fontFamily="sans-serif" opacity="0.8">
        AZURE RESORT
      </text>
      <text x="290" y="206" fill="rgba(77,217,232,0.7)" fontSize="8" fontFamily="sans-serif">
        &amp; SPA
      </text>

      {/* Compass rose */}
      <g transform="translate(480, 40)">
        <circle cx="0" cy="0" r="22" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <path d="M0 -16 L4 -4 L0 -8 L-4 -4Z" fill="rgba(77,217,232,0.8)" />
        <path d="M0 16 L4 4 L0 8 L-4 4Z" fill="rgba(255,255,255,0.3)" />
        <path d="M-16 0 L-4 -4 L-8 0 L-4 4Z" fill="rgba(255,255,255,0.3)" />
        <path d="M16 0 L4 -4 L8 0 L4 4Z" fill="rgba(255,255,255,0.3)" />
        <text x="-3" y="-18" fill="rgba(77,217,232,0.9)" fontSize="7" fontFamily="sans-serif">N</text>
      </g>
    </svg>
  )
}
