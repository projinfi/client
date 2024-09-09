import {createSlice} from '@reduxjs/toolkit';
const initialState = "false";

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        authStatus(state,action){
          return action.payload;
          
        }
    }
})

export const {authStatus} = authSlice.actions;
export default authSlice.reducer;