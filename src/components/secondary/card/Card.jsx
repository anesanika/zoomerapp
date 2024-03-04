import { Link } from "react-router-dom";
import "./Card.css";

function Card(porps){
  return(
    <>
    <div className="card-cont">
      <div className="card-top">
        <Link to={'/product'}></Link>
        <div className="card-image">
          <img src={porps.image} alt="prod"  />
        </div>
        <div className="one-see-peice">
          <p>ერთი ნახვით ფასი</p>
        </div>
        <div className="price-monthly">
          <div className="pricess">
            <h4>{porps.price} ₾</h4>
            <h5>{porps.oldPrice}</h5>
          </div>
          <p>თვეში <span>{porps.monthPrice} ₾</span>-დან</p>
          <h3>{porps.title}</h3>
        </div>
      </div>
      <div className="card-bottom">
        <a href="/"><i className="fa-solid fa-right-left"></i></a>
        <button><i className="fa-solid fa-cart-shopping"></i>დამატება</button>
      </div>
    </div>
    </>
  );
}


export default Card;
