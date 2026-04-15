import { SectionTitle, FadeIn, Button } from '@/shared'
import { ROOMS, RoomCard, type Room } from '@/entities/room'
import { useRouter } from '@/app/providers/router'
import styles from './RoomsSection.module.css'

export function RoomsSection() {
  const { navigate } = useRouter()

  const handleRoomSelect = (room: Room) => {
    navigate('booking', { roomId: room.id })
  }

  return (
    <section id="rooms" className={styles.section}>
      <div className={`container`}>
        <FadeIn>
          <SectionTitle eyebrow="Rooms & Villas" sub="全客室がオーシャンフロントもしくはガーデンビュー。それぞれに異なる世界観をご用意しています。">
            至高の客室
          </SectionTitle>
        </FadeIn>

        <div className={styles.grid}>
          {ROOMS.map((room, i) => (
            <FadeIn key={room.id} delay={i * 100}>
              <RoomCard room={room} onSelect={handleRoomSelect} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className={styles.cta}>
            <p className={styles.ctaText}>すべてのお部屋で特別な滞在体験をご提供します</p>
            <Button variant="outline" size="md" onClick={() => navigate('booking')}>
              お部屋を選んで予約する
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
