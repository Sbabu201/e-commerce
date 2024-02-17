import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: localStorage.getItem("userId") ? true : false
    },
    reducers: {
        loginAuth: (state) => {
            state.isLogin = true;
        },
        logoutAuth: (state) => {
            state.isLogin = false
        }
    }
});
export const { loginAuth, logoutAuth } = authSlice.actions
export default authSlice.reducer
