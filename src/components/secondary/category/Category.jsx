import './Category.css';


function Category(props){
  return(
    <div className="mian-cat-cont">
      <div className="list-cont">
        {props.children}
      </div>
      <div className="cat-image">
        <img src={props.image} alt="a" />
      </div>
    </div>
  )
}

export default Category;
