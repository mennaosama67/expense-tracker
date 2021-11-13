import { useState,useEffect } from "react";
import { db } from "./firebaseConfig";


export const useFirestore=()=>{

const [items,setItems]=useState([]);

const [budget,setBudget]=useState(0);

useEffect(()=>{
    let unsubscribe=db.collection('items').orderBy('date').onSnapshot(snap=>{
          let fetched=snap.docs.map(doc=>{ 
              return {...doc.data(),id:doc.id}
              
            })
           
           let budget=snap.docs.map(doc=>{
              return doc.data().amount
           })
           setBudget(
            budget.length>0&&budget.reduce((acc,curr)=>acc+curr),0)
            setItems(fetched);
      })
       
     return unsubscribe;
},[])
const addItem=async(item,amount)=>{
    await db.collection('items').add({...item,amount})
}
const deleteItem = async(id)=>{
    await db.collection('items').doc(id).delete();
}
return {items,addItem,deleteItem,budget};
}