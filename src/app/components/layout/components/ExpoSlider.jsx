import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import EffectMaterial from './expolib/effect-material.esm.js'
import Image from 'next/image.js'

// Swiper-Basis-Styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Material-Effekt-Styles
import './expolib/effect-material.css'

const ExpoSlider = ({ images }) => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          '--swiper-navigation-sides-offset': '15px',
        }}
        modules={[EffectMaterial, Navigation, Thumbs, Autoplay]}
        effect="material"
        spaceBetween={10}
        autoplay={{ delay: 4000 }}
        thumbs={{ swiper: thumbsSwiper }}
        className="aspect-video"
        navigation
      >
        {images.map(({ url }) => (
          <SwiperSlide key={url}>
            <div className="swiper-material-wrapper">
              <div className="swiper-material-content">
                <Image
                  className="object-cover demo-material-image"
                  src={url}
                  alt=""
                  fill
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="h-20 mt-4"
      >
        {images.map(({ url }) => (
          <SwiperSlide key={url}>
            <Image
              className="object-cover"
              src={url}
              alt=""
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ExpoSlider