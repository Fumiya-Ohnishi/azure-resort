import { useState } from 'react'
import type { BookingFormValues, BookingFormErrors } from './types'
import { addDays } from '@/shared'

interface UseBookingFormOptions {
  initialCheckIn?: string
  onSubmit: (values: BookingFormValues) => void
}

export function useBookingForm({ initialCheckIn = '', onSubmit }: UseBookingFormOptions) {
  const defaultCheckOut = initialCheckIn ? addDays(initialCheckIn, 2) : ''

  const [values, setValues] = useState<BookingFormValues>({
    checkIn:    initialCheckIn,
    checkOut:   defaultCheckOut,
    roomId:     'ocean-deluxe',
    planId:     'halfboard',
    nights:     2,
    guests:     2,
    guestName:  '',
    guestEmail: '',
  })

  const [errors, setErrors] = useState<BookingFormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof BookingFormValues, boolean>>>({})

  const set = <K extends keyof BookingFormValues>(key: K, val: BookingFormValues[K]) => {
    setValues(prev => {
      const next = { ...prev, [key]: val }
      // Auto-update checkout when checkIn or nights changes
      if (key === 'checkIn' || key === 'nights') {
        const ci = key === 'checkIn' ? (val as string) : prev.checkIn
        const n  = key === 'nights'  ? (val as number) : next.nights
        if (ci) next.checkOut = addDays(ci, n)
      }
      return next
    })
    setErrors(prev => ({ ...prev, [key]: undefined }))
  }

  const touch = (key: keyof BookingFormValues) => {
    setTouched(prev => ({ ...prev, [key]: true }))
  }

  const validate = (): boolean => {
    const errs: BookingFormErrors = {}
    if (!values.checkIn)    errs.checkIn    = 'チェックイン日を選択してください'
    if (!values.checkOut)   errs.checkOut   = 'チェックアウト日を選択してください'
    if (!values.roomId)     errs.roomId     = 'お部屋タイプを選択してください'
    if (!values.planId)     errs.planId     = 'プランを選択してください'
    if (!values.guestName.trim())  errs.guestName  = 'お名前を入力してください'
    if (!values.guestEmail.trim()) errs.guestEmail = 'メールアドレスを入力してください'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.guestEmail))
      errs.guestEmail = '正しいメールアドレスを入力してください'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = () => {
    if (validate()) onSubmit(values)
  }

  return { values, errors, touched, set, touch, handleSubmit }
}
