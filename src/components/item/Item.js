import React,{useRef} from "react";
import "./item.css";
import { useFirestore } from './../../Config/useFirestore';
function Item({item}) {
    const {deleteItem}=useFirestore();
    const deleteRef=useRef();
  return (
    <div className="item"
      onMouseEnter={()=>(deleteRef.current.style.display="block")}
      onMouseLeave={()=>(deleteRef.current.style.display="none")}
    >
      <div className="item__title ">
       <h3>{item.title}</h3> 
      </div>
     
      <div className="item__info">
   
        <p className={item.amount>0?"income":"expense"}>${Math.abs(item.amount)}</p>
        <p>{item.date}</p>
       
      </div>
      <button onClick={()=>deleteItem(item.id)} className="item__delete" ref={deleteRef}>Delete</button>
    </div>
  );
}

export default Item;
