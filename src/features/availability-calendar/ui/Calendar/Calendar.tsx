import { useCalendar } from '../../model/useCalendar'
import type { AvailabilityStatus } from '../../model/availability'
import styles from './Calendar.module.css'

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土']

const MONTH_NAMES: Record<number, string> = {
  1: 'January', 2: 'February', 3: 'March', 4: 'April',
  5: 'May', 6: 'June', 7: 'July', 8: 'August',
  9: 'September', 10: 'October', 11: 'November', 12: 'December',
}

interface CalendarProps {
  onDateSelect: (date: string) => void
}

export function Calendar({ onDateSelect }: CalendarProps) {
  const cal = useCalendar()

  // Weekday of the 1st (0=Sun…6=Sat)
  const startDow = new Date(cal.year, cal.month - 1, 1).getDay()
  const totalCells = startDow + cal.days.length

  const handleSelect = (date: string) => {
    cal.selectDate(date)
    onDateSelect(date)
  }

  return (
    <div className={styles.root}>
      {/* Header */}
      <div className={styles.header}>
        <button
          className={styles.navBtn}
          onClick={cal.prevMonth}
          disabled={!cal.canGoPrev}
          aria-label="前の月"
        >
          ‹
        </button>
        <div className={styles.monthLabel}>
          <span className={styles.monthEn}>{MONTH_NAMES[cal.month]}</span>
          <span className={styles.monthJa}>{cal.year}年{cal.month}月</span>
        </div>
        <button className={styles.navBtn} onClick={cal.nextMonth} aria-label="次の月">
          ›
        </button>
      </div>

      {/* Weekday labels */}
      <div className={styles.grid}>
        {WEEKDAYS.map(wd => (
          <div key={wd} className={`${styles.weekday} ${wd === '日' ? styles.sun : wd === '土' ? styles.sat : ''}`}>
            {wd}
          </div>
        ))}

        {/* Empty cells before first day */}
        {Array.from({ length: startDow }).map((_, i) => (
          <div key={`empty-${i}`} className={styles.empty} />
        ))}

        {/* Day cells */}
        {cal.days.map((day, i) => {
          const dow = (startDow + i) % 7
          const isSelected = cal.selectedDate === day.date
          return (
            <button
              key={day.date}
              className={[
                styles.day,
                styles[day.status as AvailabilityStatus],
                isSelected ? styles.selected : '',
                dow === 0 ? styles.sun : dow === 6 ? styles.sat : '',
              ].filter(Boolean).join(' ')}
              onClick={() => handleSelect(day.date)}
              disabled={day.status === 'past' || day.status === 'unavailable'}
              aria-label={`${day.date} ${day.status}`}
              aria-pressed={isSelected}
            >
              <span className={styles.dayNum}>{i + 1}</span>
              {day.status === 'available'   && <span className={styles.dot} data-status="available" />}
              {day.status === 'limited'     && <span className={styles.dot} data-status="limited" />}
            </button>
          )
        })}

        {/* Trailing empty cells to complete the grid */}
        {Array.from({ length: Math.ceil(totalCells / 7) * 7 - totalCells }).map((_, i) => (
          <div key={`trail-${i}`} className={styles.empty} />
        ))}
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.legendDot} data-status="available" />空室あり
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendDot} data-status="limited" />残りわずか
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendDot} data-status="unavailable" />満室
        </span>
      </div>
    </div>
  )
}
