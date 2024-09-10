import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  authStatus : "false",
  userName : '',
  userEmail : ''
}

export const authSlice = createSlice(
  
  {
    name : 'auth',
    initialState,
    reducers : {
        setAuthStatus(state,action){
          state.authStatus = action.payload;
        },
        setUserInfo(state,action){
          state.userName = action.payload.userName;
          state.userEmail = action.payload.userEmail
        }
      
    }
  },
)

export const {setAuthStatus,setUserInfo} = authSlice.actions;
export default authSlice.reducer;