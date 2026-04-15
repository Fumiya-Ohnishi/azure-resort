import { RouterProvider, useRouter } from '@/app/providers/router'
import { HomePage } from '@/pages/home'
import { BookingPage } from '@/pages/booking'
import { CompletePage } from '@/pages/complete'
import styles from './App.module.css'

function AppContent() {
  const { page } = useRouter()

  return (
    <div className={styles.app}>
      {page === 'home'     && <HomePage />}
      {page === 'booking'  && <BookingPage />}
      {page === 'complete' && <CompletePage />}
    </div>
  )
}

export function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  )
}
