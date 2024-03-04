import "./footer.css";


function Footer(){
  return(
    <footer>
      <div className="content">
        <div className="lists-cont">
          <div>
            <h3>ნავიგაცია</h3>
            <ul>
              <li><a href="">ჩვენ შესახებ</a></li>
              <li><a href="">წესები და პირობები</a></li>
              <li><a href="">კორპორატიული   გაყიდვები</a></li>
              <li><a href="">მიწოდების   სერვისი</a></li>
              <li><a href="">კარიერა</a> </li>
              <li><a href="">Trade In</a></li>
            </ul>
          </div>
          <div>
            <h3>გადახდები</h3>
            <ul>
              <li><a href="">გადახდის  მეთოდები</a></li>
              <li><a href="">გარანტია</a> </li>
              <li><a href="">განვადება</a> </li>
              <li><a href="">ნივთის დაბრუნება</a>  </li>
              <li><a href="">ნივთისონლაინ ყიდვის ინსტრუქცია</a></li>
            </ul>
          </div>
          <div>
            <h3>გამოგვყევი</h3>
            <ul>
              <li><a href=""><i className="fa-brands fa-facebook"></i>Facebook</a></li>
              <li><a href=""><i className="fa-brands fa-youtube"></i>Youtube</a> </li>
              <li><a href=""><i className="fa-brands fa-instagram"></i>Instagram</a> </li>
              <li><a href=""><i className="fa-brands fa-tiktok"></i>Tik Tok</a> </li>
            </ul>
          </div>
          <div>
            <h3>კონტაქტი</h3>
            <ul>
              <li><a href=""><i className="fa-solid fa-envelope"></i>Info@zoommer.ge</a> </li>
              <li><a href=""><i className="fa-solid fa-phone"></i>+995 (32) 2 60 30 60 / *7007</a> </li>
              <li><a href=""><i className="fa-solid fa-location-dot"></i>ფილიალები</a> </li>
              <li><a href="">Zoommer App</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}



export default Footer;







