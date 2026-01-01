import React from 'react'
import TestimonialsCarousel from '@/blocks/testimonials-carousel/Server'
import './styles.css'
import Hero from '../components/ui/hero'

export default async function page() {
  return (
    <>
      <Hero />
      <TestimonialsCarousel />
    </>
  )
}
