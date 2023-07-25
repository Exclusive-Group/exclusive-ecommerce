"use client"
import banner from "../../../public/banner.png"
import banner2 from "../../../public/banner2.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div className="pt-11 pl-10 w-full overflow-clip">
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="w-full h-full"
            >
                <SwiperSlide ><Image className="w-full h-full block" src={banner} alt="" /></SwiperSlide>
                <SwiperSlide><Image className="w-full h-full block" src={banner2} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Slider