import "./Productc.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";



function Productc(props){
  const [disSize, setDisSize] = useState(window.innerWidth);
  
  
  useEffect(() =>{
    window.addEventListener('resize', () =>{
      setDisSize(window.innerWidth)
    })
  }, [disSize])


  return(
    <>
    <div className="prodcut-header">
      <h4>{props.title}</h4>
      <p className="mianc-countdown">{props.countdown}</p>
    </div>
    <div className="product-slider">
      <Swiper
      navigation={disSize > 1100 ?  true : false}
      modules={disSize > 1100 ? [Navigation] : null}
      slidesPerView={6}
      spaceBetween={10}
      breakpoints={{
        300:{
          slidesPerView: 2,
          spaceBetween: 20
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 10
        }
      }}
      >
        {props.children}
      </Swiper>
    </div>
    </>
  );
}

export default Productc;