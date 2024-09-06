import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoutes = ({ element: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null initially, true or false after verification

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
                } else {
                    setIsAuthenticated(false);
                }
            } catch (err) {
                console.log("Invalid user token");
                setIsAuthenticated(false);
            }
        };

        verifyToken();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // You can display a loading spinner or some placeholder here
    }

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/signin" />;
}

export default ProtectedRoutes;
