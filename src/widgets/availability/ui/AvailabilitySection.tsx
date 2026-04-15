import { SectionTitle, FadeIn, Button, formatDateJa } from '@/shared'
import { Calendar } from '@/features/availability-calendar'
import { useRouter } from '@/app/providers/router'
import styles from './AvailabilitySection.module.css'

export function AvailabilitySection() {
  const { navigate, booking, updateBooking } = useRouter()

  const handleDateSelect = (date: string) => {
    updateBooking({ checkIn: date })
  }

  const handleReserve = () => {
    if (booking.checkIn) {
      navigate('booking')
    }
  }

  return (
    <section id="availability" className={styles.section}>
      {/* Animated background */}
      <div className={styles.bg} aria-hidden>
        <svg className={styles.bgWave} viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="avail_glow" cx="50%" cy="60%" r="55%">
              <stop stopColor="#00B4C8" stopOpacity="0.18" />
              <stop offset="1" stopColor="#00B4C8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="600" fill="url(#avail_glow)" />
          <path className={styles.wavePath1}
            d="M-100,300 C200,240 400,360 700,300 C1000,240 1200,360 1540,300 L1540,600 L-100,600Z"
            fill="rgba(0,180,200,0.1)" />
          <path className={styles.wavePath2}
            d="M-100,350 C250,290 450,400 750,350 C1050,300 1250,400 1540,350 L1540,600 L-100,600Z"
            fill="rgba(0,180,200,0.15)" />
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <FadeIn>
          <SectionTitle eyebrow="Availability" light sub="ご希望の日付をクリックするとそのまま予約フォームへ進めます。">
            空室カレンダー
          </SectionTitle>
        </FadeIn>

        <div className={styles.layout}>
          {/* Calendar */}
          <FadeIn direction="left" delay={100} className={styles.calendarWrap}>
            <Calendar onDateSelect={handleDateSelect} />
          </FadeIn>

          {/* Info panel */}
          <FadeIn direction="right" delay={200}>
            <div className={styles.info}>
              <div className={styles.infoBox}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className={styles.infoIcon}>
                  <circle cx="22" cy="22" r="20" fill="rgba(0,180,200,0.12)" stroke="rgba(0,180,200,0.35)" strokeWidth="1" />
                  <rect x="13" y="12" width="18" height="20" rx="3" stroke="#4DD9E8" strokeWidth="1.2" fill="none" />
                  <path d="M13 18 L31 18" stroke="#4DD9E8" strokeWidth="1" />
                  <circle cx="17" cy="9" r="2" fill="#4DD9E8" opacity="0.7" />
                  <circle cx="27" cy="9" r="2" fill="#4DD9E8" opacity="0.7" />
                  <rect x="17" y="7" width="10" height="4" rx="2" fill="none" stroke="#4DD9E8" strokeWidth="1" />
                  <rect x="16" y="22" width="4" height="4" rx="1" fill="#4DD9E8" opacity="0.6" />
                  <rect x="22" y="22" width="4" height="4" rx="1" fill="#4DD9E8" opacity="0.4" />
                  <rect x="16" y="28" width="4" height="4" rx="1" fill="#4DD9E8" opacity="0.3" />
                </svg>

                {booking.checkIn ? (
                  <div className={styles.selectedDate}>
                    <span className={styles.selectedLabel}>チェックイン</span>
                    <span className={styles.selectedValue}>{formatDateJa(booking.checkIn)}</span>
                    <span className={styles.selectedNote}>をご選択中</span>
                  </div>
                ) : (
                  <div className={styles.prompt}>
                    <p className={styles.promptTitle}>日付をお選びください</p>
                    <p className={styles.promptText}>
                      カレンダーの空室日をクリックすると<br />
                      チェックイン日として設定されます
                    </p>
                  </div>
                )}
              </div>

              {/* Steps */}
              <div className={styles.steps}>
                {[
                  { step: '1', label: '空室日を選ぶ', active: !booking.checkIn },
                  { step: '2', label: '予約内容を入力', active: !!booking.checkIn },
                  { step: '3', label: '予約完了', active: false },
                ].map((s, i) => (
                  <div key={s.step} className={`${styles.step} ${s.active ? styles.activeStep : ''}`}>
                    <span className={styles.stepNum}>{s.step}</span>
                    <span className={styles.stepLabel}>{s.label}</span>
                    {i < 2 && <span className={styles.stepArrow}>→</span>}
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                size="lg"
                fullWidth
                disabled={!booking.checkIn}
                onClick={handleReserve}
              >
                {booking.checkIn ? '予約フォームへ進む' : '日付を選んでください'}
              </Button>

              <p className={styles.note}>
                ※ お支払いはご到着時に承ります<br />
                ※ キャンセルは3日前まで無料
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
