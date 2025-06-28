"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import emotions from "@/app/data/emotions.json";
import Link from "next/link";

function MyFeelingOverview() {
  const emotionOverview = emotions.slice(0, 6);

  return (
    <div className="flex flex-col justify-center items-center mt-5 w-full">
      <h3 className="text-[#FF9898] text-xl font-bold mb-4">احساسى</h3>

      <Swiper
        spaceBetween={10}
        slidesPerView={1.1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2.1 },
          768: { slidesPerView: 3.1 },
        }}
        dir="rtl"
        className="w-full max-w-[850px]"
      >
        {emotionOverview.map((emotion) => (
          <SwiperSlide key={emotion.name}>
            <Link href={`myfeelings/${emotion.route}`}>
              <div className="holographic-card">
                <h2>{emotion.value}</h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MyFeelingOverview;
