import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import styles from './StoryCarousel.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface StoryCarouselProps {
  images: string[];
}

const StoryCarousel: React.FC<StoryCarouselProps> = ({ images }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleContainerClick = () => {
    if (swiperRef.current) {
      if (swiperRef.current.isEnd) {
        // Option: Loop back to start or stay at end. Standard behavior is stay or close.
        // Let's stay or loop if preferred. Swiper autoplay is active too.
        swiperRef.current.slideNext();
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      pagination={{ 
        type: 'progressbar', 
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className={styles.imageCarousel}
      spaceBetween={0}
      slidesPerView={1}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onClick={handleContainerClick}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className={styles.imageWrapper}>
            <img src={image} alt={`story slide ${index + 1}`} className={styles.storyImage} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StoryCarousel;
