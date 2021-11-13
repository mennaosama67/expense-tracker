import React,{useContext} from 'react'
import { Route,Navigate } from 'react-router-dom';
import { authContext } from './Auth';

const PrivateRoute=({ children })=> {
    const {user}=useContext(authContext);

    return (  !user? <Navigate to="/signin"/> : children  )
    
    }
export default PrivateRoute;
