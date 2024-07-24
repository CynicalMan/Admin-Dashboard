import { createSlice } from "@reduxjs/toolkit";
import { ItemsState } from "../../models/ItemState.model";
import { getItems, addItem, updateItem, deleteItem, getItem } from "../../api/itemsApi";

const initialState: ItemsState = {
    items: [],
    status: "idle",
    error: null,
};


const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getItems.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getItems.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
        })
        .addCase(getItems.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || "Failed to fetch items";
        })
        .addCase(getItem.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getItem.fulfilled, (state, action) => {
            state.status = "succeeded";
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItemIndex !== -1) {
                console.log("jj");
                state.items[existingItemIndex] = action.payload;
            } else {
                state.items.push(action.payload);
            }
        })
        .addCase(getItem.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || "Failed to fetch item";
        })
        .addCase(addItem.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(updateItem.fulfilled, (state, action) => {
            const index = state.items.findIndex(
            (item) => item.id === action.payload.id
            );
            if (index !== -1) {
            state.items[index] = action.payload;
            }
        })
        .addCase(deleteItem.fulfilled, (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        });
    },
});

export default itemsSlice.reducer;
