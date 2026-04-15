import { Header }             from '@/widgets/header'
import { HeroSection }         from '@/widgets/hero'
import { ResortAppealSection } from '@/widgets/resort-appeal'
import { RoomsSection }        from '@/widgets/rooms'
import { ActivitiesSection }   from '@/widgets/activities'
import { DiningSpaSection }    from '@/widgets/dining-spa'
import { PlansSection }        from '@/widgets/plans'
import { AvailabilitySection } from '@/widgets/availability'
import { AccessSection }       from '@/widgets/access'
import { CtaSection }          from '@/widgets/cta'
import { Footer }              from '@/widgets/footer'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <HeroSection />
        <ResortAppealSection />
        <RoomsSection />
        <ActivitiesSection />
        <DiningSpaSection />
        <PlansSection />
        <AvailabilitySection />
        <AccessSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
