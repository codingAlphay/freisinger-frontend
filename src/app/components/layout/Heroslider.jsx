"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Container } from './utils/Container'
import { SliderTitle } from './utils/Text'
import { motion } from 'framer-motion'
import { Button } from './utils/Button'

const VideoPlayer = dynamic(
  () => import('./utils/Videoplayer').then((mod) => mod.default),
  { ssr: false, loading: () => <div className="w-full h-screen" /> }
)

// Array mit den Slide-Daten
const slides = [
  {
    id: 1,
    type: 'video',
    url: '/images/slides/video3.mp4',
    title: 'Experten im',
    title2: 'Metallbau'
  },
  {
    id: 2,
    type: 'image',
    url: '/images/slides/slide1.JPG',
    alt: 'Slider1',
    title: 'Individuelle',
    title2: 'Geländer'
  },
  {
    id: 3,
    type: 'image',
    url: '/images/slides/slide2.JPG',
    alt: 'Slider2',
    title: 'GLAS',
    title2: 'GELÄNDER'
  }
]

export default function HeroSlider() {
  return (
    <div className="relative h-screen bg-primary">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 7500,
          disableOnInteraction: true,
        }}
        speed={700}
        loop={true}
        // navigation
        pagination={{
          clickable: true,
          bulletClass: 'heroslider-bullet',
          bulletActiveClass: 'heroslider-bullet-active',
        }}
        scrollbar={{ draggable: true }}
        className="relative h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Container>
              <div className="absolute z-30 bottom-1/2">
                {/* Hier wird das SliderTitle in einen motion.div gewrappt */}
                <motion.div
                  initial={{ opacity: 0, y: 160 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.89, 0, 0.11, 1] }}
                  className="absolute z-40 overflow-hidden whitespace-nowrap"
                >
                  <SliderTitle className={"text-primary"}>
                    {slide.title} <br />
                    <span className='text-white'>{slide.title2}</span>
                  </SliderTitle>
                  <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.7, delay: 0.3, ease: [0.89, 0, 0.11, 1] }}
                  className=''
                >
                    <Button className={"ml-24 mt-6 group"}>Mehr erfahren</Button>
                  </motion.div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.7, ease: [0.89, 0, 0.11, 1] }}
                  className='absolute z-20 w-56 border-t-4 h-72 -top-8 border-white/80 left-16 bg-darkgray/60'
                />
              </div>
            </Container>
            <div className="absolute inset-0 z-10 w-full h-screen pointer-events-none bg-gradient-to-b from-zinc-900 to-transparent"></div>
            <div className="absolute inset-0 z-10 w-full h-screen pointer-events-none bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
            <div className="absolute inset-0 z-10 w-full h-screen pointer-events-none bg-zinc-750 opacity-40"></div>
            {slide.type === 'video' ? (
              <VideoPlayer url={slide.url} />
            ) : (
              <Image 
                src={slide.url}
                fill
                alt={slide.alt}
                className="object-cover w-full h-full"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}