import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import toast from "react-hot-toast";

// Async thunk to get all wishlists
export const getAllWishLists = createAsyncThunk(
    'wishList/getAllWishLists',
    async (_, { rejectWithValue }) => {
        try {
            const userId = localStorage.getItem("userId");
            const response = await axios.get(`/wishlist/allWishList/${userId}`)
            // console.log('response', response)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to add a wishlist
export const addWishList = createAsyncThunk(
    'wishList/addWishList',
    async (wishlistData, { rejectWithValue }) => {
        try {
            console.log('wishListData', wishlistData)
            const response = await axios.post(`/wishlist/addWishList`, wishlistData);
            console.log('wishListItems', response);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to delete a wishlist
export const deleteWishList = createAsyncThunk(
    'wishList/deleteWishList',
    async (wishlistId, { rejectWithValue }) => {
        try {
            const deleted = await axios.delete(`/wishlist/removeWishList/${wishlistId}`);
            // console.log('deleted', deleted);
            return deleted.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Create wishList slice
const wishListSlice = createSlice({
    name: "wishList",
    initialState: {
        wishListItems: [],
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllWishLists.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllWishLists.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log('action', action.payload)
                action.payload.allWishList ? state.wishListItems = action.payload.allWishList : state.wishListItems = [];
            })
            .addCase(getAllWishLists.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(addWishList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addWishList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('action.payload', action.payload)
                if (action.payload.success) {
                    state.wishListItems.push(action.payload.wishlistitems);
                    toast.success(action.payload.message)
                }
                else
                    toast.error(action.payload.message)
            })
            .addCase(addWishList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deleteWishList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteWishList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.wishListItems = state.wishListItems.filter(item => item._id !== action.payload.deleteWishlist._id);
                // console.log('action.payload', action.payload)
                toast.success(action.payload.message);
            })
            .addCase(deleteWishList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default wishListSlice.reducer;
