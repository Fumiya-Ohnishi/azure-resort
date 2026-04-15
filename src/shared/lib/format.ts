/** ISO date string → "YYYY年M月D日" */
export function formatDateJa(iso: string): string {
  const d = new Date(iso)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

/** number → "¥XX,XXX" */
export function formatPrice(price: number): string {
  return `¥${price.toLocaleString('ja-JP')}`
}

/** Generate a random reservation number */
export function generateReservationNo(): string {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
  const nums    = Math.floor(Math.random() * 900000 + 100000).toString()
  const prefix  = Array.from({ length: 2 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join('')
  return `${prefix}-${nums}`
}

/** Add N days to a date string */
export function addDays(iso: string, days: number): string {
  const d = new Date(iso)
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}
