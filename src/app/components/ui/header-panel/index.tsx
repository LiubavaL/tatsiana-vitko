import styles from './HeaderPanel.module.css'
import SectionHeading from '../section-heading'
import PageHeading from '../page-heading'
import PageDescription from '../page-description'

export default function HeaderPanel(props: {
  title: string
  heading?: string
  description?: string
}) {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <SectionHeading className={styles.title}>{props.title}</SectionHeading>
        {props.heading && <PageHeading title={props.heading} />}
        {props.description && <PageDescription description={props.description} />}
      </div>
    </section>
  )
}
