import { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../../assets/logo.png";
import Rescard from "../../secondary/rescards/Rescard";


function Navbar(){

  const [scrolVal, setScrollVal] = useState(0);
  const [widnowWidth, setWidnowWidth] = useState(window.innerWidth);
  const [isMenu, setIsMenu] = useState(false);
  const [catNumb, setCatNumb] = useState(1);
  
  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      setScrollVal(window.scrollY);
    })
  }, [])
  
  useEffect(() =>{
    
    window.addEventListener('resize', () =>{
      setWidnowWidth(window.innerWidth);
    })
  }, [widnowWidth])
  
  
  
  return (
    <nav>
    {widnowWidth < 1100

    ? 
    <>
      <div className="res-nav-bar">
        <div className="logo-sliderBtn">
          <div className="menu">
            <button onClick={() => setIsMenu(!isMenu)}><i className="fa-solid fa-bars"></i></button>
          </div>
          <div className="logo">
            <img src={Logo} alt="a" />
            <a href="/"></a>
          </div>
        </div>
        <div className="search-cart">
          <div className="res-search">
            <a href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
          </div>
          <div className="res-cart">
            <a href="/"><i className="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
      </div>
      <div className="res-categorys-cont" style={{left: isMenu ? '0' : '-100%'}}>
        <div className="res-categorys">
          <button
          onClick={() => setCatNumb(1)} 
          style={{borderLeft: catNumb === 1 ? '3px solid #ec5e2a' : 'none'}}><i className="fa-solid fa-mobile-screen"></i>მობილურები
          
          </button>
          <button
          onClick={() => setCatNumb(2)} 
          style={{borderLeft: catNumb === 2 ? '3px solid #ec5e2a' : 'none'}}><i className="fa-solid fa-tablet-screen-button"></i>ტაბები
          
          </button>
          <button
          onClick={() => setCatNumb(3)} 
          style={{borderLeft: catNumb === 3 ? '3px solid #ec5e2a' : 'none'}}><i className="fa-solid fa-laptop"></i>ლეპტოპები | IT
          
          </button>
          <button
          onClick={() => setCatNumb(4)} 
          style={{borderLeft: catNumb === 4 ? '3px solid #ec5e2a' : 'none'}}><i className="fa-solid fa-volume-low"></i>აუდიო სისტემა
          
          </button>
          <button
          onClick={() => setCatNumb(5)} 
          style={{borderLeft: catNumb === 5 ? '3px solid #ec5e2a' : 'none'}}><i className="fa-solid fa-gamepad"></i>Gaming
          
          </button>
          <button
          onClick={() => setCatNumb(6)} 
          style={{borderLeft: catNumb === 6 ? '3px solid #ec5e2a' : 'none'}}><i className="fa-solid fa-tv"></i>TV | მონიტორები
          
          </button>
          <button
          onClick={() => setCatNumb(7)} 
          style={{borderLeft: catNumb === 7 ? '3px solid #ec5e2a' : 'none'}}><i className="fa-solid fa-camera"></i>ფოტო ვიდეო
          
          </button>
          <button
          onClick={() => setCatNumb(8)} 
          style={{borderLeft: catNumb === 8 ? '3px solid #ec5e2a' : 'none'}}><i className="fa-solid fa-house-signal"></i>სმარტ გაჯეტები
          
          </button>
        </div>
        <div className="res-cat-opt">
          {catNumb === 1 ?
          <>
            <div>
              <Rescard title="apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ea268ca-9b31-4450-b506-dd8917e219dbbb1eb393-6c7c-448e-a8bd-a25ecc8e2d2c.png&w=256&q=80" />
              <Rescard title="Samsung" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F9607c082-64ff-4752-ae66-b2750ace58b03d1e584f-efdf-4271-a9be-8b9d25cb5694.png&w=640&q=80" />
              <Rescard title="Xiaomi" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1bb9429b-be03-4861-9454-a50c875b1e9b3a59f9cf-bc71-48b4-a552-9cf0787a039c.png&w=640&q=80" />
              <Rescard title="Poco" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F702558d8-f220-4654-9e45-0f9d2545b7cfaf961227-b37d-4b08-a71a-34790d946c8c.png&w=640&q=80" />
              <Rescard title="Vivo" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F870047e9-a961-4dc7-8097-bb2f509de2fdf8aebcaf-6a6d-453c-90fc-cf5f36663d41.png&w=640&q=80" />
              <Rescard title="Google" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F2d2adaf9-ed0b-4c00-bf64-c3681a31ec36dc99d829-5922-494b-952d-b9ff4caebf66.png&w=640&q=80" />
              <Rescard title="Nothing" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F44537d1d-8619-4193-a3a1-7e1ef116138bc2b75aef-4a52-45fa-bb34-dc6eba7463d1.png&w=640&q=80" />
              <Rescard title="OnePlus" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F35c36785-3c55-499b-829c-69d3658ab5bad0e33879-e6e2-4b6c-abae-88c37d4bd29d.png&w=640&q=80" />
              <Rescard title="Realme" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ea268ca-9b31-4450-b506-dd8917e219dbbb1eb393-6c7c-448e-a8bd-a25ecc8e2d2c.png&w=256&q=80" />
              <Rescard title="Nokia" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ea268ca-9b31-4450-b506-dd8917e219dbbb1eb393-6c7c-448e-a8bd-a25ecc8e2d2c.png&w=256&q=80" />
              <Rescard title="Honor" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ea268ca-9b31-4450-b506-dd8917e219dbbb1eb393-6c7c-448e-a8bd-a25ecc8e2d2c.png&w=256&q=80" />
              <Rescard title="Asus" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ea268ca-9b31-4450-b506-dd8917e219dbbb1eb393-6c7c-448e-a8bd-a25ecc8e2d2c.png&w=256&q=80" />
            </div>
            <div>
              <Rescard title="apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ea268ca-9b31-4450-b506-dd8917e219dbbb1eb393-6c7c-448e-a8bd-a25ecc8e2d2c.png&w=256&q=80" />
              <Rescard title="Samsung" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F9607c082-64ff-4752-ae66-b2750ace58b03d1e584f-efdf-4271-a9be-8b9d25cb5694.png&w=640&q=80" />
              <Rescard title="Xiaomi" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1bb9429b-be03-4861-9454-a50c875b1e9b3a59f9cf-bc71-48b4-a552-9cf0787a039c.png&w=640&q=80" />
              <Rescard title="Poco" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F702558d8-f220-4654-9e45-0f9d2545b7cfaf961227-b37d-4b08-a71a-34790d946c8c.png&w=640&q=80" />
              <Rescard title="Vivo" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F870047e9-a961-4dc7-8097-bb2f509de2fdf8aebcaf-6a6d-453c-90fc-cf5f36663d41.png&w=640&q=80" />
              <Rescard title="Google" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F2d2adaf9-ed0b-4c00-bf64-c3681a31ec36dc99d829-5922-494b-952d-b9ff4caebf66.png&w=640&q=80" />
              <Rescard title="Nothing" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F44537d1d-8619-4193-a3a1-7e1ef116138bc2b75aef-4a52-45fa-bb34-dc6eba7463d1.png&w=640&q=80" />
              <Rescard title="OnePlus" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F35c36785-3c55-499b-829c-69d3658ab5bad0e33879-e6e2-4b6c-abae-88c37d4bd29d.png&w=640&q=80" />
              <Rescard title="Realme" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ea268ca-9b31-4450-b506-dd8917e219dbbb1eb393-6c7c-448e-a8bd-a25ecc8e2d2c.png&w=256&q=80" />
              <Rescard title="Nokia" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ea268ca-9b31-4450-b506-dd8917e219dbbb1eb393-6c7c-448e-a8bd-a25ecc8e2d2c.png&w=256&q=80" />
              <Rescard title="Honor" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ea268ca-9b31-4450-b506-dd8917e219dbbb1eb393-6c7c-448e-a8bd-a25ecc8e2d2c.png&w=256&q=80" />
              <Rescard title="Asus" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ea268ca-9b31-4450-b506-dd8917e219dbbb1eb393-6c7c-448e-a8bd-a25ecc8e2d2c.png&w=256&q=80" />
            </div>
          </>
          :
          catNumb === 2 ?
          <div>
          <Rescard title="Apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5505beef-a6a3-4e33-b7dd-cff27b6d7eb76600d2db-13cd-4d38-9195-766f1d3a4901.png&w=384&q=80" />
          <Rescard title="Samsung" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Faa4b726e-98a7-4770-abfe-6e469e172d5420ceca04-3a58-4009-9501-dc72807d7e7c.png&w=384&q=80" />
          <Rescard title="Apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5505beef-a6a3-4e33-b7dd-cff27b6d7eb76600d2db-13cd-4d38-9195-766f1d3a4901.png&w=384&q=80" />
          <Rescard title="Samsung" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Faa4b726e-98a7-4770-abfe-6e469e172d5420ceca04-3a58-4009-9501-dc72807d7e7c.png&w=384&q=80" />
          <Rescard title="Apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5505beef-a6a3-4e33-b7dd-cff27b6d7eb76600d2db-13cd-4d38-9195-766f1d3a4901.png&w=384&q=80" />
          <Rescard title="Samsung" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Faa4b726e-98a7-4770-abfe-6e469e172d5420ceca04-3a58-4009-9501-dc72807d7e7c.png&w=384&q=80" />
          <Rescard title="Apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5505beef-a6a3-4e33-b7dd-cff27b6d7eb76600d2db-13cd-4d38-9195-766f1d3a4901.png&w=384&q=80" />
          <Rescard title="Samsung" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Faa4b726e-98a7-4770-abfe-6e469e172d5420ceca04-3a58-4009-9501-dc72807d7e7c.png&w=384&q=80" />
          <Rescard title="Apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5505beef-a6a3-4e33-b7dd-cff27b6d7eb76600d2db-13cd-4d38-9195-766f1d3a4901.png&w=384&q=80" />
          <Rescard title="Samsung" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Faa4b726e-98a7-4770-abfe-6e469e172d5420ceca04-3a58-4009-9501-dc72807d7e7c.png&w=384&q=80" />
          </div>
          :
          catNumb === 3 ?
          <div>
            <Rescard title="Apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ff9c42fe8-84b8-436e-b61c-6393fa79f560430fee22-88cb-4f4b-aa04-ed80d1b96db8.png&w=384&q=80" />
            <Rescard title="HP" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3e0e2a4c-c372-4620-a1ea-b00607536812a6d568fd-b7ab-4977-9b98-bc32d3ab440f.png&w=384&q=80" />
            <Rescard title="Apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ff9c42fe8-84b8-436e-b61c-6393fa79f560430fee22-88cb-4f4b-aa04-ed80d1b96db8.png&w=384&q=80" />
            <Rescard title="HP" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3e0e2a4c-c372-4620-a1ea-b00607536812a6d568fd-b7ab-4977-9b98-bc32d3ab440f.png&w=384&q=80" />
            <Rescard title="Apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ff9c42fe8-84b8-436e-b61c-6393fa79f560430fee22-88cb-4f4b-aa04-ed80d1b96db8.png&w=384&q=80" />
            <Rescard title="HP" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3e0e2a4c-c372-4620-a1ea-b00607536812a6d568fd-b7ab-4977-9b98-bc32d3ab440f.png&w=384&q=80" />
            <Rescard title="Apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ff9c42fe8-84b8-436e-b61c-6393fa79f560430fee22-88cb-4f4b-aa04-ed80d1b96db8.png&w=384&q=80" />
            <Rescard title="HP" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3e0e2a4c-c372-4620-a1ea-b00607536812a6d568fd-b7ab-4977-9b98-bc32d3ab440f.png&w=384&q=80" />
            <Rescard title="Apple" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ff9c42fe8-84b8-436e-b61c-6393fa79f560430fee22-88cb-4f4b-aa04-ed80d1b96db8.png&w=384&q=80" />
            <Rescard title="HP" image="https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3e0e2a4c-c372-4620-a1ea-b00607536812a6d568fd-b7ab-4977-9b98-bc32d3ab440f.png&w=384&q=80" />
          </div>
            :
            null  
          }
        </div>
      </div>

    </>
    
    :

    <div>
      <div className="navHerder">
        <div className="content">
          <div className="nav-about">
            <p>*7007 / +995 (32) 2 60 30 60</p>
            <ul>
              <li><a href="/">სავაჭრო პოლიტიკა</a></li>
              <li><a href="/">განვადება</a></li>
              <li><a href="/">კარიერა</a></li>
              <li><a href="/">Trade In</a></li>
              <li><a href="/">ფილიალები</a></li>
              <li><a href="/">ყველა აქცია</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={scrolVal >= 100 ? "navbar scrolled" : "navbar"}>
        <div className="content">
          <div className="nav-cont">
            <div className="logoCont">
              <img src={Logo} alt="" />
              <a href="/"></a>
            </div>
            <div className="nav-right">
              <div className="navigation">
                <a href=""><i className="fa-solid fa-bars"></i> ნავიგაცია</a>
              </div>
              <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="ძიება" />
              </div>
              <div className="cart">
                <a href="/"><i className="fa-solid fa-cart-shopping"></i> კალათა</a>
                <div className="hover-cart">
                  <div className="cart-fix"></div>
                  <div className="hover-cart-head">
                    <h6>კალათა</h6>
                    <p>{0} პროდუქტი</p>
                  </div>
                  <div className="hover-cat-prod"></div>
                  <div className="hover-cart-bottom">
                    <h5>ჯამური ფასი : <span>{0}₾</span></h5>
                    <a href="/">კალათის გახსნა</a>
                  </div>
                </div>
              </div>
              <div className="log-in">
                <a href="/"><i className="fa-solid fa-user"></i> შესვლა</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
    </nav>
  );
}


export default Navbar;