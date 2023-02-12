import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import useAuth from "../customHooks/useAuth";
import { db } from "../firebase.config";

const addOrder = createAsyncThunk("user/addOrder", async (data) => {
    try {
        await addDoc(collection(db, 'orders'), data);
        toast.success('Order Placed, Thank You!')
    } catch (e) {
        toast.error(e.message);
    }
});

let initialState = {
    users: [],
    isLoading: 'false',
}

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addOrder.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addOrder.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(addOrder.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
})

export { addOrder };

export default orderSlice.reducer;