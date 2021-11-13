import React, { useState } from "react";
import { auth } from "./../../Config/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const initialState={email:"",password:"",confirmPassword:""}

function SignUp() {

  let [input,setInput]=useState(initialState);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleChange=(e)=>{
     setInput({
       ...input,
       [e.target.name]:e.target.value
     })
  }
   const handleSubmit= async(e)=>{
       e.preventDefault();
       if(input.password!==input.confirmPassword)
      return setError("Password don't match ")

       try {
        await auth.createUserWithEmailAndPassword(input.email,input.password)
        setInput(initialState);
        navigate("/");
      } catch (error) {
        setError(error.message);
      }
      
    }
  
   
  return (
    <>
      <form className="container mt-5 signup" autoComplete="off"  onSubmit={handleSubmit}>
          <legend> <h4>Sign Up</h4></legend>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
           Enter Email 
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={input.email}
            onChange={handleChange}
          
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
          Enter Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={input.password}
            onChange={handleChange}
           
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
         Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChange}
           
          />
        </div>
    
        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
        <p className="error">{error}</p> 
        <span>Already a user ?</span> <Link to="/signin">Sign In</Link>
      </form>
   
    </>
  );
}

export default SignUp;
