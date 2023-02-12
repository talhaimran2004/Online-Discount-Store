import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const addUser = createAsyncThunk("user/addUser", async (data) => {
    try {
    //   const id = new Date().getTime();
      await setDoc(doc(db, "users", data.uid), { data });
    } catch (e) {
      console.log(e);
    }
  });

let initialState = {
    users: [],
    isLoading: 'false',
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
})

export { addUser };

export default authSlice.reducer;