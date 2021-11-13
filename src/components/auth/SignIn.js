import React, { useState } from "react";
import { auth } from "./../../Config/firebaseConfig";
import { useNavigate,Link } from "react-router-dom";

const initialState = { email: "", password: "" };

function SignIn() {
  let [input, setInput] = useState(initialState);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      setInput(initialState);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form
        className="container mt-5 login"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <legend>
          {" "}
          <h4>Sign In</h4>
        </legend>
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

        <button type="submit" className="btn btn-primary">
          SignIn
        </button>
        <p className="error">{error}</p>
        <span>Not a user ?</span> <Link to="/signup">Sign Up</Link>
      </form>
   
    </>
  );
}

export default SignIn;
