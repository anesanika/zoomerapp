import "./Header.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Category from "../../secondary/category/Category.jsx";
import Lists from "../../secondary/lists/Lists.jsx";
import { useEffect, useState } from "react";



function Header(){
  const [catHover, setCatHover] = useState(0);
  const [widnowWidth, setWidnowWidth] = useState(window.innerWidth);

  useEffect(() =>{
    window.addEventListener('resize',  () =>{
      setWidnowWidth(window.innerWidth);
    })
  }, [widnowWidth])

  return(
    <header>
      {widnowWidth <= 1100
      ? 
      <div className="res-swiper">
        <Swiper
              className="mySwiper"
              spaceBetween={10}
              slidesPerView={3}
              breakpoints={{
                280: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                380: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
              }}
              >
              <SwiperSlide><img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F6b0a3199-89ab-49a8-a870-6a95a8495016_Thumb.png&w=3840&q=60" alt="swipe" /></SwiperSlide>
              <SwiperSlide><img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5fa86f4b-8f11-43f2-bc69-5f8bb109af34_Thumb.png&w=1920&q=60" alt="swipe" /></SwiperSlide>
              <SwiperSlide><img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F200657ab-e908-44ef-9885-5f61538e6d77_Thumb.png&w=1920&q=60" alt="swipe" /></SwiperSlide>
              <SwiperSlide><img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F80bfcfa9-91a7-4da9-905d-83b74250e530_Thumb.png&w=1920&q=60" alt="swipe" /></SwiperSlide>
              <SwiperSlide><img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5557ec49-4355-4839-8a07-4c6bfbb3c802_Thumb.png&w=3840&q=60" alt="swipe" /></SwiperSlide>
            </Swiper>
      </div>
      :

      <div className="content">
        
        <div className="headerCont">
          
          <div className="header-cat">

            <div 
            onMouseMove={() => setCatHover(1)} 
            onMouseLeave={() => setCatHover(0)}
            className="cats">
              {catHover === 1 ? 
              (
                <div className="categorys-cont">
                    
                  <Category image="https://s3.zoommer.ge/site/c7356f77-cec6-4e3d-be99-bb4c7dc1332147ad768b-b8f3-4f50-a38a-c51228515b19.png">
                    <Lists title="მობილურის ბრენდები">
                      <li><a href="/">Apple</a></li>
                      <li><a href="/">Samsung</a></li>
                      <li><a href="/">Xiaomi</a></li>
                      <li><a href="/">Poco</a></li>
                      <li><a href="/">Vivo</a></li>
                      <li><a href="/">Google</a></li>
                      <li><a href="/">Nothing</a></li>
                      <li><a href="/">OnePlus</a></li>
                      <li><a href="/">Realme</a></li>
                      <li><a href="/">Nokia</a></li>
                      <li><a href="/">Honor</a></li>
                      <li><a href="/">Asus</a></li>
                      <li><a href="/">ყველას ნახვა</a></li>
                    </Lists>
                    <Lists title="ყურსასმენები Buds">
                      <li><a href="/">Apple Airpods</a></li>
                      <li><a href="/">Galaxy Buds</a></li>
                      <li><a href="/">Xiaomi Buds</a></li>
                      <li><a href="/">Sony Buds</a></li>
                      <li><a href="/">Nothing Buds</a></li>
                      <li><a href="/">Realme Buds</a></li>
                      <li><a href="/">JBL Buds</a></li>
                      <li><a href="/">OnePlus Buds</a></li>
                      <li><a href="/">Marshall Buds</a></li>
                      <li><a href="/">Blackshark Buds</a></li>
                      <li><a href="/">Buds-ის აქსესუარები</a></li>
                      <li><a href="/">ყველას ნახვა</a></li>
                    </Lists>
                    <Lists title="სმარტ საათები">
                      <li><a href="/">Apple Watch</a></li>
                      <li><a href="/">Galaxy Watch</a></li>
                      <li><a href="/">Xiaomi Watch</a></li>
                      <li><a href="/">Google Watch</a></li>
                      <li><a href="/">Amazfit Watch</a></li>
                      <li><a href="/">საათის აქსესუარები</a></li>
                      <li><a href="/">ყველას ნახვა</a></li>
                    </Lists>
                    <Lists title="მობილურის ბრენდები">
                      <li><a href="/">ეკრანის დამცავები</a></li>
                      <li><a href="/">მობილურის ქეისები</a></li>
                      <li><a href="/">დამტენი ადაპტერები</a></li>
                      <li><a href="/">უსადენო დამტენები</a></li>
                      <li><a href="/">გარე დამტენი | Power bank</a></li>
                      <li><a href="/">მობილურის სტაბილიზატორები</a></li>
                      <li><a href="/">მანქანის დამტენები</a></li>
                      <li><a href="/">ყურსასმენები</a></li>
                      <li><a href="/">კონექტორები</a></li>
                      <li><a href="/">კაბელები</a></li>
                      <li><a href="/">მანქანის სამაგრები</a></li>
                      <li><a href="/">სათამაშო ტრიგერები</a></li>
                      <li><a href="/">მეხსიერების ბარათი</a></li>
                      <li><a href="/">GPS ტრეკერები</a></li>
                      <li><a href="/">კამერის დამცავები</a></li>
                      <li><a href="/">ყურის ბლუთუსები</a></li>
                      <li><a href="/">სელფის ჯოხები</a></li>
                      <li><a href="/">მობილურის ბეჭდები</a></li>
                      <li><a href="/">OTG ფლეშ მეხსიერებები</a></li>
                      <li><a href="/">ყველას ნახვა</a></li>
                    </Lists>
                  </Category>
                </div>
              )
                :
                null
              }
              <i className="fa-solid fa-mobile-screen"></i><a href="/">მობილურები</a></div>
            <div 
            onMouseMove={() => setCatHover(2)} 
            onMouseLeave={() => setCatHover(0)} 
            className="cats">
              {catHover === 2 ? 
              (
                <div className="categorys-cont">
                  <Category image="https://s3.zoommer.ge/site/862f6b39-7b33-4d35-b88e-733bd98ddcd327038e60-0059-41db-b9a5-92bc344b83e9.png">
                    <Lists title="ტაბები">
                      <li><a href="/">Apple</a></li>
                      <li><a href="/">Samsung</a></li>
                      <li><a href="/">Microsoft</a></li>
                      <li><a href="/">Xiaomi</a></li>
                      <li><a href="/">Lenovo</a></li>
                      <li><a href="/">Amazon</a></li>
                      <li><a href="/">Realme</a></li>
                      <li><a href="/">ყველას ნახვა</a></li>
                    </Lists>
                    <div>
                      <Lists title="სმარტ კლავიატურა | კალამი">
                        <li><a href="/">Apple კლავიატურა</a></li>
                        <li><a href="/">Apple კალამი</a></li>
                        <li><a href="/">Microsoft კლავიატურა</a></li>
                        <li><a href="/">Microsoft კალამი</a></li>
                        <li><a href="/">Baseus კლავიატურა</a></li>
                        <li><a href="/">Baseus კალამი</a></li>
                        <li><a href="/">ყველას ნახვა</a></li>
                      </Lists>
                      <Lists title="გრაფიკული ტაბები">
                        <li><a href="/">XP-Pen</a></li>
                        <li><a href="/">Veikk</a></li>
                        <li><a href="/">Huion</a></li>
                        <li><a href="/">Xiaomi</a></li>
                        <li><a href="/">ყველას ნახვა</a></li>
                      </Lists>
                    </div>
                    <div>
                      <Lists title="E-Book">
                        <li><a href="/">Kindle</a></li>
                        <li><a href="/">ყველას ნახვ</a></li>
                      </Lists>
                      <Lists title="ტაბის აქსესუარები">
                        <li><a href="/">ტაბის ქეისები</a></li>
                        <li><a href="/">ეკრანის დამცავი</a></li>
                        <li><a href="/">USB კაბელი</a></li>
                        <li><a href="/">დამტენი ადაპტერი</a></li>
                        <li><a href="/">კონექტორები</a></li>
                        <li><a href="/">OTG ფლეშ მეხსიერება</a></li>
                        <li><a href="/">მეხსიერების ბარათი</a></li>
                        <li><a href="/">გარე დამტენი | Power Bank</a></li>
                        <li><a href="/">ყველას ნახვა</a></li>
                      </Lists>
                    </div>
                    <div>
                      <Lists title="ყურსასმენები">
                        <li><a href="/">Headphones</a></li>
                        <li><a href="/">Buds</a></li>
                        <li><a href="/">Earphones</a></li>
                        <li><a href="/">ყველას ნახვა</a></li>
                      </Lists>
                      <Lists title="კაბელები">
                        <li><a href="/">Lightning</a></li>
                        <li><a href="/">Micro USB</a></li>
                        <li><a href="/">Type-C</a></li>
                        <li><a href="/">Aux</a></li>
                        <li><a href="/">ყველას ნახვა</a></li>
                      </Lists>
                      </div>
                    </Category>
                </div>
              )
                :
                null
              }
              <i className="fa-solid fa-tablet-screen-button"></i><a href="/">ტაბები</a></div>
            <div 
            onMouseMove={() => setCatHover(3)} 
            onMouseLeave={() => setCatHover(0)}
            className="cats">
              {catHover === 3 ?
              (
                <div className="categorys-cont">
                  <Category image="https://s3.zoommer.ge/site/545a728a-6301-4f2b-8808-74fde50b4ee58c4436a0-6671-4b43-93b2-bb8bc9dd13df.png">
                      <div>
                        <Lists title="ბრენდები">
                          <li><a href="/">Apple</a></li>
                          <li><a href="/">Microsoft</a></li>
                          <li><a href="/">HP</a></li>
                          <li><a href="/">Asus</a></li>
                          <li><a href="/">Acer</a></li>
                          <li><a href="/">Lenovo</a></li>
                          <li><a href="/">Dell</a></li>
                          <li><a href="/">MSI</a></li>
                          <li><a href="/">Samsung</a></li>
                          <li><a href="/">ყველას ნახვა</a></li>
                        </Lists>
                        <Lists title="ტიპი">
                          <li><a href="/">Classic</a></li>
                          <li><a href="/">Business</a></li>
                          <li><a href="/">Gaming</a></li>
                          <li><a href="/">ყველას ნახვა</a></li>
                        </Lists>
                      </div>
                      <div>
                        <Lists title="მეხსიერების მატარებლები">
                          <li><a href="/">პორტატული SSD</a></li>
                          <li><a href="/">პორტატული HDD</a></li>
                          <li><a href="/">შიდა SSD</a></li>
                          <li><a href="/">ფლეშ მეხსიერებები</a></li>
                          <li><a href="/">მეხსიერების ბარათები</a></li>
                          <li><a href="/">ყველას ნახვა</a></li>
                        </Lists>
                        <Lists title="აქსესუარები">
                          <li><a href="/">ლეპტოპის ჩანთები</a></li>
                          <li><a href="/">მაუსები</a></li>
                          <li><a href="/">მაუსპადები</a></li>
                          <li><a href="/">მონიტორის საწმენდები</a></li>
                          <li><a href="/">კლავიატურები</a></li>
                          <li><a href="/">დინამიკები</a></li>
                          <li><a href="/">ლეპტოპის დამტენი</a></li>
                          <li><a href="/">გამაგრილებელი სტენდები</a></li>
                          <li><a href="/">სტრიმინგ მიკროფონები</a></li>
                          <li><a href="/">Web კამერები</a></li>
                          <li><a href="/">ლეპტოპის ჩასადები</a></li>
                          <li><a href="/">კლავიატურის დამცავები</a></li>
                          <li><a href="/">ყველას ნახვა</a></li>
                        </Lists>
                      </div>
                      <div>
                        <Lists title="საოფისე მოწყობილობა">
                          <li><a href="/">პრინტერები</a></li>
                          <li><a href="/">პრინტერის აქსესუარები</a></li>
                          <li><a href="/">Wi-Fi როუტერები</a></li>
                          <li><a href="/">LTE როუტერები</a></li>
                          <li><a href="/">HUB გადამყვანები</a></li>
                          <li><a href="/">UPS კვების წყაროები</a></li>
                          <li><a href="/">ყველას ნახვა</a></li>
                        </Lists>
                        
                        <Lists title="პროექტორები">
                          <li><a href="/">საოფისე პროექტორები</a></li>
                          <li><a href="/">მულტიმედია პროექტორები</a></li>
                          <li><a href="/">პროექტორის დაფები</a></li>
                          <li><a href="/">პრეზენტერები</a></li>
                          <li><a href="/">პროექტორის შტატივები</a></li>
                          <li><a href="/">ყველას ნახვა</a></li>
                        </Lists>

                        <Lists title="ყურსასმენები">
                          <li><a href="/">Headphones</a></li>
                          <li><a href="/">Buds</a></li>
                          <li><a href="/">Earphones</a></li>
                          <li><a href="/">ყველას ნახვა</a></li>
                        </Lists>
                      </div>
                      <div>
                        <Lists title="კაბელები">
                          <li><a href="/">Lightning</a></li>
                          <li><a href="/">Micro USB</a></li>
                          <li><a href="/">Type-C</a></li>
                          <li><a href="/">HDMI კაბელები</a></li>
                          <li><a href="/">LAN კაბელები</a></li>
                          <li><a href="/">ყველას ნახვა</a></li>
                        </Lists>
                      </div>
                  </Category>
                </div>
              )
              :
              null
              }
              <i className="fa-solid fa-laptop"></i><a href="/">ლეპტოპები | IT</a></div>
            <div 
            onMouseMove={() => setCatHover(4)} 
            onMouseLeave={() => setCatHover(0)}
            className="cats"><i className="fa-solid fa-volume-low"></i><a href="/">აუდიო სისტემა</a></div>
            <div 
            onMouseMove={() => setCatHover(5)} 
            onMouseLeave={() => setCatHover(0)} 
            className="cats"><i className="fa-solid fa-gamepad"></i><a href="/">Gaming</a></div>
            <div 
            onMouseMove={() => setCatHover(6)} 
            onMouseLeave={() => setCatHover(0)} 
            className="cats"><i className="fa-solid fa-tv"></i><a href="/">TV | მონიტორები</a></div>
            <div 
            onMouseMove={() => setCatHover(7)} 
            onMouseLeave={() => setCatHover(0)} 
            className="cats"><i className="fa-solid fa-camera"></i><a href="/">ფოტო | ვიდეო</a></div>
            <div 
            onMouseMove={() => setCatHover(8)} 
            onMouseLeave={() => setCatHover(0)} 
            className="cats"><i className="fa-solid fa-house-signal"></i><a href="/">სმარტ გაჯეტები</a></div>
          </div>

          <div className="header-slider">
            <Swiper
              className="mySwiper"
              navigation={true}
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              >
              <SwiperSlide><img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F6b0a3199-89ab-49a8-a870-6a95a8495016_Thumb.png&w=3840&q=60" alt="swipe" /></SwiperSlide>
              <SwiperSlide><img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5fa86f4b-8f11-43f2-bc69-5f8bb109af34_Thumb.png&w=1920&q=60" alt="swipe" /></SwiperSlide>
              <SwiperSlide><img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F200657ab-e908-44ef-9885-5f61538e6d77_Thumb.png&w=1920&q=60" alt="swipe" /></SwiperSlide>
              <SwiperSlide><img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F80bfcfa9-91a7-4da9-905d-83b74250e530_Thumb.png&w=1920&q=60" alt="swipe" /></SwiperSlide>
              <SwiperSlide><img src="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5557ec49-4355-4839-8a07-4c6bfbb3c802_Thumb.png&w=3840&q=60" alt="swipe" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      }
    </header>

  )
};

export default Header;













