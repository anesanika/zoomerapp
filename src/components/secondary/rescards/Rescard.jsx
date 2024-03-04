import "./Rescard.css";



function Rescard(props){
  return(
    <div className="res-card-cont">
      <a href="/"></a>
      <p>{props.title}</p>
      <div className="res-card-iamge">
        <img src={props.image} alt="card" />
      </div>
    </div>
  );
}
export default Rescard;