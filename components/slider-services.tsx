"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <Link href={item.href}>
                        <div
                            className="relative flex items-end justify-center px-7 py-8 h-auto md:h-[350px] rounded-lg cursor-pointer bg-cover bg-center group transition-transform duration-300 transform hover:scale-105"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg"></div>
                            <h3 className="relative mb-4 text-lg text-white z-10">{item.title}</h3>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices;
