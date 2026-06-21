"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

interface GallerySliderProps {
  title: string;
  images: string[];
}

export default function GallerySlider({
  title,
  images,
}: GallerySliderProps) {
  return (
    <section className="mb-12 min-w-0">
      <h4 className="text-lg md:text-xl font-bold mb-4">
        {title}
      </h4>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        grabCursor
        pagination={{
          clickable: true,
        }}
        className="portfolio-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                relative
                w-full
                h-[260px]
                sm:h-[320px]
                md:h-[420px]
                lg:h-[300px]
                overflow-hidden
                rounded-3xl
              "
            >
              <Image
                src={image}
                alt={`${title}-${index}`}
                fill
                sizes="100vw"
                className="object-contain p-2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}