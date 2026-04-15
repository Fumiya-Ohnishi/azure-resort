import { useState } from 'react'
import { Button, formatDateJa, formatPrice } from '@/shared'
import { ROOMS } from '@/entities/room'
import { PLANS } from '@/entities/plan'
import { useBookingForm } from '@/features/booking-form'
import { useRouter } from '@/app/providers/router'
import { generateReservationNo } from '@/shared/lib/format'
import styles from './BookingPage.module.css'

export function BookingPage() {
  const { booking, navigate, updateBooking } = useRouter()
  const [step, setStep] = useState<1 | 2>(1)

  const { values, errors, set, handleSubmit } = useBookingForm({
    initialCheckIn: booking.checkIn ?? '',
    onSubmit: (v) => {
      const reservationNo = generateReservationNo()
      updateBooking({ ...v, reservationNo })
      navigate('complete')
    },
  })

  const selectedRoom = ROOMS.find(r => r.id === values.roomId) ?? ROOMS[0]
  const selectedPlan = PLANS.find(p => p.id === values.planId) ?? PLANS[0]

  return (
    <div className={styles.page}>
      {/* Top bar */}
      <div className={styles.topbar}>
        <button className={styles.backBtn} onClick={() => navigate('home')}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4 L6 10 L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          トップへ戻る
        </button>
        <div className={styles.logoTop}>
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" stroke="rgba(77,217,232,0.6)" strokeWidth="1" />
            <path d="M4 18 Q8 12 14 14 Q20 16 24 10" stroke="#4DD9E8" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          </svg>
          <span className={styles.logoTopText}>AZURE RESORT &amp; SPA</span>
        </div>
      </div>

      <div className={styles.main}>
        {/* Progress bar */}
        <div className={styles.progress}>
          <div className={`${styles.progressStep} ${step >= 1 ? styles.done : ''}`}>
            <span className={styles.progressNum}>1</span>
            <span>プランと客室</span>
          </div>
          <div className={`${styles.progressLine} ${step >= 2 ? styles.lineDone : ''}`} />
          <div className={`${styles.progressStep} ${step >= 2 ? styles.done : ''}`}>
            <span className={styles.progressNum}>2</span>
            <span>お客様情報</span>
          </div>
          <div className={styles.progressLine} />
          <div className={styles.progressStep}>
            <span className={styles.progressNum}>3</span>
            <span>予約完了</span>
          </div>
        </div>

        <div className={styles.layout}>
          {/* ---- Left: Form ---- */}
          <div className={styles.form}>
            {step === 1 && (
              <div className={styles.formSection} key="step1">
                <h2 className={styles.formTitle}>プランと客室を選ぶ</h2>

                {/* Dates */}
                <fieldset className={styles.fieldset}>
                  <legend className={styles.legend}>宿泊日程</legend>
                  <div className={styles.dateRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>チェックイン</label>
                      <input
                        type="date"
                        className={`${styles.input} ${errors.checkIn ? styles.inputError : ''}`}
                        value={values.checkIn}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={e => set('checkIn', e.target.value)}
                      />
                      {errors.checkIn && <span className={styles.error}>{errors.checkIn}</span>}
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>宿泊数</label>
                      <select
                        className={styles.select}
                        value={values.nights}
                        onChange={e => set('nights', Number(e.target.value))}
                      >
                        {[1,2,3,4,5,6,7].map(n => (
                          <option key={n} value={n}>{n}泊</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>チェックアウト</label>
                      <input
                        type="date"
                        className={styles.input}
                        value={values.checkOut}
                        readOnly
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Room type */}
                <fieldset className={styles.fieldset}>
                  <legend className={styles.legend}>お部屋タイプ</legend>
                  <div className={styles.roomGrid}>
                    {ROOMS.map(room => (
                      <button
                        key={room.id}
                        type="button"
                        className={`${styles.roomOption} ${values.roomId === room.id ? styles.roomSelected : ''}`}
                        onClick={() => set('roomId', room.id)}
                      >
                        <span className={styles.roomOptionName}>{room.name}</span>
                        <span className={styles.roomOptionArea}>{room.area}m² ·最大{room.maxGuests}名</span>
                        <span className={styles.roomOptionPrice}>{formatPrice(room.priceFrom)}~/泊</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* Plan */}
                <fieldset className={styles.fieldset}>
                  <legend className={styles.legend}>プラン</legend>
                  <div className={styles.planGrid}>
                    {PLANS.map(plan => (
                      <button
                        key={plan.id}
                        type="button"
                        className={`${styles.planOption} ${values.planId === plan.id ? styles.planSelected : ''}`}
                        onClick={() => set('planId', plan.id)}
                      >
                        {plan.badge && <span className={styles.planBadge}>{plan.badge}</span>}
                        <span className={styles.planOptionName}>{plan.name}</span>
                        <span className={styles.planOptionDesc}>{plan.description.slice(0, 40)}…</span>
                        <span className={styles.planOptionPrice}>{formatPrice(plan.price)}~/泊</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* Guests */}
                <fieldset className={styles.fieldset}>
                  <legend className={styles.legend}>人数</legend>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>大人の人数</label>
                    <select
                      className={styles.select}
                      value={values.guests}
                      onChange={e => set('guests', Number(e.target.value))}
                    >
                      {[1,2,3,4].map(n => (
                        <option key={n} value={n}>{n}名</option>
                      ))}
                    </select>
                  </div>
                </fieldset>

                <Button variant="primary" size="lg" fullWidth onClick={() => setStep(2)}>
                  次へ：お客様情報を入力する →
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className={styles.formSection} key="step2">
                <h2 className={styles.formTitle}>お客様情報</h2>

                <fieldset className={styles.fieldset}>
                  <legend className={styles.legend}>代表者様のご情報</legend>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>お名前 *</label>
                    <input
                      type="text"
                      placeholder="山田 太郎"
                      className={`${styles.input} ${errors.guestName ? styles.inputError : ''}`}
                      value={values.guestName}
                      onChange={e => set('guestName', e.target.value)}
                    />
                    {errors.guestName && <span className={styles.error}>{errors.guestName}</span>}
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>メールアドレス *</label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className={`${styles.input} ${errors.guestEmail ? styles.inputError : ''}`}
                      value={values.guestEmail}
                      onChange={e => set('guestEmail', e.target.value)}
                    />
                    {errors.guestEmail && <span className={styles.error}>{errors.guestEmail}</span>}
                  </div>

                  <div className={styles.notice}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="rgba(0,180,200,0.6)" strokeWidth="0.8" />
                      <path d="M8 5 L8 9" stroke="#00B4C8" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="8" cy="11.5" r="0.9" fill="#00B4C8" />
                    </svg>
                    <p>予約確認メールをご入力のアドレスへ送信します（ダミー）</p>
                  </div>
                </fieldset>

                <div className={styles.btnRow}>
                  <Button variant="outline" size="md" onClick={() => setStep(1)}>
                    ← 戻る
                  </Button>
                  <Button variant="sand" size="lg" onClick={handleSubmit}>
                    予約を確定する
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* ---- Right: Summary ---- */}
          <div className={styles.summary}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>予約内容の確認</h3>

              {values.checkIn && (
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>チェックイン</span>
                  <span className={styles.summaryValue}>{formatDateJa(values.checkIn)}</span>
                </div>
              )}
              {values.checkOut && (
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>チェックアウト</span>
                  <span className={styles.summaryValue}>{formatDateJa(values.checkOut)}</span>
                </div>
              )}
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>宿泊数</span>
                <span className={styles.summaryValue}>{values.nights}泊</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>人数</span>
                <span className={styles.summaryValue}>{values.guests}名</span>
              </div>

              <div className={styles.summaryDivider} />

              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>お部屋</span>
                <span className={styles.summaryValue}>{selectedRoom.name}</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>プラン</span>
                <span className={styles.summaryValue}>{selectedPlan.name}</span>
              </div>

              <div className={styles.summaryDivider} />

              <div className={styles.summaryTotal}>
                <span>合計（参考）</span>
                <span className={styles.totalPrice}>{formatPrice(selectedPlan.price * values.nights * values.guests)}</span>
              </div>
              <p className={styles.summaryNote}>
                ※実際の料金はチェックアウト時にご確認ください<br />
                ※税・サービス料込みの概算金額です
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
