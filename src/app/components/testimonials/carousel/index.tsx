'use client'

import { IconButton, Text } from '@chakra-ui/react'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { PaginatedDocs } from 'payload'
import React, { useState } from 'react'
import styles from './Carousel.module.css'
import Image from 'next/image'
import TestimonialItem from '@/app/components/testimonials/TestimonialItem'
import { Testimonial } from '@/payload-types'
import SectionHeading from '../../ui/section-heading'

export default function Testimonials(props: { testimonials: PaginatedDocs<Testimonial> }) {
  const [activeTestimony, setActiveTestimony] = useState(1)

  function setPrevTestimony() {
    const index = activeTestimony === 0 ? props.testimonials?.docs.length - 1 : activeTestimony - 1
    setActiveTestimony(index)
  }

  function setNextTestimony() {
    const index = activeTestimony === props.testimonials?.docs.length - 1 ? 0 : activeTestimony + 1
    setActiveTestimony(index)
  }

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialsDesc}>
        <Image
          decoding="async"
          loading="lazy"
          width="36"
          height="36"
          src="quote.svg"
          alt="quote-icon"
        />
        <Text fontWeight="light" className={styles.testimonialDescText}>
          Я невероятно горжусь своими клиентами. Каждое партнерство является свидетельством доверия
          и сотрудничества, которые мы выстраивали на протяжении времени.
        </Text>
      </div>
      <div className={styles.testimonialContent}>
        <SectionHeading>Что говорят мои клиенты</SectionHeading>

        {props.testimonials?.docs[activeTestimony] && (
          <motion.div
            key={activeTestimony}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className={styles.testimonialsItem}>
              <TestimonialItem testimonial={props.testimonials?.docs[activeTestimony]} />
            </div>
          </motion.div>
        )}

        <div className={styles.testimonialArrows}>
          <IconButton
            aria-label="Search database"
            variant="outline"
            size="2xl"
            rounded="full"
            onClick={setPrevTestimony}
          >
            <CgChevronLeft />
          </IconButton>
          <IconButton
            aria-label="Search database"
            variant="outline"
            size="2xl"
            rounded="full"
            onClick={setNextTestimony}
          >
            <CgChevronRight />
          </IconButton>
        </div>
      </div>
    </section>
  )
}
