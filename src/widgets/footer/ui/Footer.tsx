import styles from './Footer.module.css'

const FOOTER_LINKS = [
  {
    title: 'リゾート',
    links: ['リゾートについて', 'アクセス', '施設紹介', 'よくあるご質問'],
  },
  {
    title: 'お部屋',
    links: ['オーシャン デラックス', 'ガーデン プレミア', 'アジュール スイート', 'スカイ ヴィラ'],
  },
  {
    title: 'ダイニング',
    links: ['Azul Kitchen', 'Tide Bar', 'ルームサービス', '朝食ビュッフェ'],
  },
  {
    title: 'サービス',
    links: ['Azure Spa', 'アクティビティ', 'ウェディング', 'コーポレート'],
  },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="15" stroke="rgba(77,217,232,0.5)" strokeWidth="1" />
              <path d="M5 23 Q9 15 18 18 Q27 21 31 13" stroke="#4DD9E8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M5 26 Q10 18.5 18 21 Q26 23.5 31 16" stroke="#4DD9E8" strokeWidth="0.9" strokeLinecap="round" fill="none" strokeOpacity="0.5" />
            </svg>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>AZURE</span>
              <span className={styles.logoSub}>RESORT &amp; SPA</span>
            </div>
          </div>
          <p className={styles.tagline}>波の彼方、至上の楽園へ。</p>
          <p className={styles.brandDesc}>
            沖縄の美しい海と自然に囲まれた、<br />
            心から安らげる大人のリゾートです。
          </p>

          <div className={styles.social}>
            {['Instagram', 'Facebook', 'X (Twitter)'].map(s => (
              <a key={s} href="#" className={styles.socialLink} aria-label={s}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className={styles.links}>
          {FOOTER_LINKS.map(col => (
            <div key={col.title} className={styles.col}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul className={styles.colList}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className={styles.link}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <div className={styles.legalLinks}>
            {['プライバシーポリシー', '利用規約', 'キャンセルポリシー', '特定商取引法'].map(l => (
              <a key={l} href="#" className={styles.legalLink}>{l}</a>
            ))}
          </div>
          <p className={styles.copy}>
            © 2026 Azure Resort &amp; Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
