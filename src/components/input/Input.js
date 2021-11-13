import React, { useState, useRef } from "react";
import "./input.css";
import { useFirestore } from "./../../Config/useFirestore";

let initialItem = { title: "", date: "", type: "" };
function Input() {
  const {addItem } = useFirestore();
  const [item, setItem] = useState(initialItem);
  const [amount, setAmount] = useState("");
  const typeRef = useRef(null);

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
      type: typeRef.current.value,
    });
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const actualAmount =
      typeRef.current.value === "expense" ? -Math.abs(parseInt(amount)) : parseInt(amount);
    await addItem(item, actualAmount);
    setItem(initialItem);
    setAmount("");
  };
  return (
    <div className="input mt-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter title..."
          onChange={handleChange}
          value={item.title}
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter amount..."
          onChange={handleAmount}
          value={amount}
         
        />
        <input type="date" name="date" onChange={handleChange}  value={item.date}/>
        <label htmlFor="type">Type</label>
        <select name="type" onChange={handleChange} ref={typeRef}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
}

export default Input;
