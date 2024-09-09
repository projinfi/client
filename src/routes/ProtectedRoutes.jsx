import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { authStatus } from '../slices/authSlice';
import { useDispatch } from 'react-redux';

const ProtectedRoutes = ({ element: Component, ...rest }) => {
   
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null initially, true or false after verification
    const dispatch = useDispatch(); // Declare useDispatch here, not inside useEffect

    useEffect(() => {
        const verifyToken = async () => {
            const userToken = localStorage.getItem('userToken');
            console.log(userToken)
            try {
                const response = await axios.post(
                    'https://server-orcin-delta.vercel.app/users/verifyUserToken',
                    { 'usertoken': userToken },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
                if (response.data) {
                    setIsAuthenticated(true);
                    dispatch(authStatus("true")); // Update the auth state in Redux
                } else {
                    setIsAuthenticated(false);
                    dispatch(authStatus("false")); // Update the auth state in Redux
                }
            } catch (err) {
        
                console.log("Invalid user token");
                setIsAuthenticated(false);
                dispatch(authStatus("false")); // Ensure auth state is updated to false
              
            }
        };

        verifyToken();
    }, [dispatch]); // Include dispatch in dependency array

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // You can display a loading spinner or some placeholder here
    }

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/signin" />;
}

export default ProtectedRoutes;

