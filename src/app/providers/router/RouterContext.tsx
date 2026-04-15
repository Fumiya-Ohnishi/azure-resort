import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type PageKey = 'home' | 'booking' | 'complete'

export interface BookingState {
  checkIn: string        // ISO date string e.g. "2026-05-15"
  checkOut: string
  roomId: string
  planId: string
  nights: number
  guests: number
  guestName: string
  guestEmail: string
  reservationNo: string
}

interface RouterContextValue {
  page: PageKey
  booking: Partial<BookingState>
  navigate: (page: PageKey, state?: Partial<BookingState>) => void
  updateBooking: (updates: Partial<BookingState>) => void
}

const RouterContext = createContext<RouterContextValue | null>(null)

export function RouterProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<PageKey>('home')
  const [booking, setBooking] = useState<Partial<BookingState>>({})

  const navigate = useCallback((nextPage: PageKey, state?: Partial<BookingState>) => {
    if (state) {
      setBooking(prev => ({ ...prev, ...state }))
    }
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const updateBooking = useCallback((updates: Partial<BookingState>) => {
    setBooking(prev => ({ ...prev, ...updates }))
  }, [])

  return (
    <RouterContext.Provider value={{ page, booking, navigate, updateBooking }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter(): RouterContextValue {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useRouter must be used within RouterProvider')
  return ctx
}
