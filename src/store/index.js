import { configureStore } from "@reduxjs/toolkit";
import authSlice from "src/features/authSlice";

const store = configureStore({
    reducer:{
        authSlice
    }
})


export default store