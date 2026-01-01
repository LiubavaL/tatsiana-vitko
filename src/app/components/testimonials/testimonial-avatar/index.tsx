import { Testimonial } from '@/payload-types'
import { Avatar, Text } from '@chakra-ui/react'
import styles from './TestimonialAvatar.module.css'
import AvatarFallback from '../../ui/avatar/AvatarFallback'

export default function TestimonialAvatar(props: { testimonial: Testimonial }) {
  return (
    <div className={styles.author}>
      <Avatar.Root className={styles.authorAvatar}>
        {props.testimonial?.authorAvatar?.url ? (
          <Avatar.Image src={props.testimonial?.authorAvatar?.url} />
        ) : (
          <AvatarFallback />
        )}
      </Avatar.Root>
      <span>
        <Text textStyle="xl">{props.testimonial['author name']}</Text>
        <Text className={styles.authorDescription}>{props.testimonial['authorDescription']}</Text>
      </span>
    </div>
  )
}
