import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:"Auth",
    initialState:{Auth:false},
    reducers:{
        changeAuth:function(state,action){
            state.Auth=action.payload
        }
    }
})
export const{changeAuth}=authSlice.actions
export default authSlice.reducer