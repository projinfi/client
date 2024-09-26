import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
    devTools : true,
    reducer : {
        auth : authReducer,
        cart : cartReducer,
    }
})