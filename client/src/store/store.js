import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./reducres/authReducer"
import wishListReducers from "./reducres/wishListReducers"
import bagreducer from "./reducres/bagreducer"
import productReducer from "./reducres/productReducer"

const store = configureStore({
    reducer: { authReducer, wishListReducers, bagreducer, productReducer }
})


export default store