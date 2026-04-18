'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import { GalleryItem } from '@/types/galleryItem';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import css from './CamperGallery.module.css';

interface CamperGalleryProps {
  gallery: GalleryItem[];
  camperName: string;
}

export default function CamperGallery({ gallery, camperName }: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <div className={css.galleryWrapper}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.mainSwiper}
      >
        {gallery.map(img => (
          <SwiperSlide key={img.id} className={css.mainSlide}>
            <Image
              src={img.original}
              width={638}
              height={505}
              alt={`${camperName} - large photo`}
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.thumbsSwiper}
      >
        {gallery.map(img => (
          <SwiperSlide key={img.id} className={css.thumbSlide}>
            <div className={css.thumbImageWrapper}>
              <Image
                src={img.thumb}
                width={136}
                height={144}
                alt={`${camperName} - thumbnail`}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
