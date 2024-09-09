import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export const store = configureStore({
    devTools : true,
    reducer : {
        auth : authReducer
    }
})