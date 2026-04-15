export type AvailabilityStatus = 'available' | 'limited' | 'unavailable' | 'past'

export interface DayInfo {
  date: string           // ISO: "YYYY-MM-DD"
  status: AvailabilityStatus
}

/** Deterministically generate availability for a given year/month */
export function generateMonthAvailability(year: number, month: number): DayInfo[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const daysInMonth = new Date(year, month, 0).getDate()
  const result: DayInfo[] = []

  // Seed-based pseudo-random using date as seed
  const seed = (day: number) => {
    const x = Math.sin(year * 31 + month * 7 + day * 13) * 10000
    return x - Math.floor(x)
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month - 1, d)
    const iso  = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`

    let status: AvailabilityStatus
    if (date < today) {
      status = 'past'
    } else {
      const r = seed(d)
      if (r < 0.12)      status = 'unavailable'
      else if (r < 0.26) status = 'limited'
      else               status = 'available'
    }

    result.push({ date: iso, status })
  }

  return result
}
