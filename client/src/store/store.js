import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./reducres/authReducer"
import wishListReducers from "./reducres/wishListReducers"
import bagreducer from "./reducres/bagreducer"
import productReducer from "./reducres/productReducer"
import ratingReducer from "./reducres/ratingReducer"
import addressReducer from "./reducres/addressReducer"
import orderReducer from "./reducres/orderReducer"
const store = configureStore({
    reducer: { authReducer, wishListReducers, bagreducer, productReducer, ratingReducer, addressReducer, orderReducer }
})


export default store