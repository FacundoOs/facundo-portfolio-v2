import Image from 'next/image'
import styles from './Home.module.css'

export default function HomeHero() {
  return (
    <section className={styles.root} id="home">
      <div className={styles.shape_contain} aria-hidden />

      <div className={`${styles.strip2} ${styles.strip}`} aria-hidden />

      <div className={`${styles.tri} ${styles.tri2}`}>
        <Image src="/images/cloud_tri.png" alt="cloud triangle" fill style={{objectFit: 'cover'}} priority />
      </div>

      <div className={styles.circle} aria-hidden />

      <div className={`${styles.tri} ${styles.tri1}`}>
        <Image src="/images/profile_tri.png" alt="profile triangle" fill style={{objectFit: 'cover'}} priority />
      </div>

      <div className={`${styles.strip1} ${styles.strip}`} aria-hidden />

      <div className={`${styles.tri} ${styles.tri3}`}>
        <Image src="/images/tri3.png" alt="empty triangle" fill style={{objectFit: 'cover'}} priority />
      </div>

      <div className={`${styles.strip3} ${styles.strip}`} aria-hidden />

      <div className={styles.leftside}>WEB DESIGNER</div>
      <div className={styles.rightside}>FREELANCER</div>
      <div className={styles.topLeft}>Juan Facundo Osores</div>
      <div className={styles.headline}>Full Stack Developer</div>
    </section>
  )
}
