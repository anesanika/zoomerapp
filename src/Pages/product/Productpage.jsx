import "./Prodcutpage.css";
import Prodslider from "../../components/secondary/prodslider/Prodslider.jsx";
import Card from '../../components/secondary/card/Card.jsx';
import { SwiperSlide, Swiper } from "swiper/react";
import Moreabout from "../../components/secondary/moreabout/Moreabout.jsx";
import { useEffect, useState } from "react";

function Productpage () {
  const [showMore, setShowMore] = useState(false);
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () =>{
      setWidthSize(window.innerWidth);
    })
  }, [widthSize]);
  

  return (
    <section>
      <div className="content">
        <div className="main-prods-cont">
          <div className="left-prod-side">
            <div className="prdo-page-head">
              <div className="progres-bar">
                <a href="/">მთავარი {'>'} </a>
                <a href="/">მობილური ტელეფონი {'>'} </a>
                <a href="/product">Apple</a>
              </div>
              <div className="mian-prod-cont">
                <div className="product-slider">
                  <Prodslider prodTitle="Apple iPhone 15 | 128GB Black" />
                </div>
                <div className="about-prod">
                  <div>
                    <p>ეკრანის ზომა</p>
                    <h3>6.1 inches</h3>
                  </div>
                  <div>
                    <p>ეკრანის ტიპი</p>
                    <h3>Super Retina XDR OLED</h3>
                  </div>
                  <div>
                    <p>შიდა მეხსიერება</p>
                    <h3>127 GB</h3>
                  </div>
                  <div>
                    <p>მთავარი კამერა</p>
                    <h3>48 + 12 MP</h3>
                  </div>
                  <div className="prod-color">
                    <div><p>ფერი : <span>{'Black'}</span></p></div>
                    <div className="collors">
                      <a 
                      style={{backgroundColor: 'black'}}
                      href="#"></a>
                      <a 
                      style={{backgroundColor: '#dfeebe'}}
                      href="#"></a>
                      <a 
                      style={{backgroundColor: 'rgb(255, 244, 173)'}}
                      href="#"></a>
                      <a 
                      style={{backgroundColor: 'rgb(253, 236, 236)'}}
                      href="#"></a>
                      <a 
                      style={{backgroundColor: 'rgb(180, 221, 238)'}}
                      href="#"></a>
                    </div>
                  </div>
                  <div className="prod-model">
                    <div><p>მოდელი : <span style={{color: 'black'}}>{'Iphone 15'}</span></p></div>
                    <div className="prod-type">
                      <a href="#">iPhone</a>
                      <a href="#">iPhone Plus</a>
                    </div>
                  </div>
                  <div className="prod-storage">
                    <div><p>შიდა მეხსიერება : <span style={{color: 'black'}}>{'128'}</span></p></div>
                    <div className="prod-storages">
                      <a href="#">128</a>
                      <a href="#">256</a>
                      <a href="#">512</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prod-acses">
              <h4>აქსესუარები</h4>
              <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  breakpoints={{
                  300:{
                  slidesPerView: 2,
                  spaceBetween: 20
                  },
                  700: {
                  slidesPerView: 3,
                  spaceBetween: 10
                  },
                  1024: {
                  slidesPerView: 4,
                  spaceBetween: 10
                  }
                  }}
                >
                <SwiperSlide>
                  <Card 
                  title={"Baseus Backseat Vehicle Phone Holder Hook"}
                  price={29}
                  // oldPrice={4399}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0191504_baseus-backseat-vehicle-phone-holder-hook-suhz-a01-black_550.jpeg&w=256&q=50"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                  title={"Samsung Galaxy Fold 5 F946B/DS 5G 12/256GB "}
                  price={49}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1232cae3-c368-45fe-ad58-d02fd5848b39_Thumb.jpeg&w=256&q=50"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                  title={"Baseus Backseat Vehicle Phone Holder Hook"}
                  price={29}
                  // oldPrice={4399}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0191504_baseus-backseat-vehicle-phone-holder-hook-suhz-a01-black_550.jpeg&w=256&q=50"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                  title={"Samsung Galaxy Fold 5 F946B/DS 5G 12/256GB "}
                  price={49}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1232cae3-c368-45fe-ad58-d02fd5848b39_Thumb.jpeg&w=256&q=50"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                  title={"Baseus Backseat Vehicle Phone Holder Hook"}
                  price={29}
                  // oldPrice={4399}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0191504_baseus-backseat-vehicle-phone-holder-hook-suhz-a01-black_550.jpeg&w=256&q=50"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                  title={"Samsung Galaxy Fold 5 F946B/DS 5G 12/256GB "}
                  price={49}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1232cae3-c368-45fe-ad58-d02fd5848b39_Thumb.jpeg&w=256&q=50"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                  title={"Baseus Backseat Vehicle Phone Holder Hook"}
                  price={29}
                  // oldPrice={4399}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0191504_baseus-backseat-vehicle-phone-holder-hook-suhz-a01-black_550.jpeg&w=256&q=50"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                  title={"Samsung Galaxy Fold 5 F946B/DS 5G 12/256GB "}
                  price={49}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1232cae3-c368-45fe-ad58-d02fd5848b39_Thumb.jpeg&w=256&q=50"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                  title={"Baseus Backseat Vehicle Phone Holder Hook"}
                  price={29}
                  // oldPrice={4399}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0191504_baseus-backseat-vehicle-phone-holder-hook-suhz-a01-black_550.jpeg&w=256&q=50"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                  title={"Samsung Galaxy Fold 5 F946B/DS 5G 12/256GB "}
                  price={49}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1232cae3-c368-45fe-ad58-d02fd5848b39_Thumb.jpeg&w=256&q=50"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                  title={"Baseus Backseat Vehicle Phone Holder Hook"}
                  price={29}
                  // oldPrice={4399}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0191504_baseus-backseat-vehicle-phone-holder-hook-suhz-a01-black_550.jpeg&w=256&q=50"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                  title={"Samsung Galaxy Fold 5 F946B/DS 5G 12/256GB "}
                  price={49}
                  monthPrice={1}
                  image={"https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1232cae3-c368-45fe-ad58-d02fd5848b39_Thumb.jpeg&w=256&q=50"} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="more-about-prod" style={showMore ? {height: 'auto'} : {height: '350px'}}>
              <div className="abouts">
                <Moreabout mainText="ფერი" seconderyText="ფერი" answer="Black"/>
                <Moreabout mainText="ბრენდი" seconderyText="ბრენდი" answer="Apple"/>
                <Moreabout mainText="პორტი" seconderyText="USB პორტი" answer="DisplayPort, USB Type-C 2.0"/>
                <Moreabout mainText="ზომა/წონა" seconderyText="ეკრანის ზომა" answer="6.1 inches"/>
                <Moreabout mainText="დამატებითი ფუნქცია" seconderyText="NFC" answer="YES"/>
                <Moreabout mainText="ტექნიკური მახასიათებელი" seconderyText="Bluetooth" answer="5.3, LE, A2DP"/>
                <Moreabout mainText="წარმოება" seconderyText="გამოშვების თარიღი" answer="September, 2023"/>
                <Moreabout mainText="კომუნიკაცია" seconderyText="კავშირის სტანდარტი" answer="5G"/>
                <Moreabout mainText="გამოსახულება" seconderyText="ეკრანის ტიპი" answer="Super Retina XDR OLED"/>
              </div>
                <button onClick={() => setShowMore(!showMore)}>
                  <i style={{transform: showMore ? "rotate(180deg)" : "rotate(0)"}} className="fa-solid fa-chevron-down"/>
                  {showMore ? "აკეცვა" : "მეტის ნახვა"}
                  </button>
            </div>
          </div>
          {
            widthSize >= 1150 ?
          <div className="right-prod-side">
            <div className="prod-price-buy">
              <div className="price-monthprice">
                <h2>2342 ₾</h2>
                <p>თვეში : <span>65.3₾</span> -დან</p>
              </div>
              <div className="about-buying">
                <div>
                  <button>მარაგი ფილიალში</button>
                  <button>ფასის დაზღვევა</button>
                </div>
                <div>
                  <button>ფასის კონტროლი</button>
                  <button>ფასი დაჯამება</button>
                </div>
              </div>
              <div className="buy-addcard">
                <div>
                  <a href="#">ყიდვა</a>
                </div>
                <div>
                    <button>შედარება</button>
                    <button><i className="fa-solid fa-cart-shopping"></i> დამატება</button>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="res-prod-piece-buy">
            <div><h2>2349₾</h2></div>
            <div>
              <button><i className="fa-solid fa-repeat"></i></button>
              <button><i className="fa-solid fa-cart-shopping"></i></button>
              <button>ყიდვა</button>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  );
}

export default Productpage;