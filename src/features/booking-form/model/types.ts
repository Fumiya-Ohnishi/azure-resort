export interface BookingFormValues {
  checkIn: string
  checkOut: string
  roomId: string
  planId: string
  nights: number
  guests: number
  guestName: string
  guestEmail: string
}

export type BookingFormErrors = Partial<Record<keyof BookingFormValues, string>>
