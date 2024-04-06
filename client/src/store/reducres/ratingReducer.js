import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import toast from "react-hot-toast";
import { URL } from "../../pages/utilities/serverlink";

// Async thunk to get all wishlists
export const getAllRating = createAsyncThunk(
    'rating/getAllrating',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${URL}/product/allRating`)
            console.log('response', response)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const editRating = createAsyncThunk(
    'rating/editrating',
    async (productId, { rejectWithValue }) => {
        try {
            console.log(productId)
            // console.log('ratingValue', ratingValue)
            const response = await axios.put(`${URL}/product/edit/${productId?.product}`, { ratingValue: productId?.ratingValue })
            console.log('response', response)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


// Async thunk to add a wishlist
export const addRating = createAsyncThunk(
    'rating/addRating',
    async (ratingData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${URL}/product/addRating`, ratingData);
            console.log('ratingItem', response);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to delete a wishlist
export const deleteRating = createAsyncThunk(
    'rating/deleteRating',
    async (ratingId, { rejectWithValue }) => {
        try {
            const deleted = await axios.delete(`/rating/removeRating/${ratingId}`);
            // console.log('deleted', deleted);
            return deleted.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Create wishList slice
const ratingSlice = createSlice({
    name: "rating",
    initialState: {
        ratingItems: [],
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllRating.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllRating.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log('action', action.payload)
                action.payload.ratings ? state.ratingItems = action.payload.ratings : state.ratingItems = [];
            })
            .addCase(getAllRating.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(editRating.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editRating.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log('action', action.payload)
                action.payload.ratings ? state.ratingItems = action.payload.ratings : state.ratingItems = [];
            })
            .addCase(editRating.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(addRating.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addRating.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('action.payload', action.payload)
                if (action.payload.success) {
                    state.ratingItems.push(action.payload.newRating);
                    toast.success(action.payload.message)
                }
                else
                    toast.error(action.payload.message)
            })
            .addCase(addRating.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deleteRating.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteRating.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.ratingItems = state.ratingItems.filter(item => item._id !== action.payload.deleteRating._id);
                // console.log('action.payload', action.payload)
                toast.success(action.payload.message);
            })
            .addCase(deleteRating.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default ratingSlice.reducer;
