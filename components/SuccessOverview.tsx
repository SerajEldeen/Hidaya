"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import habbits from "@/app/data/habbits.json";
import Link from "next/link";

function SuccessOverview() {
  const habbitOverview = habbits.slice(0, 4);

  return (
    <div className="mt-10 mb-3 flex flex-col justify-center items-center w-full">
      <h3 className="text-[#FF9898] text-xl font-bold mb-4">
        نجاحات من نور الإسلام
      </h3>

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
        {habbitOverview.map((habbit) => (
          <SwiperSlide key={habbit.name}>
            <Link href={`success-in-islam/${habbit.route}`}>
              <div className="flex flex-col items-center cursor-pointer">
                <div
                  className="relative w-52 h-52 overflow-hidden rounded-full
                  transition-transform duration-500 ease-in-out hover:scale-110 bg-transparent hover:bg-orange-50"
                >
                  <Image
                    src={habbit.photoSrc}
                    fill
                    alt={habbit.name}
                    className="object-cover absolute inset-0 w-full h-full rounded-full"
                  />
                </div>
                <h2 className="font-bold mt-4 text-center">{habbit.value}</h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SuccessOverview;
