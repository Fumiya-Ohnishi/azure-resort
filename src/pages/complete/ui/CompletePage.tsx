import { Button, formatDateJa, formatPrice } from '@/shared'
import { ROOMS } from '@/entities/room'
import { PLANS } from '@/entities/plan'
import { useRouter } from '@/app/providers/router'
import styles from './CompletePage.module.css'

export function CompletePage() {
  const { booking, navigate } = useRouter()

  const room = ROOMS.find(r => r.id === booking.roomId) ?? ROOMS[0]
  const plan = PLANS.find(p => p.id === booking.planId) ?? PLANS[0]

  return (
    <div className={styles.page}>
      {/* Background */}
      <div className={styles.bg} aria-hidden>
        <svg viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice" className={styles.bgSvg}>
          <defs>
            <radialGradient id="complete_glow" cx="50%" cy="40%" r="55%">
              <stop stopColor="#00B4C8" stopOpacity="0.2" />
              <stop offset="1" stopColor="#00B4C8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#complete_glow)" />
          <path d="M-100,500 C300,420 600,560 900,500 C1200,440 1400,540 1540,500 L1540,900 L-100,900Z"
            fill="rgba(0,180,200,0.12)" />
          <path d="M-100,560 C350,490 650,610 950,560 C1250,510 1420,590 1540,560 L1540,900 L-100,900Z"
            fill="rgba(0,180,200,0.2)" />
          {[80,180,300,480,720,960,1100,1300].map((x, i) => (
            <circle key={i} cx={x} cy={[50,80,35,65,45,75,30,55][i]} r={[1.5,2,1,1.5,2,1,1.5,1][i]}
              fill="white" opacity={0.4+i*0.04} />
          ))}
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Success icon */}
        <div className={styles.iconWrap}>
          <div className={styles.iconRing} />
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className={styles.checkSvg}>
            <circle cx="32" cy="32" r="28" fill="rgba(0,180,200,0.15)" stroke="rgba(0,180,200,0.4)" strokeWidth="1.5" />
            <path d="M18 32 L27 42 L46 22" stroke="#00B4C8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className={styles.heading}>ご予約が完了しました</h1>
        <p className={styles.sub}>
          ご予約いただきありがとうございます。<br />
          確認メールをご登録のアドレスへ送信しました（ダミー）。
        </p>

        {/* Reservation number */}
        {booking.reservationNo && (
          <div className={styles.reservationNo}>
            <span className={styles.reservationLabel}>予約番号</span>
            <span className={styles.reservationValue}>{booking.reservationNo}</span>
            <span className={styles.reservationNote}>
              当日フロントにてこちらの番号をお伝えください
            </span>
          </div>
        )}

        {/* Booking summary */}
        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>ご予約内容</h2>
          <div className={styles.summaryGrid}>
            {[
              { label: 'チェックイン',  value: booking.checkIn  ? formatDateJa(booking.checkIn)  : '—' },
              { label: 'チェックアウト', value: booking.checkOut ? formatDateJa(booking.checkOut) : '—' },
              { label: '宿泊数',        value: booking.nights ? `${booking.nights}泊` : '—' },
              { label: '人数',          value: booking.guests ? `${booking.guests}名` : '—' },
              { label: 'お部屋',        value: room.name },
              { label: 'プラン',        value: plan.name },
              { label: 'お名前',        value: booking.guestName ?? '—' },
              { label: 'メール',        value: booking.guestEmail ?? '—' },
            ].map(item => (
              <div key={item.label} className={styles.summaryItem}>
                <span className={styles.summaryLabel}>{item.label}</span>
                <span className={styles.summaryValue}>{item.value}</span>
              </div>
            ))}
          </div>

          {booking.nights && (
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>お支払い総額（参考）</span>
              <span className={styles.totalValue}>
                {formatPrice(plan.price * (booking.nights ?? 1) * (booking.guests ?? 1))}
              </span>
            </div>
          )}
        </div>

        {/* What's next */}
        <div className={styles.nextsteps}>
          <h3 className={styles.nextstepsTitle}>チェックインまでの流れ</h3>
          <div className={styles.nextstepsList}>
            {[
              { icon: '📧', text: '確認メールをご確認ください（ダミー送信）' },
              { icon: '🏖', text: 'お荷物は事前にホテルへ発送可能です' },
              { icon: '🚗', text: '空港からの送迎が必要な場合はご連絡ください' },
              { icon: '✨', text: 'チェックイン当日は15:00よりご案内いたします' },
            ].map((s, i) => (
              <div key={i} className={styles.nextstep}>
                <span className={styles.nextstepIcon}>{s.icon}</span>
                <span className={styles.nextstepText}>{s.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <Button variant="primary" size="lg" onClick={() => navigate('home')}>
            トップページへ戻る
          </Button>
          <Button variant="outline" size="md" onClick={() => navigate('booking')}>
            もう一部屋予約する
          </Button>
        </div>
      </div>
    </div>
  )
}
