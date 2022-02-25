import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import style from "../../../styles/common/they_trust_us_slider.module.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { theyTrustUsData } from './../../../data/theyTrusUsData';



function TheyTrustUsSlider() {
  const [activeIndex, setActiveIndex] = useState("slide-0");

  return (
    <section className={`${style.section} ${activeIndex} common_slider`}>
      <article className={style.article}>
        <div className={style.header}>
          <h2>They trust us</h2>
          <p className="pe-3">
          Way has saved 26,506+ clients time and cash with picture altering
            administrations
          </p>
        </div>
        <div className={`${style.mobile_image_box} ${activeIndex}`}></div>
        <div className={style.slider_container}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            onSlideChange={(swiper) => {
              console.log("slide change", swiper.realIndex);
              setActiveIndex(`slide-${swiper.realIndex}`);
            }}
          >
            {theyTrustUsData.map((data, index) => (
              <SwiperSlide key={index} className={style.slide}>
                <p className={style.slider_text}>{data.text}</p>
                <div className={style.author}>
                  <h4>{data.name}</h4>
                  <p>{data.location}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
    </section>
  );
}

export default TheyTrustUsSlider;
