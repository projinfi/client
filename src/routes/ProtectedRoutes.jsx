import React, { useState, useEffect } from 'react';
import { Navigate} from 'react-router-dom';
import axios from 'axios';
import { setAuthStatus,setUserInfo} from '../slices/authSlice';
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
                    dispatch(setAuthStatus("true")); 
                    dispatch(setUserInfo({ userName: response.data.name, userEmail: response.data.email}));
                    
                } else {
                    setIsAuthenticated(false);
                    dispatch(setAuthStatus("false")); 
                    dispatch(setUserInfo({ userName: '', userEmail: '' }));
                }
            } catch (err) {
        
                console.log("Invalid user token");
                setIsAuthenticated(false);
                dispatch(setAuthStatus("false"));
                dispatch(setUserInfo({ userName: '', userEmail: '' }));
              
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

