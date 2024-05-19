import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // User sesion object goes here
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {

    }
})

export default authSlice.reducer