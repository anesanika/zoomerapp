import "./List.css";



function Lists(props) {
  return(

    <div className="allList">
      <h1>{props.title}</h1>
      <ul >
        {props.children}
      </ul>
    </div>
  )
}; 


export default Lists