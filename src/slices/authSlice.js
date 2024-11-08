import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  authStatus : "false",
  userName : '',
  userEmail : '',
  userId : null
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
          state.userEmail = action.payload.userEmail;
          state.userId = action.payload.userId;
        }
      
    }
  },
  console.log("redux state>>>>>>>>>",initialState)
)

export const {setAuthStatus,setUserInfo} = authSlice.actions;
export default authSlice.reducer;