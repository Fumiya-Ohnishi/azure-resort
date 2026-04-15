import { useState, useMemo } from 'react'
import { generateMonthAvailability, type DayInfo } from './availability'

export interface CalendarState {
  year: number
  month: number          // 1-indexed
  days: DayInfo[]
  selectedDate: string | null
  canGoPrev: boolean
  prevMonth: () => void
  nextMonth: () => void
  selectDate: (date: string) => void
}

export function useCalendar(): CalendarState {
  const now = new Date()
  const [year, setYear]   = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const days = useMemo(() => generateMonthAvailability(year, month), [year, month])

  const canGoPrev = !(year === now.getFullYear() && month === now.getMonth() + 1)

  const prevMonth = () => {
    if (!canGoPrev) return
    if (month === 1) { setYear(y => y - 1); setMonth(12) }
    else setMonth(m => m - 1)
  }

  const nextMonth = () => {
    if (month === 12) { setYear(y => y + 1); setMonth(1) }
    else setMonth(m => m + 1)
  }

  const selectDate = (date: string) => {
    const day = days.find(d => d.date === date)
    if (!day || day.status === 'past' || day.status === 'unavailable') return
    setSelectedDate(date)
  }

  return { year, month, days, selectedDate, canGoPrev, prevMonth, nextMonth, selectDate }
}
