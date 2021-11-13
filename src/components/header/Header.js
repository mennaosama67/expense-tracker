import React from 'react'
import "./header.css"
import { useFirestore } from './../../Config/useFirestore';
function Header() {
  const {budget}=useFirestore();
    return (
        <div className="header">
      <div className="header__title">
        <h1>Budget Tracker</h1>
      </div>
      <div className="header__balance">$ {budget}</div>
    </div>
    )
}

export default Header
