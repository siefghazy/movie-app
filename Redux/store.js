import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/slices.js"
const store=configureStore({
    reducer:{
        Auth:authReducer
    }
})
export default store