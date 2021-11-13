import React from 'react'
import "./itemList.css"
import { useFirestore } from './../../Config/useFirestore';
import Item from './../item/Item';
function ItemList() {
    const {items}=useFirestore();
   
    return (
        <div className="item-list">
                {items.map(item=>{
                    return <Item item={item} key={item.id}/>
                })}
            
        </div>
    )
}

export default ItemList
