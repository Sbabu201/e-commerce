import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import toast from "react-hot-toast";
import { URL } from "../../pages/utilities/serverlink";

// Async thunk to fetch all bag items
export const getAllOrders = createAsyncThunk(
    'order/getAllOrderItems',
    async (_, { rejectWithValue }) => {
        try {
            const userId = localStorage.getItem("userId")
            const response = await axios.get(`${URL}/order/orderId/${userId}`);
            // console.log('response', response)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// // Async thunk to add a bag item
export const addOrder = createAsyncThunk(
    'order/addorderItem',
    async (orderData, { rejectWithValue }) => {
        try {
            console.log('orderData', orderData)
            const response = await axios.post(`${URL}/order/addOrder`, orderData);
            console.log('res.data', response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log('action.payload', action.payload)
                action.payload.existOrder ? state.orders = action.payload.existOrder : state.orders = [];
            })
            .addCase(getAllOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(addOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log('action.payload', action.payload)
                if (action.payload.success) {
                    state.orders.push(action.payload.order);
                    // toast.success(action.payload.message)
                }
                else
                    toast.error(action.payload.message)
            })
            .addCase(addOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
        // .addCase(deleteBagItem.pending, (state) => {
        //     state.status = 'loading';
        // })
        // .addCase(deleteBagItem.fulfilled, (state, action) => {
        //     state.status = 'succeeded';
        //     console.log('action.payload', action.payload)
        //     state.bagItems = state.bagItems.filter(item => item._id !== action.payload.deleteBag._id);
        //     toast.success(action.payload.message)
        // })
        // .addCase(deleteBagItem.rejected, (state, action) => {
        //     state.status = 'failed';
        //     state.error = action.payload;
        // });
    }
});

export default orderSlice.reducer;
