import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import toast from "react-hot-toast";

// Async thunk to fetch all bag items
export const getAllBagItems = createAsyncThunk(
    'bag/getAllBagItems',
    async (_, { rejectWithValue }) => {
        try {
            const userId = localStorage.getItem("userId")
            const response = await axios.get(`/bag/allbag/${userId}`);
            // console.log('response', response)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to add a bag item
export const addBagItem = createAsyncThunk(
    'bag/addBagItem',
    async (bagItemData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`/bag/addbag`, bagItemData);
            console.log('res.data', response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to delete a bag item
export const deleteBagItem = createAsyncThunk(
    'bag/deleteBagItem',
    async (bagItemId, { rejectWithValue }) => {
        try {
            const deleted = await axios.delete(`/bag/removeBag/${bagItemId}`);
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
        bagItems: [],
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllBagItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllBagItems.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log('action.payload', action.payload)
                action.payload.allBagItems ? state.bagItems = action.payload.allBagItems : state.bagItems = [];
            })
            .addCase(getAllBagItems.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(addBagItem.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addBagItem.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('action.payload', action.payload)
                if (action.payload.success) {
                    state.bagItems.push(action.payload.bagitems);
                    toast.success(action.payload.message)
                }
                else
                    toast.error(action.payload.message)
            })
            .addCase(addBagItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deleteBagItem.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteBagItem.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('action.payload', action.payload)
                state.bagItems = state.bagItems.filter(item => item._id !== action.payload.deleteBag._id);
                toast.success(action.payload.message)
            })
            .addCase(deleteBagItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default bagSlice.reducer;
