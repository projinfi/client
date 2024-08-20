import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ element: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('userToken');
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
}

export default ProtectedRoutes;