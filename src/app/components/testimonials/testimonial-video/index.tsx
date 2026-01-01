import { Testimonial } from '@/payload-types'
import styles from './TestimonialVideo.module.css'

export default function TestimonialVideo(props: { testimonial: Testimonial }) {
  return (
    <div className={styles.authorVideo}>
      <iframe
        src={props.testimonial.testimony}
        allow="autoplay; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
        className={styles.authorVideoFrame}
      ></iframe>
    </div>
  )
}
