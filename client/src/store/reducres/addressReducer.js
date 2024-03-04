import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import toast from "react-hot-toast";

// Async thunk to get all wishlists
export const getAllAddressLists = createAsyncThunk(
    'address/getAllAddress',
    async (_, { rejectWithValue }) => {
        try {
            const userId = localStorage.getItem("userId");
            const response = await axios.get(`/user/allAddress/${userId}`)
            // console.log('response', response)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to add a wishlist
export const addAddress = createAsyncThunk(
    'Address/addAddress',
    async (addressData, { rejectWithValue }) => {
        try {
            console.log('addressData', addressData)
            const response = await axios.post(`/user/addAddress`, addressData);
            console.log('address', response);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to delete a wishlist
// export const deleteAddress = createAsyncThunk(
//     'wishList/deleteWishList',
//     async (wishlistId, { rejectWithValue }) => {
//         try {
//             const deleted = await axios.delete(`/user/addAddress/${wishlistId}`);
//             // console.log('deleted', deleted);
//             return deleted.data;
//         } catch (error) {
//             return rejectWithValue(error.response.data);
//         }
//     }
// );

// Create wishList slice
const addressSlice = createSlice({
    name: "wishList",
    initialState: {
        addressItems: [],
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllAddressLists.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllAddressLists.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log('action', action.payload)
                action.payload.allAddress ? state.addressItems = action.payload.allAddress : state.addressItems = [];
            })
            .addCase(getAllAddressLists.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(addAddress.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addAddress.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('action.payload', action.payload)
                if (action.payload.success) {
                    state.addressItems.push(action.payload.newAddressList);
                    toast.success(action.payload.message)
                }
                else
                    toast.error(action.payload.message)
            })
            .addCase(addAddress.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;

            })
            // .addCase(deleteWishList.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(deleteWishList.fulfilled, (state, action) => {
            //     state.status = 'succeeded';
            //     state.wishListItems = state.wishListItems.filter(item => item._id !== action.payload.deleteWishlist._id);
            //     // console.log('action.payload', action.payload)
            //     toast.success(action.payload.message);
            // })
            // .addCase(deleteWishList.rejected, (state, action) => {
            //     state.status = 'failed';
            //     state.error = action.payload;
            // });
    }
});

export default addressSlice.reducer;
