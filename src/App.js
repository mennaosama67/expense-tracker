
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter ,Route,Routes } from 'react-router-dom'
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Navbar from "./components/header/Navbar";
import PrivateRoute from "./Config/PrivateRoute";
import Home from './components/home/Home';
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar/>
   
       <Routes >
         <Route path="/"  element={<PrivateRoute><Home/></PrivateRoute>}
         />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          </Routes >
      </BrowserRouter>
    
    </div>
  );
}

export default App;
