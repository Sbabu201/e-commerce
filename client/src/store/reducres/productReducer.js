import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import toast from "react-hot-toast";
import { URL } from "../../pages/utilities/serverlink";
// Async thunk to fetch all bag items
export const getAllProductItems = createAsyncThunk(
    'bag/getAllProductItems',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${URL}/product/allProduct`);
            // console.log('response', response)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to add a bag item
export const addProductItem = createAsyncThunk(
    'bag/addProductItem',
    async (bagItemData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${URL}/bag/addbag`, bagItemData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to delete a bag item
export const deleteProductItem = createAsyncThunk(
    'bag/deleteProductItem',
    async (bagItemId, { rejectWithValue }) => {
        try {
            const deleted = await axios.delete(`${URL}/bag/removeBag/${bagItemId}`);
            return deleted.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Create bag slice
const bagSlice = createSlice({
    name: "bag",
    initialState: {
        productItems: [],
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProductItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllProductItems.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log('action.payload', action.payload)
                action.payload.products ? state.productItems = action.payload.products : state.productItems = [];
            })
            .addCase(getAllProductItems.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(addProductItem.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addProductItem.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('action.payload', action.payload)
                if (action.payload.success) {
                    state.productItems.push(action.payload.bagitems);
                    toast.success(action.payload.message)
                }
                else
                    toast.error(action.payload.message)
            })
            .addCase(addProductItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deleteProductItem.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteProductItem.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('action.payload', action.payload)
                state.productItems = state.productItems.filter(item => item._id !== action.payload.deleteBag._id);
                toast.success(action.payload.message)
            })
            .addCase(deleteProductItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default bagSlice.reducer;
